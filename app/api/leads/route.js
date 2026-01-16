import { dbConnect } from "@/lib/dbConnect";
import Lead from "@/lib/models/Lead";
export async function GET() {
  return Response.json({ message: "Leads API GET is working" }, { status: 200 });
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, phone, message = "" } = body;

    if (!name || !email || !phone) {
      return Response.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const digitsOnlyPhone = String(phone).replace(/\D/g, "");
    if (digitsOnlyPhone.length < 10) {
      return Response.json(
        { error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const MAX_MESSAGE_LENGTH = 500;
    if (String(message).length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { error: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const newLead = await Lead.create({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: digitsOnlyPhone,
      message: String(message),
    });

    // Fire-and-forget: don't block the response on the Google Sheets webhook.
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createdAt: newLead.createdAt?.toISOString?.() || new Date().toISOString(),
          name: newLead.name,
          email: newLead.email,
          phone: newLead.phone,
          message: newLead.message,
          source: "website",
        }),
      }).catch((sheetErr) => {
        console.error("Google Sheets webhook failed:", sheetErr);
      });
    }

    return Response.json({ lead: newLead }, { status: 201 });
  } catch (err) {
    console.error("API /api/leads error:", err);
  
    return Response.json(
      {
        error: "Something went wrong",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
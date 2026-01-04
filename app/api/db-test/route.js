import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  try {
    const conn = await dbConnect();
    const ready = conn?.connection?.readyState === 1; // 1 = connected
    return Response.json({ ok: ready });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
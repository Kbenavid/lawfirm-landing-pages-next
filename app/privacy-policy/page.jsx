export const metadata = {
    title: "Privacy Policy | Orozco Law Firm",
    alternates: {
      canonical: "/privacy-policy",
      languages: {
        en: "/privacy-policy",
        es: "/es/privacy-policy",
      },
    },
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-brand-purple">Privacy Policy</h1>
  
        <p className="mt-6 text-brand-gray">
          This website collects personal information that you voluntarily provide,
          such as your name, email address, phone number, and message content when
          you submit a form.
        </p>
  
        <h2 className="mt-10 text-xl font-semibold text-brand-purple">
          How We Use Information
        </h2>
        <p className="mt-3 text-brand-gray">
          We use the information you provide to respond to your inquiry, evaluate
          your request, and communicate with you about potential legal services.
        </p>
  
        <h2 className="mt-10 text-xl font-semibold text-brand-purple">
          Sharing of Information
        </h2>
        <p className="mt-3 text-brand-gray">
          We do not sell personal information. We do not share personal
          information for cross-context behavioral advertising.
        </p>
  
        <h2 className="mt-10 text-xl font-semibold text-brand-purple">
          Your California Privacy Rights
        </h2>
        <p className="mt-3 text-brand-gray">
          California residents may request access to or deletion of their personal
          information. To submit a request, contact us using the phone number on
          this website.
        </p>
  
        <h2 className="mt-10 text-xl font-semibold text-brand-purple">
          Updates
        </h2>
        <p className="mt-3 text-brand-gray">
          We may update this policy from time to time. Changes will be posted on
          this page.
        </p>
      </main>
    );
  }
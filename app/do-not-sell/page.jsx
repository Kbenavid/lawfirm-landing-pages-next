export const metadata = {
    title: "Do Not Sell or Share My Personal Information | Orozco Law Firm",
    alternates: {
      canonical: "/do-not-sell",
      languages: {
        en: "/do-not-sell",
        es: "/es/do-not-sell",
      },
    },
  };
  
  export default function DoNotSellPage() {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-brand-purple">
          Do Not Sell or Share My Personal Information
        </h1>
  
        <p className="mt-6 text-brand-gray">
          Orozco Law Firm does not sell personal information. We also do not share
          personal information for cross-context behavioral advertising as those
          terms are defined under California law.
        </p>
  
        <p className="mt-4 text-brand-gray">
          If you have questions about our privacy practices, please contact us
          using the phone number listed on this website.
        </p>
      </main>
    );
  }
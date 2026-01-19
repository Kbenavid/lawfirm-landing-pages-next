import { MESSAGES } from "@/lib/i18n";

import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQ from "@/components/FAQ";
import OfficePhotoSection from "@/components/OfficePhotoSection";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
};

export default function Page() {
  const t = MESSAGES.es;

  return (
    <main
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Soft overlay so content stays readable */}
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero t={t} />
          <div className="mt-14 space-y-14">
            <ReviewsCarousel t={t} />
            <FAQ t={t} />
            <OfficePhotoSection t={t} />
          </div>
          <div className="mt-14 border-t border-gray-200 pt-14">
            <SiteFooter t={t} />
          </div>
        </div>
      </div>
    </main>
  );
}
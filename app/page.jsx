import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQ from "@/components/FAQ";
import OfficePhotoSection from "@/components/OfficePhotoSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Soft overlay so content stays readable */}
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <div className="mt-14 space-y-14">
            <ReviewsCarousel />
            <FAQ />
            <OfficePhotoSection />
          </div>
          <div className="mt-14 border-t border-gray-200 pt-14">
            <SiteFooter />
          </div>
        </div>
      </div>
    </main>
  );
}
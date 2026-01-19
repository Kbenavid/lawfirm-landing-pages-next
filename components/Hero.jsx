import Image from "next/image";
import LeadForm from "./LeadForm";
import LanguageToggle from "./LanguageToggle";

export default function Hero({ t }) {
  const copy = {
    header: {
      callNow: t?.header?.callNow ?? "Call now",
      callAriaLabel: t?.header?.callAriaLabel ?? "Call Orozco Law Firm now",
    },
    hero: {
      headline: t?.hero?.headline ?? "San Diego Personal Injury Attorney",
      subheadline:
        t?.hero?.subheadline ?? "Talk to a real attorney. No pressure. No upfront fees.",
      promise: t?.hero?.promise ?? "We don’t get paid unless you do!",
      body:
        t?.hero?.body ??
        "If you’ve been injured as a result of someone else’s negligence, call Orozco Law Firm. We’ll fight for an outcome that would compensate for lost wages, medical bills, cost of living expenses, and more.",
      typesTitle: t?.hero?.typesTitle ?? "Types of personal injury cases",
      types:
        t?.hero?.types ??
        [
          "Car accidents",
          "Motorcycle accidents",
          "Truck accidents",
          "Premises liability",
          "Slip and fall",
          "Other accidents",
        ],
    },
    photo: {
      alt: t?.photo?.alt ?? "Attorney Jose Orozco",
      name: t?.photo?.name ?? "Jose Orozco",
      title: t?.photo?.title ?? "San Diego Attorney",
    },
    formCard: {
      headline: t?.formCard?.headline ?? "Injured? Lets Talk About What Happens Next",
      subheadline:
        t?.formCard?.subheadline ??
        "Trusted by San Diego injury victims for honest guidance and real results.",
    },
    badges: {
      ntlAlt: t?.badges?.ntlAlt ?? "NTL Top 100 Member Seal",
      bestLitAlt: t?.badges?.bestLitAlt ?? "Best Litigation Attorneys",
    },
  };

  return (
    <section className="min-h-screen bg-transparent" aria-labelledby="hero-headline">
      {/* FULL-WIDTH SOLID HEADER BAR */}
      <div
      id="contact"
      className="w-full bg-white border-b border-gray-200">
        <div className="mx-auto w-full max-w-screen-2xl px-3 sm:px-6">
          <header className="flex items-center justify-between py-6">
            <div>
              <Image
                src="/Orozco-Law-Firm-Logo.png"
                alt="Orozco Law Firm"
                width={225}
                height={62}
                className="h-12 w-auto"
                priority
              />
            </div>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <a
                href="tel:+16197361268"
                aria-label={copy.header.callAriaLabel}
                className="inline-flex items-center rounded-md bg-brand-gold px-5 py-3 text-base font-semibold text-white"
              >
                {copy.header.callNow}
              </a>
            </div>
          </header>
        </div>
      </div>
      {/* END HEADER BAR */}

      <div className="mx-auto w-full max-w-screen-2xl px-3 py-8 sm:px-6 sm:py-10">
        <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="order-1 lg:order-none space-y-6 lg:col-span-4 text-brand-gray">
            <h1
              id="hero-headline"
              className="text-4xl font-bold tracking-tight text-brand-purple"
            >
              {copy.hero.headline}
            </h1>
            <p className="mt-3 max-w-md text-base text-brand-gray">{copy.hero.subheadline}</p>

            <ul className="space-y-3 text-sm text-brand-gray">
              <li className="text-2xl font-semibold text-brand-gold tracking-tight">
                {copy.hero.promise}
              </li>

              <li>
                {copy.hero.body}
              </li>

              <li className="pt-3">
                <div className="mb-2 h-px w-16 bg-brand-gold/40" />
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-purple">
                  {copy.hero.typesTitle}
                </p>

                <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-brand-gray">
                  {copy.hero.types.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="order-3 lg:order-none lg:col-span-4">
            {/* Photo (integrated hero look) */}
            <div className="relative overflow-hidden h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl ring-1 ring-black/5">
              <Image
                src="/Jose-Orozco.jpg"
                alt={copy.photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
                priority
              />
              {/* Subtle overlay to blend the photo into the light page */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>

            {/* Caption */}
            <div className="mt-4 hidden sm:block">
              <p className="text-sm font-semibold text-brand-gray">{copy.photo.name}</p>
              <p className="text-sm text-brand-gray">{copy.photo.title}</p>
            </div>
          </div>

          <div className="order-2 lg:order-none lg:col-span-4 w-full">
          <div className="w-full p-8 rounded-2xl bg-brand-purple/5 backdrop-blur-sm shadow-lg ring-1 ring-black/10">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-brand-purple">
                {copy.formCard.headline}
              </h2>
              <p className="mt-2 text-sm text-brand-gray">
                {copy.formCard.subheadline}
              </p>
            </div>

            <div className="scroll-mt-28">
              <LeadForm t={t} />
            </div>
          </div>
            </div>
          </div>
        </div>
          {/* --- TRUST BADGES (Bottom strip) --- */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            {/* Badge 1 (slightly larger) */}
            <Image
              src="/NTL-top-100-member-seal.png"
              alt={copy.badges.ntlAlt}
              width={300}
              height={300}
              className="h-auto w-full max-w-[180px] sm:max-w-[220px]"
            />

            {/* Badge 2 */}
            <Image
              src="/best-litigation-attorneys.png"
              alt={copy.badges.bestLitAlt}
              width={1321}
              height={195}
              className="h-auto w-full max-w-[360px] sm:max-w-[520px]"
            />
          </div>
        </div>
        {/* --- END TRUST BADGES --- */}
      </div>
    </section>
  );
}
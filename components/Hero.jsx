import Image from "next/image";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="min-h-screen bg-transparent">
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

            <div>
              <a
                href="tel:+16197361268"
                className="inline-flex items-center rounded-md bg-brand-gold px-5 py-3 text-base font-semibold text-white"
              >
                Call now
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
            <h1 className="text-4xl font-bold tracking-tight text-brand-purple">
              San Diego Personal Injury Attorney
            </h1>
            <p className="mt-3 max-w-md text-base text-brand-gray">
              Talk to a real attorney. No pressure. No upfront fees.
              </p>

            <ul className="space-y-3 text-sm text-brand-gray">
              <li className="text-2xl font-semibold text-brand-gold tracking-tight">
                We don’t get paid unless you do!
              </li>

              <li>
                If you’ve been injured as a result of someone else’s negligence, call Orozco Law Firm.
                We’ll fight for an outcome that would compensate for lost wages, medical bills, cost of
                living expenses, and more.
              </li>

              <li className="pt-3">
                <div className="mb-2 h-px w-16 bg-brand-gold/40" />
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-purple">
                  Types of personal injury cases
                </p>

                <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-brand-gray">
                  <li>Car accidents</li>
                  <li>Motorcycle accidents</li>
                  <li>Truck accidents</li>
                  <li>Premises liability</li>
                  <li>Slip and fall</li>
                  <li>Workers’ compensation</li>
                  <li>Medical malpractice</li>
                  <li>Product liability</li>
                  <li>Other accidents</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="order-3 lg:order-none lg:col-span-4">
            {/* Photo (integrated hero look) */}
            <div className="relative overflow-hidden h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl ring-1 ring-black/5">
              <Image
                src="/Jose-Orozco.jpg"
                alt="Attorney Jose Orozco"
                width={400}
                height={500}
                className="h-full w-full object-contain brightness-110 contrast-105"
              />
              {/* Subtle overlay to blend the photo into the light page */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>

            {/* Caption */}
            <div className="mt-4 hidden sm:block">
              <p className="text-sm font-semibold text-brand-gray">Jose Orozco</p>
              <p className="text-sm text-brand-gray">San Diego Attorney</p>
            </div>
          </div>

          <div className="order-2 lg:order-none lg:col-span-4 w-full">
          <div className="w-full p-8 rounded-2xl bg-brand-purple/5 backdrop-blur-sm shadow-lg ring-1 ring-black/10">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-brand-purple">
                Injured? Lets Talk About What Happens Next
              </h2>
              <p className="mt-2 text-sm text-brand-gray">
                Trusted by San Diego injury victims for honest guidance and real results.
              </p>
            </div>

            <div className="scroll-mt-28">
              <LeadForm />
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
              alt="NTL Top 100 Member Seal"
              width={300}
              height={300}
              className="h-auto w-full max-w-[180px] sm:max-w-[220px]"
            />

            {/* Badge 2 */}
            <Image
              src="/best-litigation-attorneys.png"
              alt="Best Litigation Attorneys"
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
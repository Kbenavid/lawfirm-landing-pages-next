export default function SiteFooter({ t }) {
  const copy = {
    firmName: t?.siteFooter?.firmName ?? "Orozco Law Firm",
    address:
      t?.siteFooter?.address ??
      "310 3rd Street Suite C-22 Chula Vista, CA 91910",
    contactLabel: t?.siteFooter?.contactLabel ?? "Contact",
    phoneDisplay: t?.siteFooter?.phoneDisplay ?? "(619) 736-1268",
    phoneAria:
      t?.siteFooter?.phoneAria ?? "Call Orozco Law Firm",
    rights:
      t?.siteFooter?.rights ?? "All rights reserved.",
  };
    return (
      <footer>
        {/* Gold accent divider */}
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="h-px w-full bg-brand-gold/40" />
        </div>

        {/* Footer / contact section */}
        <div className="border-t border-black/10 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-wide text-brand-purple">
                  {copy.firmName}
                </p>
                <p className="mt-2 text-sm text-brand-gray">
                  {copy.address}
                </p>
              </div>

              <div className="text-sm text-brand-gray">
                <p className="font-medium text-brand-purple">{copy.contactLabel}</p>
                <a
                  href="tel:+16197361268"
                  aria-label={copy.phoneAria}
                  className="mt-2 inline-block font-semibold text-brand-gold hover:underline"
                >
                  {copy.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-gray">
              <a
                href="/privacy-policy"
                className="hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/do-not-sell"
                className="hover:underline"
              >
                Do Not Sell or Share My Personal Information
              </a>
            </div>
            <p className="mt-8 text-xs text-brand-gray/80">
              © {new Date().getFullYear()} {copy.firmName}. {copy.rights}
            </p>
          </div>
        </div>
      </footer>
  );
  }
export default function SiteFooter() {
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
                  Orozco Law Firm
                </p>
                <p className="mt-2 text-sm text-brand-gray">
                  310 3rd Street Suite C-22 Chula Vista, CA 91910
                </p>
              </div>

              <div className="text-sm text-brand-gray">
                <p className="font-medium text-brand-purple">Contact</p>
                <a
                  href="tel:+16190000000"
                  className="mt-2 inline-block font-semibold text-brand-gold hover:underline"
                >
                  (619) 736-1268
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-brand-gray/80">
              © {new Date().getFullYear()} Orozco Law Firm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
  }
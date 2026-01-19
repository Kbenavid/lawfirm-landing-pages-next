export default function OfficePhotoSection({ t }) {
  const copy = {
    imageAlt:
      t?.officePhotoSection?.imageAlt ?? "Orozco Law Firm team",
    caption:
      t?.officePhotoSection?.caption ??
      "A dedicated legal team focused on your recovery and peace of mind.",
  };
    return (
      <section>
        {/* Office / team photo section */}
        <section className="mx-auto w-full max-w-screen-2xl px-6 pb-16">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 backdrop-blur-sm">
            <img
              src="/Orozco-Law-Firm.jpg"
              alt={copy.imageAlt}
              className="h-auto w-full object-contain"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-white/5 to-transparent" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg font-semibold text-brand-purple">
  {copy.caption}
</p>
        </section>
      </section>
    );
  }
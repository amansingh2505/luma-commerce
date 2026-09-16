function EditorialBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
          alt="Warm contemporary interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative flex min-h-[520px] items-end p-8 md:p-14">

          <div className="max-w-xl text-white">

            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              The Luma Journal
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight md:text-6xl">
              A home isn't filled.
              <br />
              It's curated.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/80 md:text-base">
              Discover how thoughtful pieces, natural textures and
              considered spaces can transform the way you live.
            </p>

            <a
              href="/journal"
              className="mt-8 inline-block border-b border-white pb-1 text-sm font-medium transition hover:border-[#D6C5A9]"
            >
              Read the Luma Journal →
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default EditorialBanner

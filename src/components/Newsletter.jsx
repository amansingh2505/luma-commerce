function Newsletter() {
  return (
    <section className="border-y border-[#E5E1D8] bg-[#EFECE5]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8B7355]">
            Stay inspired
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
            Bring more Luma home.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#6F6D65] md:text-base">
            Get new collections, thoughtful interiors and stories from
            the world of Luma, delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="min-h-12 flex-1 rounded-full border border-[#D8D3C9] bg-white px-5 text-sm outline-none placeholder:text-[#9A978F] focus:border-[#8B7355]"
            />

            <button
              type="submit"
              className="min-h-12 rounded-full bg-[#1F1F1B] px-7 text-sm font-medium text-white transition hover:bg-[#8B7355]"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-[11px] text-[#8A877F]">
            By subscribing, you agree to receive updates from Luma.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Newsletter

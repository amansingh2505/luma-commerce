function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-6 text-center">

        <div className="max-w-3xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            The future of technology
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Technology.
            <br />
            Beautifully designed.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Discover premium technology designed for the way you live,
            work, and create.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200">
              Shop Now
            </button>

            <button className="rounded-full border border-gray-700 px-6 py-3 font-medium text-white transition hover:bg-gray-900">
              Explore
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home
function Footer() {
  return (
    <footer className="bg-[#1F1F1B] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-2xl font-semibold tracking-[0.25em]">
              LUMA
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              Thoughtfully designed furniture and home pieces for spaces
              that feel uniquely yours.
            </p>

          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="/products"
                className="text-sm text-white/75 transition hover:text-white"
              >
                All Products
              </a>

              <a
                href="/collections/living"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Living
              </a>

              <a
                href="/collections/dining"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Dining
              </a>

              <a
                href="/collections/bedroom"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Bedroom
              </a>

              <a
                href="/collections/decor"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Decor
              </a>

            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Luma
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="/journal"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Journal
              </a>

              <a
                href="/about"
                className="text-sm text-white/75 transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="/contact"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="/shipping"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Shipping & Returns
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col justify-between gap-5 text-xs text-white/40 md:flex-row md:items-center">

          <p>
            © 2026 Luma Commerce. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Pinterest
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
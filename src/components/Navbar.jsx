function Navbar() {
  return (
    <header className="bg-[#F7F5F0]">

      {/* Announcement Bar */}
      <div className="border-b border-[#E5E1D8] py-2 text-center text-[10px] uppercase tracking-[0.2em] text-[#6F6D65]">
        Free shipping on orders over ₹25,000 · Designed for everyday living
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-[#E5E1D8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <a
            href="/"
            className="text-xl font-semibold tracking-[0.25em]"
          >
            LUMA
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/products"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Shop
            </a>

            <a
              href="/collections/living"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Living
            </a>

            <a
              href="/collections/dining"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Dining
            </a>

            <a
              href="/collections/bedroom"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Bedroom
            </a>

            <a
              href="/collections/decor"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Decor
            </a>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">

            <button
              aria-label="Search"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Search
            </button>

            <button
              aria-label="Wishlist"
              className="text-xl leading-none transition-colors hover:text-[#8B7355]"
            >
              ♡
            </button>

            <button
              aria-label="Shopping cart"
              className="text-sm transition-colors hover:text-[#8B7355]"
            >
              Cart
            </button>

          </div>

        </div>
      </nav>

    </header>
  )
}

export default Navbar
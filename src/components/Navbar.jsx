function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          LUMA
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-gray-300 hover:text-white">
            Home
          </a>

          <a href="/products" className="text-sm text-gray-300 hover:text-white">
            Products
          </a>

          <a href="/categories" className="text-sm text-gray-300 hover:text-white">
            Categories
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-300 hover:text-white">
            Search
          </button>

          <button className="text-sm text-gray-300 hover:text-white">
            Cart
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
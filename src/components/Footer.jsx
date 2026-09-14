function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm">
            © 2026 Luma Commerce. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
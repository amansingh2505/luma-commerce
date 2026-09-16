function ProductCard({ product }) {
  return (
    <article className="group">

      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#E8E3D9]">

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg transition hover:bg-white"
        >
          ♡
        </button>

        {/* Product Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#F7F5F0] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#6F6D65]">
            {product.badge}
          </span>
        )}

      </div>

      {/* Product Information */}
      <div className="mt-4">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h3 className="text-base font-medium text-[#1F1F1B]">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-[#6F6D65]">
              {product.category}
            </p>
          </div>

          <p className="text-sm font-medium text-[#1F1F1B]">
            ₹{product.price.toLocaleString('en-IN')}
          </p>

        </div>

        {/* Color */}
        {product.color && (
          <p className="mt-3 text-xs text-[#8B7355]">
            {product.color}
          </p>
        )}

      </div>

    </article>
  )
}

export default ProductCard

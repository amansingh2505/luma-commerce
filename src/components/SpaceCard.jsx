function SpaceCard({ title, description, image }) {
  return (
    <a
      href="/products"
      className="group relative block h-[420px] overflow-hidden rounded-3xl"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/30" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">

        <p className="text-xs uppercase tracking-[0.2em] opacity-80">
          Explore
        </p>

        <h3 className="mt-2 text-2xl font-medium">
          {title}
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
          {description}
        </p>

        <span className="mt-5 inline-block text-sm font-medium underline underline-offset-4 transition group-hover:translate-x-1">
          Shop now →
        </span>

      </div>
    </a>
  )
}

export default SpaceCard
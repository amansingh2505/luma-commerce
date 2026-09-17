import SpaceCard from '../components/SpaceCard'
import ProductCard from '../components/ProductCard'
import EditorialBanner from '../components/EditorialBanner'
import Newsletter from '../components/Newsletter'

const featuredProducts = [
  {
    id: 1,
    name: 'Arden Lounge Chair',
    category: 'Lounge Chairs',
    price: 24999,
    color: 'Natural Oak',
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 2,
    name: 'Mira Side Table',
    category: 'Side Tables',
    price: 12999,
    color: 'Walnut',
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 3,
    name: 'Nora Lounge Sofa',
    category: 'Sofas',
    price: 54999,
    color: 'Warm Beige',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 4,
    name: 'Olsen Dining Chair',
    category: 'Dining Chairs',
    price: 8999,
    color: 'Natural Linen',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=85',
  },
]


function Home() {
  return (
    <main className="bg-[#F7F5F0]">

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">

        <div className="grid min-h-[calc(100vh-130px)] items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">

          {/* Left Content */}
          <div className="py-10">

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#8B7355]">
              Furniture · Decor · Living
            </p>

            <h1 className="max-w-xl text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-[#1F1F1B] md:text-7xl lg:text-8xl">
              Make space
              <br />
              for living.
            </h1>

            <p className="mt-8 max-w-md text-base leading-7 text-[#6F6D65] md:text-lg">
              Thoughtfully designed furniture and home pieces
              for spaces that feel uniquely yours.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/products"
                className="rounded-full bg-[#1F1F1B] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8B7355]"
              >
                Shop furniture
              </a>

              <a
                href="/collections"
                className="rounded-full border border-[#CFC9BD] px-7 py-3.5 text-sm font-medium text-[#1F1F1B] transition duration-300 hover:-translate-y-0.5 hover:border-[#1F1F1B]"
              >
                Explore collections
              </a>

            </div>

          </div>

          {/* Hero Image */}
          <div className="relative">

            <div className="group relative h-[520px] overflow-hidden rounded-[2rem] md:h-[650px]">

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Modern living room with contemporary furniture"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-80">
                    Luma Collection
                  </p>

                  <p className="mt-1 text-lg font-medium">
                    Warm Minimalism
                  </p>
                </div>

                <span className="text-sm">
                  01 / 03
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


        
        {/* Featured Collection */}
<section className="mx-auto max-w-7xl px-6 py-20 md:py-28">

  <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

    <div>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8B7355]">
        Curated for Luma
      </p>

      <h2 className="mt-3 text-4xl font-medium tracking-tight md:text-5xl">
        Pieces worth living with.
      </h2>
    </div>

    <a
      href="/products"
      className="text-sm font-medium underline underline-offset-4 transition hover:text-[#8B7355]"
    >
      View all products →
    </a>

  </div>



  {/* Product Grid */}
  <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

    {featuredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}

  </div>

</section>


 {/* Shop by Space */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8B7355]">
              Explore your space
            </p>

            <h2 className="mt-3 text-4xl font-medium tracking-tight md:text-5xl">
              Shop by space.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6F6D65]">
            From quiet corners to spaces made for gathering,
            find pieces that belong in your everyday life.
          </p>

        </div>


        {/* Space Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <SpaceCard
            title="Living Room"
            description="Sofas, chairs and pieces made for slowing down."
            image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85"
          />

          <SpaceCard
            title="Bedroom"
            description="Create a calm retreat with considered essentials."
            image="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85"
          />

          <SpaceCard
            title="Dining"
            description="Tables and seating designed for gathering."
            image="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=85"
          />

          <SpaceCard
            title="Decor"
            description="Small details that make a space feel yours."
            image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85"
          />

        </div>

      </section>
     
      <EditorialBanner />

      <Newsletter />

    </main>
  )
}

export default Home

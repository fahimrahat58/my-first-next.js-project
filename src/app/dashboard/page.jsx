import { getProducts } from "../lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Our Products</h1>
          <p className="mt-3 text-base-content/60">
            Explore our latest products and find something you love.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Content */}
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <span className="badge badge-primary badge-outline">
                    {product.category}
                  </span>

                  <span className="text-sm text-warning">
                    ⭐ {product.rating}
                  </span>
                </div>

                <h2 className="card-title mt-2 line-clamp-1">
                  {product.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

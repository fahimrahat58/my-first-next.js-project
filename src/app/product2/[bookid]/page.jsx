export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/books");

  const books = await res.json();

  return books.map((book) => ({
    bookid: book.id.toString(),
  }));
}

export default async function ProductDetails({ params }) {
  const { bookid } = await params;

  const res = await fetch(
    `http://localhost:4000/books/${bookid}`
  );

  const book = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">

          {/* Image */}
          <div className="flex min-h-112.5 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="flex h-80 w-60 items-center justify-center rounded-2xl bg-white text-8xl shadow-xl">
              📚
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-8 md:p-12">

            <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
              Book
            </span>

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {book.title}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-yellow-400">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                4.8 (120 reviews)
              </span>
            </div>

            <div className="my-6 border-t border-gray-200" />

            <p className="text-3xl font-bold text-blue-600">
              ${book.price}
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              {book.description}
            </p>

            <div className="mt-8 flex gap-3">
              <button className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Add to Cart
              </button>

              <button className="flex-1 rounded-xl border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                Buy Now
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
              <div>
                <p className="text-sm text-gray-500">
                  Delivery
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  Free Delivery
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Status
                </p>

                <p className="mt-1 font-semibold text-green-600">
                  In Stock
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
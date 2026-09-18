import Link from "next/link";

const ProductCard = ({ book }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
          {book.category}
        </div>

        <span className="text-8xl transition duration-500 group-hover:scale-110">
          📚
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-yellow-500">
            ★★★★★
          </span>

          <span className="text-sm text-gray-500">
            {book.rating}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 line-clamp-1 text-xl font-bold text-gray-900">
          {book.title}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          By {book.author}
        </p>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {book.description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-2xl font-bold text-blue-600">
            ${book.price}
          </p>

          <Link
            href={`/product2/${book.id}`}
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Details →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
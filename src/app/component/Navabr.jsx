import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          BookStore
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/product2"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Books
          </Link>

          <Link
            href="/about"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>
        </div>

      </div>
    </nav>
  );
}
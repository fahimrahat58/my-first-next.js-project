import ProductCard from "../component/productCard";
import { Suspense } from "react";

async function getProducts2() {
  const res = await fetch("http://localhost:4000/books", {
    next: {
      revalidate: 5,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

export default async function ProductsPage2() {
  const books = await getProducts2();

  return (
    <div>
            <Suspense fallback={<p>Loading products...</p>}>
        {books.map((book) => (
        <ProductCard key={book.id} book={book} />
      ))}
      </Suspense>

      
    </div>
  );
}

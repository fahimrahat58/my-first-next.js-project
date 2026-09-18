# 📚 BookStore

A modern and responsive bookstore web application built with **Next.js**.
This project is created for practicing Next.js App Router concepts, data fetching, dynamic routing, and reusable React components.

## 🚀 Live Features

* 📚 Display all books
* 🔍 View individual book details
* 🔗 Dynamic book routes
* ⚡ Static generation with `generateStaticParams`
* 🔄 Data fetching with `fetch()`
* ⏳ Loading UI with React Suspense
* ♻️ Reusable `ProductCard` component
* 🧭 Responsive Navbar
* 📱 Responsive design for mobile, tablet, and desktop
* 🎨 Modern UI with Tailwind CSS
* 🗄️ Book data served using JSON Server

## 🛠️ Technologies Used

* **Next.js 16**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **JSON Server**
* **Next.js App Router**
* **React Suspense**

## 📂 Project Structure

```text
app/
├── component/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── product2/
│   ├── page.jsx
│   └── [bookid]/
│       └── page.jsx
│
├── page.jsx
├── layout.jsx
└── globals.css

db.json
package.json
README.md
```

## 🔗 Routes

| Route                | Description          |
| -------------------- | -------------------- |
| `/`                  | Home page            |
| `/product2`          | Display all books    |
| `/product2/1`        | Book details         |
| `/product2/2`        | Book details         |
| `/product2/[bookid]` | Dynamic book details |
| `/about`             | About page           |

## 🗄️ Data Source

Book data is provided through **JSON Server**.

Example `db.json` structure:

```json
{
  "books": [
    {
      "id": "1",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 12.99,
      "category": "Fiction",
      "rating": 4.7,
      "description": "A young shepherd follows his dreams and discovers the meaning of life."
    }
  ]
}
```

The application fetches the books from:

```text
http://localhost:4000/books
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project directory:

```bash
cd my-practice-nextjs
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the Project

First, start JSON Server:

```bash
npx json-server --watch db.json --port 4000
```

Then open another terminal and start Next.js:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🔄 Data Fetching

Books are fetched from the JSON Server API:

```jsx
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
```

The `revalidate: 5` option allows Next.js to refresh the fetched data periodically.

## 🧩 Dynamic Routing

The project uses a dynamic route:

```text
app/product2/[bookid]/page.jsx
```

For example:

```text
/product2/1
/product2/2
/product2/5
```

The `bookid` is received from the URL and used to fetch the corresponding book:

```jsx
const { bookid } = await params;

const res = await fetch(
  `http://localhost:4000/books/${bookid}`
);
```

## ⚡ Static Generation

The project also practices `generateStaticParams()`:

```jsx
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/books");

  const books = await res.json();

  return books.map((book) => ({
    bookid: book.id.toString(),
  }));
}
```

This allows Next.js to know which dynamic book pages can be generated ahead of time.

## ⏳ Suspense

React Suspense is used to handle the loading state while asy

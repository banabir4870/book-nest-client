import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  image: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    price: 18,
    rating: 4.9,
    image: "/image2.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    price: 22,
    rating: 4.8,
    image: "/image1.jpg",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    price: 20,
    rating: 4.9,
    image: "/image3.jpg",
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 30,
    rating: 4.8,
    image: "/image1.jpg",
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Novel",
    price: 16,
    rating: 4.7,
    image: "/image2.jpg",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
    price: 19,
    rating: 4.8,
    image: "/image3.jpg",
  },
  {
    id: 7,
    title: "Ikigai",
    author: "Héctor García",
    category: "Lifestyle",
    price: 15,
    rating: 4.7,
    image: "/image2.jpg",
  },
  {
    id: 8,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Success",
    price: 21,
    rating: 4.8,
    image: "/image1.jpg",
  },
];

const FeaturedBooks = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Featured Collection
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Featured Books
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore our hand-picked collection of bestselling books loved by
            thousands of readers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="group overflow-hidden rounded-3xl border bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  {book.category}
                </span>
              </div>

              <div className="flex h-[250px] flex-col p-6">
                <h3 className="line-clamp-2 text-xl font-bold text-slate-900">
                  {book.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  by {book.author}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />
                    <span className="font-semibold">{book.rating}</span>
                  </div>

                  <span className="text-xl font-bold text-blue-600">
                    ${book.price}
                  </span>
                </div>

                <div className="mt-auto">
                  <Link
                    href={`/books/${book.id}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    <BookOpen size={18} />
                    View Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            View All Books
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
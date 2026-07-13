import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Star,
} from "lucide-react";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  date: string;
  rating: number;
  price: number;
  description: string;
};

const latestBooks: Book[] = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    image: "/image1.jpg",
    date: "12 July 2026",
    rating: 4.8,
    price: 22,
    description:
      "A gripping psychological thriller that keeps readers hooked until the final page.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    image: "/image2.jpg",
    date: "10 July 2026",
    rating: 4.9,
    price: 18,
    description:
      "Learn how tiny habits can produce remarkable results in everyday life.",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    image: "/image3.jpg",
    date: "08 July 2026",
    rating: 4.8,
    price: 30,
    description:
      "A must-read guide for writing clean, maintainable and professional code.",
  },
];

const LatestBooks = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            New Collection
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Latest Arrivals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore the newest books recently added to our growing library.
          </p>
        </div>

        {/* Cards */}

        <div className="space-y-8">
          {latestBooks.map((book) => (
            <div
              key={book.id}
              className="group overflow-hidden rounded-3xl border bg-white shadow-md transition hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-3">

                {/* Image */}

                <div className="relative h-72 lg:h-full">

                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    NEW
                  </span>

                </div>

                {/* Content */}

                <div className="flex flex-col justify-between p-8 lg:col-span-2">

                  <div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">

                      <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                        {book.category}
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={16} />
                        {book.date}
                      </span>

                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-slate-900">
                      {book.title}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      by {book.author}
                    </p>

                    <p className="mt-5 leading-7 text-gray-600">
                      {book.description}
                    </p>

                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-5">

                    <div className="flex items-center gap-6">

                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star
                          size={20}
                          fill="currentColor"
                        />
                        <span className="font-semibold">
                          {book.rating}
                        </span>
                      </div>

                      <h4 className="text-2xl font-bold text-blue-600">
                        ${book.price}
                      </h4>

                    </div>

                    <div className="flex gap-3">

                      <button className="rounded-xl border p-3 transition hover:bg-red-50">
                        <Heart size={20} />
                      </button>

                      <Link
                        href={`/all-books/${book.id}`}
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                      >
                        View Details
                        <ArrowRight size={18} />
                      </Link>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBooks;
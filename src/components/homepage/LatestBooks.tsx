"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Star,
} from "lucide-react";
import { Skeleton } from "@heroui/react";

type Book = {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  createdAt?: string;
};

const LatestBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("http://localhost:5000/books?sort=newest&limit=3");
        if (res.ok) {
          const data = await res.json();
          setBooks(data.books || []);
        }
      } catch (err) {
        console.error("Error fetching latest books:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatest();
  }, []);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "Recently Added";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "Recently Added";
    }
  };

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
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-3xl border bg-white p-8 shadow-md flex flex-col lg:flex-row gap-8">
                <Skeleton className="rounded-2xl h-64 lg:h-72 lg:w-1/3" />
                <div className="flex-1 space-y-4">
                  <div className="flex gap-4">
                    <Skeleton className="h-6 w-24 rounded-lg" />
                    <Skeleton className="h-6 w-32 rounded-lg" />
                  </div>
                  <Skeleton className="h-10 w-3/4 rounded-lg" />
                  <Skeleton className="h-6 w-1/4 rounded-lg" />
                  <Skeleton className="h-20 w-full rounded-lg" />
                  <div className="flex justify-between items-center pt-4">
                    <Skeleton className="h-8 w-24 rounded-lg" />
                    <Skeleton className="h-10 w-32 rounded-xl" />
                  </div>
                </div>
              </div>
            ))
          ) : books.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 py-12 text-center border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-700">No books found</h3>
            </div>
          ) : (
            books.map((book) => (
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
                          {formatDate(book.createdAt)}
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
                          ৳{book.price}
                        </h4>

                      </div>

                      <div className="flex gap-3">

                        <button className="rounded-xl border p-3 transition hover:bg-red-50">
                          <Heart size={20} />
                        </button>

                        <Link
                          href={`/all-books/${book.slug || book.id}`}
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
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default LatestBooks;
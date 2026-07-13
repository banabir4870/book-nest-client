"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Search, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 via-white to-orange-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col-reverse items-center gap-12 px-5 py-16 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <BookOpen size={18} />
            Discover Your Next Favorite Book
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            A Home For Every
            <span className="text-blue-600"> Book </span>
            Lover.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Explore thousands of books across different genres. Read reviews,
            discover bestsellers, and build your personal reading collection
            with BookNest.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-xl items-center overflow-hidden rounded-2xl border bg-white shadow-lg">
            <input
              type="text"
              placeholder="Search books, authors..."
              className="w-full px-5 py-4 outline-none"
            />

            <button className="bg-blue-600 px-6 py-4 text-white transition hover:bg-blue-700">
              <Search />
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/books"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore Books
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-blue-600 px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Browse Categories
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
              <p className="mt-2 text-sm text-gray-500">Books</p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-orange-500">700+</h3>
              <p className="mt-2 text-sm text-gray-500">Authors</p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
              <h3 className="flex items-center justify-center gap-1 text-3xl font-bold text-yellow-500">
                4.9 <Star fill="currentColor" size={24} />
              </h3>
              <p className="mt-2 text-sm text-gray-500">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-blue-200 blur-3xl"></div>
            <div className="absolute -bottom-8 right-8 h-40 w-40 rounded-full bg-orange-200 blur-3xl"></div>

            <Image
              src="/image1.jpg"
              alt="Books"
              width={700}
              height={700}
              priority
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
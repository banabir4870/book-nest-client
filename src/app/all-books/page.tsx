"use client";

import { useMemo, useState } from "react";
import { books } from "@/data/booksData";
import BookCard from "@/components/books/BookCard";
import SearchFilter from "@/components/books/SearchFilter";
import Pagination from "@/components/books/Pagination";
import { cinzel } from "@/app/fonts";

const BOOKS_PER_PAGE = 8;

export default function ExploreBooksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering + Sorting
  const filteredBooks = useMemo(() => {
    let filtered = [...books];

    // Search
    if (search.trim()) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      filtered = filtered.filter(
        (book) => book.category === category
      );
    }

    // Price
    if (price === "500") {
      filtered = filtered.filter((book) => book.price < 500);
    }

    if (price === "1000") {
      filtered = filtered.filter(
        (book) => book.price >= 500 && book.price <= 1000
      );
    }

    if (price === "1001") {
      filtered = filtered.filter((book) => book.price > 1000);
    }

    // Sorting
    switch (sort) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        filtered.sort((a, b) => b.published - a.published);
        break;

      case "az":
        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "za":
        filtered.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
    }

    return filtered;
  }, [search, category, price, sort]);

  // Pagination

  const totalPages = Math.ceil(
    filteredBooks.length / BOOKS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;

  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + BOOKS_PER_PAGE
  );

  // Reset

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setPrice("All");
    setSort("default");
    setCurrentPage(1);
  };

  return (
    <main className="bg-[#f8f5f2]">

      {/* Hero */}

      <section className="bg-[#3b1a08] py-10 text-white">

        <div className="mx-auto w-11/12 max-w-7xl text-center">

          <h1
            className={`text-5xl font-bold ${cinzel.className}`}
          >
            Explore Our Collection
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
            Browse thousands of books across different genres.
            Discover your next favorite book and build your
            personal reading library.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto w-11/12 max-w-7xl py-20">

        {/* Search */}

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          sort={sort}
          setSort={setSort}
          onReset={handleReset}
        />

        {/* Result */}

        <div className="mb-8 flex items-center justify-between">

          <h2
            className={`text-3xl font-bold text-[#3b1a08] ${cinzel.className}`}
          >
            All Books
          </h2>

          <p className="font-medium text-gray-600">
            {filteredBooks.length} Books Found
          </p>

        </div>

        {/* Cards */}

        {currentBooks.length === 0 ? (
          <div className="rounded-3xl bg-white py-20 text-center shadow">

            <h2 className="text-4xl">
              📚
            </h2>

            <h3 className="mt-4 text-3xl font-bold text-[#3b1a08]">
              No Books Found
            </h3>

            <p className="mt-3 text-gray-500">
              Try another search or change filters.
            </p>

          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {currentBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              ))}

            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}

      </section>

    </main>
  );
}
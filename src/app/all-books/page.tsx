"use client";

import { useCallback, useEffect, useState } from "react";
import BookCard from "@/components/books/BookCard";
import SearchFilter from "@/components/books/SearchFilter";
import Pagination from "@/components/books/Pagination";
import { cinzel } from "@/app/fonts";
import { Skeleton } from "@heroui/react";
import { Book } from "@/data/booksData";

const API_URL = "http://localhost:5000";

export default function ExploreBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const BOOKS_PER_PAGE = 8;

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search.trim());
      if (category !== "All") params.set("category", category);
      if (price !== "All") params.set("price", price);
      if (sort !== "default") params.set("sort", sort);
      params.set("page", currentPage.toString());
      params.set("limit", BOOKS_PER_PAGE.toString());

      const res = await fetch(`${API_URL}/books?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setBooks(data.books || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [search, category, price, sort, currentPage]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchBooks();
    }, 300);
    return () => clearTimeout(debounce);
  }, [fetchBooks]);

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setPrice("All");
    setSort("default");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          setSearch={(val) => { setSearch(val); setCurrentPage(1); }}
          category={category}
          setCategory={(val) => { setCategory(val); setCurrentPage(1); }}
          price={price}
          setPrice={(val) => { setPrice(val); setCurrentPage(1); }}
          sort={sort}
          setSort={(val) => { setSort(val); setCurrentPage(1); }}
          onReset={handleReset}
        />

        {/* Result Count */}

        <div className="mb-8 flex items-center justify-between">

          <h2
            className={`text-3xl font-bold text-[#3b1a08] ${cinzel.className}`}
          >
            All Books
          </h2>

          <p className="font-medium text-gray-600">
            {loading ? "Loading..." : `${total} Books Found`}
          </p>

        </div>

        {/* Error State */}

        {error && (
          <div className="rounded-3xl bg-red-50 py-20 text-center shadow border border-red-200">
            <h2 className="text-4xl">⚠️</h2>
            <h3 className="mt-4 text-3xl font-bold text-red-700">
              Failed to Load Books
            </h3>
            <p className="mt-3 text-gray-500">
              Unable to connect to the server. Please try again.
            </p>
            <button
              onClick={fetchBooks}
              className="mt-6 rounded-xl bg-[#3b1a08] px-6 py-3 font-semibold text-white transition hover:bg-[#2a1206]"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading Skeleton */}

        {loading && !error && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: BOOKS_PER_PAGE }).map((_, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md space-y-3 p-4">
                <Skeleton className="h-72 w-full rounded-xl" />
                <Skeleton className="h-7 w-3/4 rounded-lg" />
                <Skeleton className="h-5 w-1/2 rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-14 rounded-lg" />
                  <Skeleton className="h-7 w-20 rounded-lg" />
                </div>
                <Skeleton className="h-11 w-full rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}

        {!loading && !error && books.length === 0 && (
          <div className="rounded-3xl bg-white py-20 text-center shadow">
            <h2 className="text-4xl">📚</h2>
            <h3 className="mt-4 text-3xl font-bold text-[#3b1a08]">
              No Books Found
            </h3>
            <p className="mt-3 text-gray-500">
              Try another search or change filters.
            </p>
          </div>
        )}

        {/* Cards */}

        {!loading && !error && books.length > 0 && (
          <>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}

      </section>

    </main>
  );
}
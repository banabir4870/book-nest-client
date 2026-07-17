"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { ensureJWT } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import { cinzel } from "@/app/fonts";
import { Skeleton } from "@heroui/react";
import {
  FaTrash,
  FaSearch,
  FaBook,
  FaAngleLeft,
  FaAngleRight,
  FaExclamationTriangle,
} from "react-icons/fa";

const API_URL = "https://book-nest-server-delta.vercel.app";
const BOOKS_PER_PAGE = 10;

type Book = {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  addedByName?: string;
  addedByEmail?: string;
  createdAt?: string;
};

export default function AdminManageBooksPage() {
  const { data: sessionData, isPending } = useSession();
  const router = useRouter();

  const [books, setBooks] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState<Book | null>(null);
  const [deleting, setDeleting] = useState(false);

  const user = sessionData?.user;

  // Redirect non-admins
  useEffect(() => {
    if (!isPending && (!user || user.role !== "admin")) {
      router.replace("/");
    }
  }, [user, isPending, router]);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search.trim());
      params.set("page", currentPage.toString());
      params.set("limit", BOOKS_PER_PAGE.toString());

      const res = await fetch(`${API_URL}/books?${params.toString()}`, {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setBooks(data.books || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
      }
    } catch {
      toast.error("Failed to load books");
    } finally {
      setLoading(false);
    }
  }, [search, currentPage]);

  useEffect(() => {
    if (user?.role === "admin") {
      fetchBooks();
    }
  }, [fetchBooks, user?.role]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setCurrentPage(1);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await ensureJWT();

      const res = await fetch(`${API_URL}/books/${deleteTarget.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        toast.success(`"${deleteTarget.title}" deleted successfully`);
        setBooks((prev) => prev.filter((b) => b.id !== deleteTarget.id));
        setTotal((prev) => prev - 1);
        setDeleteTarget(null);
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed to delete book");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "—";
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
        <div className="text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#3b1a08] border-t-transparent mx-auto" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== "admin") return null;

  return (
    <main className="min-h-screen bg-[#f8f5f2]">

      {/* Header */}

      <section className="bg-[#3b1a08] py-10 text-white">
        <div className="mx-auto w-11/12 max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <FaBook className="text-2xl" />
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${cinzel.className}`}>
                Manage Books
              </h1>
              <p className="mt-1 text-gray-300">
                Admin panel — view and delete all books
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="mx-auto w-11/12 max-w-7xl py-10">

        {/* Search + Stats */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-lg font-semibold text-[#3b1a08]">
              {loading ? "Loading..." : `${total} Books Total`}
            </p>
          </div>

          <form onSubmit={handleSearchSubmit} className="flex gap-3">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="
    w-64
    rounded-xl
    border border-gray-300 dark:border-gray-600
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    py-3 pl-11 pr-4
    outline-none
    transition
    focus:border-[#3b1a08] dark:focus:border-amber-500
  "
              />
            </div>
            <button
              type="submit"
              className={`${cinzel.className} rounded-xl bg-[#3b1a08] px-5 py-3 font-semibold text-white transition hover:bg-[#2a1206]`}
            >
              Search
            </button>
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSearchInput("");
                  setCurrentPage(1);
                }}
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Clear
              </button>
            )}
          </form>

        </div>

        {/* Table */}

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-[#3b1a08] text-left text-white">
                  <th className="px-4 py-4 font-semibold">Cover</th>
                  <th className="px-4 py-4 font-semibold">Title & Author</th>
                  <th className="px-4 py-4 font-semibold">Category</th>
                  <th className="px-4 py-4 font-semibold">Price</th>
                  <th className="px-4 py-4 font-semibold">Qty</th>
                  <th className="px-4 py-4 font-semibold">Added By</th>
                  <th className="px-4 py-4 font-semibold">Date</th>
                  <th className="px-4 py-4 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      {Array.from({ length: 8 }).map((_, j) => (
                        <td key={j} className="px-4 py-4">
                          <Skeleton className="h-6 w-full rounded-lg" />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : books.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-20 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-3">
                        <FaBook className="text-5xl text-gray-300" />
                        <p className="text-xl font-semibold">No books found</p>
                        {search && (
                          <p className="text-sm">
                            Try a different search term
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  books.map((book, idx) => (
                    <tr
                      key={book.id}
                      className={`border-b border-gray-100 transition hover:bg-orange-50 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                        }`}
                    >
                      {/* Cover */}
                      <td className="px-4 py-3">
                        <div className="relative h-16 w-12 overflow-hidden rounded-lg border border-gray-200">
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>

                      {/* Title & Author */}
                      <td className="px-4 py-3">
                        <p className="font-semibold text-[#3b1a08] line-clamp-1 max-w-[180px]">
                          {book.title}
                        </p>
                        <p className="mt-0.5 text-gray-500 text-xs">
                          {book.author}
                        </p>
                      </td>

                      {/* Category */}
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          {book.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-3 font-semibold text-[#3b1a08]">
                        ৳{book.price}
                      </td>

                      {/* Quantity */}
                      <td className="px-4 py-3">
                        <span
                          className={`font-semibold ${(book.quantity || 0) > 0
                            ? "text-green-600"
                            : "text-red-500"
                            }`}
                        >
                          {book.quantity ?? 0}
                        </span>
                      </td>

                      {/* Added By */}
                      <td className="px-4 py-3">
                        <p className="font-medium text-gray-700 text-xs">
                          {book.addedByName || "—"}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {book.addedByEmail || "—"}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {formatDate(book.createdAt)}
                      </td>

                      {/* Action */}
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => setDeleteTarget(book)}
                          className="rounded-lg bg-red-50 p-2.5 text-red-500 transition hover:bg-red-500 hover:text-white"
                          title="Delete Book"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}

        {!loading && totalPages > 1 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition ${currentPage === 1
                ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                : "border-[#3b1a08] text-[#3b1a08] hover:bg-[#3b1a08] hover:text-white"
                }`}
            >
              <FaAngleLeft /> Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`h-12 w-12 rounded-xl border text-lg font-bold transition ${currentPage === p
                    ? "border-[#3b1a08] bg-[#3b1a08] text-white dark:border-orange-500 dark:bg-orange-500"
                    : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-[#3b1a08] dark:hover:border-orange-500 hover:text-[#3b1a08] dark:hover:text-orange-400"
                  }`}
              >
                {p}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition ${currentPage === totalPages
                ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                : "border-[#3b1a08] text-[#3b1a08] hover:bg-[#3b1a08] hover:text-white"
                }`}
            >
              Next <FaAngleRight />
            </button>
          </div>
        )}

      </section>

      {/* Delete Confirmation Modal */}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <FaExclamationTriangle className="text-3xl text-red-500" />
              </div>
            </div>

            <h2 className={`mt-5 text-center text-2xl font-bold text-[#3b1a08] ${cinzel.className}`}>
              Delete Book?
            </h2>

            <p className="mt-3 text-center text-gray-600">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-[#3b1a08]">
                &quot;{deleteTarget.title}&quot;
              </span>
              ? This action cannot be undone.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                className="flex-1 rounded-2xl border border-gray-300 py-3 font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 rounded-2xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}

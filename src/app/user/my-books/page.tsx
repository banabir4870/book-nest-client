"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { ensureJWT } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { cinzel } from "@/app/fonts";
import { Skeleton } from "@heroui/react";
import {
  FaBook,
  FaTrash,
  FaPlus,
  FaExclamationTriangle,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

const API_URL = "http://localhost:5000";

type Book = {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  rating: number;
  createdAt?: string;
};

export default function MyBooksPage() {
  const { data: sessionData, isPending } = useSession();
  const router = useRouter();

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<Book | null>(null);
  const [deleting, setDeleting] = useState(false);

  const user = sessionData?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/auth/login");
    }
  }, [user, isPending, router]);

  const fetchMyBooks = useCallback(async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      await ensureJWT();
      const res = await fetch(
        `${API_URL}/books/user/${encodeURIComponent(user.email)}`,
        { credentials: "include" }
      );
      if (res.ok) {
        const data = await res.json();
        setBooks(data || []);
      }
    } catch {
      toast.error("Failed to load your books");
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      fetchMyBooks();
    }
  }, [fetchMyBooks, user?.email]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await ensureJWT();

      const res = await fetch(`${API_URL}/books/${deleteTarget.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`"${deleteTarget.title}" deleted successfully`);
        setBooks((prev) => prev.filter((b) => b.id !== deleteTarget.id));
        setDeleteTarget(null);
      } else {
        toast.error(data.message || "Failed to delete book");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "Recently Added";
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Recently Added";
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

  if (!user) return null;

  return (
    <main className="min-h-screen bg-[#f8f5f2]">

      {/* Header */}

      <section className="bg-[#3b1a08] py-10 text-white">
        <div className="mx-auto w-11/12 max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <FaBook className="text-2xl" />
              </div>
              <div>
                <h1 className={`text-4xl font-bold ${cinzel.className}`}>
                  My Books
                </h1>
                <p className="mt-1 text-gray-300">
                  Books you&apos;ve added to BookNest
                </p>
              </div>
            </div>

            <Link
              href="/user/add-book"
              className={`${cinzel.className} inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-semibold text-white transition hover:bg-orange-500`}
            >
              <FaPlus />
              Add New Book
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="mx-auto w-11/12 max-w-7xl py-10">

        {/* Stats */}

        <div className="mb-8">
          <p className="text-lg font-semibold text-[#3b1a08]">
            {loading ? "Loading..." : `${books.length} Book${books.length !== 1 ? "s" : ""} Added`}
          </p>
        </div>

        {/* Loading Skeletons */}

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md space-y-3">
                <Skeleton className="h-52 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-1/2 rounded-lg" />
                <div className="flex justify-between pt-2">
                  <Skeleton className="h-5 w-16 rounded-lg" />
                  <Skeleton className="h-8 w-20 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}

        {!loading && books.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-24 text-center shadow border border-gray-100">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-50">
              <FaBook className="text-5xl text-orange-300" />
            </div>
            <h2 className={`mt-6 text-3xl font-bold text-[#3b1a08] ${cinzel.className}`}>
              No Books Yet
            </h2>
            <p className="mt-3 max-w-sm text-gray-500">
              You haven&apos;t added any books yet. Start by adding your first book!
            </p>
            <Link
              href="/user/add-book"
              className={`${cinzel.className} mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3b1a08] px-8 py-4 font-semibold text-white transition hover:bg-[#2a1206]`}
            >
              <FaPlus />
              Add Your First Book
            </Link>
          </div>
        )}

        {/* Book Cards */}

        {!loading && books.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#3b1a08] px-3 py-1 text-xs font-semibold text-white shadow">
                    {book.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className={`line-clamp-2 text-lg font-bold text-[#3b1a08] ${cinzel.className}`}>
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    by <span className="font-semibold">{book.author}</span>
                  </p>

                  {/* Rating & Price */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar className="text-sm" />
                      <span className="text-sm font-semibold text-gray-700">
                        {book.rating}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-[#3b1a08]">
                      ৳{book.price}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="mt-3 flex items-center justify-between border-t pt-3 text-xs text-gray-400">
                    <span>Qty: {book.quantity ?? 0}</span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {formatDate(book.createdAt)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/all-books/${book.slug || book.id}`}
                      className="flex-1 rounded-xl border border-[#3b1a08] py-2.5 text-center text-sm font-semibold text-[#3b1a08] transition hover:bg-[#3b1a08] hover:text-white"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => setDeleteTarget(book)}
                      className="rounded-xl bg-red-50 px-3.5 py-2.5 text-red-500 transition hover:bg-red-500 hover:text-white"
                      title="Delete Book"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

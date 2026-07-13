import Link from "next/link";
import { notFound } from "next/navigation";

import { books } from "@/data/booksData";

import BookGallery from "@/components/book-details/BookGallery";
import BookInfo from "@/components/book-details/BookInfo";
import BookSpecification from "@/components/book-details/BookSpecification";
import Reviews from "@/components/book-details/Reviews";
import RelatedBooks from "@/components/book-details/RelatedBooks";

import { cinzel } from "@/app/fonts";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const book = books.find(
    (item) => item.id === Number(id)
  );

  if (!book) {
    notFound();
  }

  const relatedBooks = books
    .filter(
      (item) =>
        item.category === book.category &&
        item.id !== book.id
    )
    .slice(0, 4);

  const images = [
    book.image,
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
  ];

  return (
    <main className="bg-[#f8f5f2]">

      {/* Hero */}

      <section className="bg-[#3b1a08] py-10">

        <div className="mx-auto w-11/12 max-w-7xl">

          {/* Breadcrumb */}

          <div className="text-sm text-white/80">

            <Link
              href="/"
              className="hover:text-orange-300"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link
              href="/all-books"
              className="hover:text-orange-300"
            >
              Explore Books
            </Link>

            <span className="mx-2">/</span>

            <span className="text-orange-300">
              {book.title}
            </span>

          </div>

          <h1
            className={`mt-6 text-5xl font-bold text-white ${cinzel.className}`}
          >
            {book.title}
          </h1>

        </div>

      </section>

      {/* Main */}

      <section className="mx-auto w-11/12 max-w-7xl py-20">

        <div className="grid gap-14 lg:grid-cols-2">

          <BookGallery
            images={images}
          />

          <BookInfo
            book={book}
          />

        </div>

        <BookSpecification
          book={book}
        />

        <Reviews />

        <RelatedBooks
          books={relatedBooks}
        />

      </section>

    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { cinzel } from "@/app/fonts";
import BookCard from "@/components/books/BookCard";
import { Book } from "@/data/booksData";

type Props = {
  books: Book[];
};

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

export default function RelatedBooks({
  books,
}: Props) {
  return (
    <section className="mt-24">

      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <h2
          className={`${cinzel.className} text-center text-4xl font-bold text-[#3b1a08]`}
        >
          Related Books
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Readers who enjoyed this book also explored these
          carefully selected titles.
        </p>
      </motion.div>

      {/* Cards */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            variants={itemVariants}
          >
            <BookCard book={book} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
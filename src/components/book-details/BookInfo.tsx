"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaBook,
  FaHeart,
  FaShareAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { cinzel } from "@/app/fonts";
import { Book } from "@/data/booksData";

type Props = {
  book: Book;
};

const BookInfo = ({ book }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="lg:sticky lg:top-24"
    >
      {/* Category */}

      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
        {book.category}
      </span>

      {/* Title */}

      <h1
        className={`mt-5 text-5xl font-bold text-[#3b1a08] ${cinzel.className}`}
      >
        {book.title}
      </h1>

      {/* Author */}

      <p className="mt-3 text-xl text-gray-600">
        by{" "}
        <span className="font-semibold text-[#3b1a08]">
          {book.author}
        </span>
      </p>

      {/* Rating */}

      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <span className="font-semibold">
          {book.rating} / 5.0
        </span>

        <span className="text-gray-500">
          (268 Reviews)
        </span>
      </div>

      {/* Price */}

      <div className="mt-8">
        <p className="text-lg text-gray-500">
          Price
        </p>

        <h2 className="mt-1 text-5xl font-bold text-[#3b1a08]">
          ৳ {book.price}
        </h2>
      </div>

      {/* Availability */}

      <div className="mt-8 flex items-center gap-3 rounded-xl bg-green-50 p-4">
        <FaCheckCircle className="text-green-600" />

        <span className="font-semibold text-green-700">
          In Stock
        </span>

        <span className="text-gray-500">
          ({book.quantity} Copies Available)
        </span>
      </div>

      {/* Information */}

      <div className="mt-8 space-y-4 rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Language
          </span>

          <span className="font-semibold">
            {book.language}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Publisher
          </span>

          <span className="font-semibold">
            {book.publisher}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Published
          </span>

          <span className="font-semibold">
            {book.published}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Pages
          </span>

          <span className="font-semibold">
            {book.pages}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Format
          </span>

          <span className="font-semibold">
            Hardcover
          </span>
        </div>

      </div>

      {/* Description */}

      <div className="mt-8">

        <h3
          className={`mb-4 text-2xl font-bold text-[#3b1a08] ${cinzel.className}`}
        >
          Overview
        </h3>

        <p className="leading-8 text-gray-600">
          {book.description}
        </p>

      </div>

      {/* Buttons */}

      <div className="mt-10 grid gap-4">

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={`${cinzel.className} flex items-center justify-center gap-3 rounded-2xl bg-[#3b1a08] py-4 text-lg font-semibold text-white transition hover:bg-[#2b1308]`}
        >
          <FaBook />

          Borrow Book
        </motion.button>

        <div className="grid grid-cols-2 gap-4">

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border py-4 font-semibold transition hover:bg-gray-100"
          >
            <FaHeart />

            Wishlist
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border py-4 font-semibold transition hover:bg-gray-100"
          >
            <FaShareAlt />

            Share
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
};

export default BookInfo;
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  image: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    price: 18,
    rating: 4.9,
    image: "/image2.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    price: 22,
    rating: 4.8,
    image: "/image1.jpg",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    price: 20,
    rating: 4.9,
    image: "/image3.jpg",
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 30,
    rating: 4.8,
    image: "/image1.jpg",
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Novel",
    price: 16,
    rating: 4.7,
    image: "/image2.jpg",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
    price: 19,
    rating: 4.8,
    image: "/image3.jpg",
  },
  {
    id: 7,
    title: "Ikigai",
    author: "Héctor García",
    category: "Lifestyle",
    price: 15,
    rating: 4.7,
    image: "/image2.jpg",
  },
  {
    id: 8,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Success",
    price: 21,
    rating: 4.8,
    image: "/image1.jpg",
  },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturedBooks = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-white via-slate-50 to-white py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Featured Collection
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Featured Books
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Explore our hand-picked collection of bestselling
            books loved by thousands of readers around the
            world.
          </p>
        </motion.div>

        {/* Grid */}

        <motion.div
          variants={sectionVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >

        {books.map((book) => (
  <motion.div
    key={book.id}
    variants={cardVariants}
    whileHover={{
      y: -12,
      scale: 1.03,
      rotateX: 6,
      rotateY: -6,
    }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 18,
    }}
    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md"
    style={{
      transformStyle: "preserve-3d",
    }}
  >
    {/* Glow Effect */}

    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Image */}

    <div className="relative h-64 overflow-hidden">

      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="h-full w-full"
      >
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition duration-700 group-hover:brightness-110 group-hover:saturate-125"
        />
      </motion.div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

      {/* Category */}

      <motion.span
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          type: "spring",
        }}
        className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg"
      >
        {book.category}
      </motion.span>

      {/* Shine */}

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-1000 group-hover:translate-x-full" />
    </div>

    {/* Content */}

    <div className="relative flex h-[250px] flex-col p-6">

      <h3 className="line-clamp-2 text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
        {book.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        by {book.author}
      </p>

      <div className="mt-5 flex items-center justify-between">

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="flex items-center gap-1 text-yellow-500"
        >
          <Star
            size={18}
            fill="currentColor"
          />

          <span className="font-semibold">
            {book.rating}
          </span>
        </motion.div>

        <span className="text-xl font-bold text-blue-600">
          ${book.price}
        </span>

      </div>

      <div className="mt-auto">

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Link
            href={`/all-books/${book.id}`}
            className="group/button relative mt-6 flex w-full items-center justify-center overflow-hidden rounded-xl bg-blue-600 py-3 font-semibold text-white"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-1000 group-hover/button:translate-x-full" />

            <span className="relative flex items-center gap-2">
              <BookOpen size={18} />

              View Details

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>

      </div>
    </div>
  </motion.div>
))}

        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          variants={fadeUp}
          className="mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href="/all-books"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-shadow duration-300 hover:shadow-blue-300/40"
            >
              {/* Shine Effect */}

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-1000 group-hover:translate-x-full" />

              <span className="relative">
                View All Books
              </span>

              <ArrowRight
                size={20}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FeaturedBooks;

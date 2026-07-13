"use client";

import { motion } from "framer-motion";
import { cinzel } from "@/app/fonts";
import {
  FaStar,
  FaRegThumbsUp,
  FaUserCircle,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "12 March 2026",
    review:
      "One of the best self-development books I've ever read. Practical, inspiring, and easy to follow. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: 4,
    date: "05 February 2026",
    review:
      "Excellent book with actionable advice. I started applying the techniques immediately.",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    date: "20 January 2026",
    review:
      "Beautifully written. Every chapter provides valuable insights and motivates readers to improve daily habits.",
  },
];

const ratingData = [
  { star: 5, percent: 80 },
  { star: 4, percent: 15 },
  { star: 3, percent: 4 },
  { star: 2, percent: 1 },
  { star: 1, percent: 0 },
];

export default function Reviews() {
  return (
    <section className="mt-24">

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${cinzel.className} mb-12 text-4xl font-bold text-[#3b1a08]`}
      >
        Reader Reviews
      </motion.h2>

      {/* Summary */}

      <div className="grid gap-10 lg:grid-cols-3">

        {/* Overall Rating */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border bg-white p-8 shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-600">
            Overall Rating
          </h3>

          <h1 className="mt-4 text-6xl font-bold text-[#3b1a08]">
            4.9
          </h1>

          <div className="mt-4 flex gap-1 text-2xl text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="mt-4 text-gray-500">
            Based on 268 verified reader reviews.
          </p>
        </motion.div>

        {/* Rating Breakdown */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border bg-white p-8 shadow-md lg:col-span-2"
        >
          <h3 className="mb-8 text-xl font-semibold text-[#3b1a08]">
            Rating Breakdown
          </h3>

          <div className="space-y-5">

            {ratingData.map((item) => (
              <div
                key={item.star}
                className="flex items-center gap-4"
              >
                <span className="w-8 font-semibold">
                  {item.star}★
                </span>

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${item.percent}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                    }}
                    className="h-full rounded-full bg-orange-500"
                  />
                </div>

                <span className="w-12 text-sm text-gray-500">
                  {item.percent}%
                </span>
              </div>
            ))}

          </div>

        </motion.div>

      </div>

      {/* Reviews */}

      <div className="mt-14 space-y-8">

        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-3xl border bg-white p-8 shadow-md"
          >
            <div className="flex items-start justify-between">

              <div className="flex gap-5">

                <FaUserCircle className="text-6xl text-[#3b1a08]" />

                <div>

                  <h3 className="text-xl font-bold">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-gray-500">
                    {review.date}
                  </p>

                  <div className="mt-3 flex gap-1 text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                </div>

              </div>

              <button className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-gray-100">
                <FaRegThumbsUp />

                Helpful
              </button>

            </div>

            <p className="mt-6 leading-8 text-gray-600">
              {review.review}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
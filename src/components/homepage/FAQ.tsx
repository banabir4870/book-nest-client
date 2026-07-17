"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I purchase a book?",
    answer:
      "Browse the collection, open the book details page and follow the purchase process.",
  },
  {
    question: "Can I search books by category?",
    answer:
      "Yes. Use the category filter or search feature from the Explore Books page.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Browsing is public, but adding books and managing your collection requires an account.",
  },
  {
    question: "Can I leave reviews?",
    answer:
      "Yes. Logged-in users can submit reviews and ratings after reading a book.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-5">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-12 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left text-gray-900 dark:text-white"
              >

                <span className="font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`text-gray-700 dark:text-gray-300 transition ${open === index ? "rotate-180" : ""
                    }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-gray-200 dark:border-gray-700 px-6 pb-6 text-gray-600 dark:text-gray-300">
                  <p>{faq.answer}</p>
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
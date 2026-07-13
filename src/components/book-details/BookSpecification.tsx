"use client";

import { motion } from "framer-motion";
import { cinzel } from "@/app/fonts";
import {
  FaBookOpen,
  FaGlobe,
  FaBuilding,
  FaBarcode,
  FaCalendarAlt,
  FaLayerGroup,
  FaWeightHanging,
  FaRulerCombined,
} from "react-icons/fa";

type Props = {
  book: {
    isbn: string;
    language: string;
    publisher: string;
    published: number;
    edition: string;
    binding: string;
    dimensions: string;
    weight: string;
  };
};

const specs = (book: Props["book"]) => [
  {
    icon: <FaBarcode />,
    label: "ISBN",
    value: book.isbn,
  },
  {
    icon: <FaGlobe />,
    label: "Language",
    value: book.language,
  },
  {
    icon: <FaBuilding />,
    label: "Publisher",
    value: book.publisher,
  },
  {
    icon: <FaCalendarAlt />,
    label: "Published",
    value: book.published,
  },
  {
    icon: <FaLayerGroup />,
    label: "Edition",
    value: book.edition,
  },
  {
    icon: <FaBookOpen />,
    label: "Binding",
    value: book.binding,
  },
  {
    icon: <FaRulerCombined />,
    label: "Dimensions",
    value: book.dimensions,
  },
  {
    icon: <FaWeightHanging />,
    label: "Weight",
    value: book.weight,
  },
];

const BookSpecification = ({ book }: Props) => {
  return (
    <section className="mt-20">

      <motion.h2
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
        transition={{
          duration: 0.6,
        }}
        className={`${cinzel.className} mb-10 text-4xl font-bold text-[#3b1a08]`}
      >
        Book Specifications
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">

        {specs(book).map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3b1a08] text-xl text-white">
                {item.icon}
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[#3b1a08]">
                  {item.value}
                </h3>

              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default BookSpecification;
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/booksData";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { cinzel } from "@/app/fonts";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}

        <span className="absolute left-4 top-4 rounded-full bg-[#3b1a08] px-4 py-1 text-sm font-medium text-white shadow">
          {book.category}
        </span>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-5">

        {/* Title */}

        <h2
          className={`${cinzel.className} line-clamp-2 text-2xl font-bold text-[#3b1a08]`}
        >
          {book.title}
        </h2>

        {/* Author */}

        <p className="mt-2 text-gray-500">
          By{" "}
          <span className="font-semibold">
            {book.author}
          </span>
        </p>

        {/* Description */}

        <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-gray-600">
          {book.description}
        </p>

        {/* Rating & Price */}

        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FaStar className="text-yellow-400" />

            <span className="font-semibold">
              {book.rating}
            </span>

          </div>

          <p className="text-xl font-bold text-[#3b1a08]">
            ৳{book.price}
          </p>

        </div>

        {/* Meta */}

        <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm text-gray-500">

          <span>{book.pages} Pages</span>

          <span>{book.published}</span>

        </div>

        {/* Button */}

        <Link
          href={`/all-books/${book.id}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#3b1a08] py-3 font-semibold text-white transition duration-300 hover:bg-[#2a1206]"
        >
          View Details

          <FaArrowRight className="transition group-hover:translate-x-1" />
        </Link>

      </div>
    </div>
  );
};

export default BookCard;
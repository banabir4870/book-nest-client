"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition
          ${
            currentPage === 1
              ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              : "border-[#3b1a08] text-[#3b1a08] hover:bg-[#3b1a08] hover:text-white"
          }`}
      >
        <FaAngleLeft />

        Previous
      </button>

      {/* Page Numbers */}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-12 w-12 rounded-xl border text-lg font-bold transition
            ${
              currentPage === page
                ? "border-[#3b1a08] bg-[#3b1a08] text-white"
                : "border-gray-300 bg-white hover:border-[#3b1a08] hover:text-[#3b1a08]"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition
          ${
            currentPage === totalPages
              ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              : "border-[#3b1a08] text-[#3b1a08] hover:bg-[#3b1a08] hover:text-white"
          }`}
      >
        Next

        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
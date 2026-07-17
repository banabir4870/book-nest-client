"use client";

import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";
import { cinzel } from "@/app/fonts";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  price: string;
  setPrice: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;

  onReset: () => void;
};

const SearchFilter = ({
  search,
  setSearch,
  category,
  setCategory,
  price,
  setPrice,
  sort,
  setSort,
  onReset,
}: Props) => {
  return (
    <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-md">

      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">
        <FaFilter className="text-2xl text-[#3b1a08]" />

        <h2
          className={`text-3xl font-bold text-[#3b1a08] ${cinzel.className}`}
        >
          Find Your Next Book
        </h2>
      </div>

      {/* Search */}

      <div className="grid gap-5 lg:grid-cols-4">

        {/* Search */}

        <div className="relative lg:col-span-2">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
    w-full rounded-xl
    border border-gray-300 dark:border-gray-600
    bg-gray-50 dark:bg-gray-800
    text-gray-900 dark:text-white
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    py-3 pl-12 pr-4
    outline-none transition
    focus:border-[#3b1a08] dark:focus:border-amber-500
  "
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
    rounded-xl
    border border-gray-300 dark:border-gray-600
    bg-gray-50 dark:bg-gray-800
    text-gray-900 dark:text-white
    px-4 py-3
    outline-none
    focus:border-[#3b1a08] dark:focus:border-amber-500
  "
        >
          <option value="All">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Business">Business</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science">Science</option>
          <option value="Novel">Novel</option>
          <option value="History">History</option>
          <option value="Self Development">Self Development</option>
          <option value="Productivity">Productivity</option>
          <option value="Thriller">Thriller</option>
        </select>

        {/* Price */}

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="
    rounded-xl
    border border-gray-300 dark:border-gray-600
    bg-gray-50 dark:bg-gray-800
    text-gray-900 dark:text-white
    px-4 py-3
    outline-none
    transition
    focus:border-[#3b1a08] dark:focus:border-amber-500
  "
        >
          <option value="All">All Prices</option>

          <option value="500">Under ৳500</option>

          <option value="1000">৳500 - ৳1000</option>

          <option value="1001">Above ৳1000</option>
        </select>

      </div>

      {/* Bottom */}

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Sort */}

        <div className="flex items-center gap-3">

          <FaSortAmountDown className="text-[#3b1a08]" />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition duration-200 focus:border-[#3b1a08] focus:ring-2 focus:ring-[#3b1a08]/20"
          >
            <option value="default" className="bg-white text-gray-800">
              Default
            </option>

            <option value="rating" className="bg-white text-gray-800">
              Highest Rating
            </option>

            <option value="low" className="bg-white text-gray-800">
              Price Low → High
            </option>

            <option value="high" className="bg-white text-gray-800">
              Price High → Low
            </option>

            <option value="newest" className="bg-white text-gray-800">
              Newest
            </option>

            <option value="az" className="bg-white text-gray-800">
              A → Z
            </option>

            <option value="za" className="bg-white text-gray-800">
              Z → A
            </option>
          </select>

        </div>

        {/* Reset */}

        <button
          onClick={onReset}
          className={`${cinzel.className} rounded-xl bg-[#3b1a08] px-6 py-3 font-semibold text-white transition hover:bg-[#2a1206]`}
        >
          Reset Filters
        </button>

      </div>

    </section>
  );
};

export default SearchFilter;
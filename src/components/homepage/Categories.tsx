import Link from "next/link";
import {
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  HeartHandshake,
  Landmark,
  Sparkles,
  Telescope,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Programming",
    books: 145,
    icon: Code2,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "Business",
    books: 82,
    icon: Briefcase,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    name: "Self Development",
    books: 91,
    icon: Brain,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    name: "Science",
    books: 64,
    icon: Telescope,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 5,
    name: "History",
    books: 53,
    icon: Landmark,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 6,
    name: "Romance",
    books: 77,
    icon: HeartHandshake,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 7,
    name: "Fantasy",
    books: 69,
    icon: Sparkles,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 8,
    name: "Fiction",
    books: 112,
    icon: BookOpen,
    color: "bg-cyan-100 text-cyan-600",
  },
];

const Categories = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Browse Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Explore by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Find books from your favorite genres and discover something new every
            day.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={`/books?category=${encodeURIComponent(category.name)}`}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  {category.books} Books Available
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
                  Explore
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
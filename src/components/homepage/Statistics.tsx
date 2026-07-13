"use client";

import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BookOpen,
  Users,
  Library,
  Star,
} from "lucide-react";

const data = [
  {
    month: "Jan",
    books: 120,
  },
  {
    month: "Feb",
    books: 180,
  },
  {
    month: "Mar",
    books: 260,
  },
  {
    month: "Apr",
    books: 320,
  },
  {
    month: "May",
    books: 450,
  },
  {
    month: "Jun",
    books: 520,
  },
];

const stats = [
  {
    id: 1,
    title: "Books",
    value: "5,000+",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Authors",
    value: "700+",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    title: "Categories",
    value: "120+",
    icon: Library,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Average Rating",
    value: "4.9",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
];

const Statistics = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Reading Statistics
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            BookNest In Numbers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Thousands of readers trust BookNest every day to discover books,
            authors, and new reading experiences.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-500">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart */}

        <div className="mt-16 rounded-3xl bg-white p-8 shadow-lg">

          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            Monthly Book Collection Growth
          </h3>

          <div className="h-[350px] w-full">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={data}>

                <defs>

                  <linearGradient
                    id="books"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#2563EB"
                      stopOpacity={0.5}
                    />

                    <stop
                      offset="95%"
                      stopColor="#2563EB"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="books"
                  stroke="#2563EB"
                  fill="url(#books)"
                  strokeWidth={3}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Statistics;
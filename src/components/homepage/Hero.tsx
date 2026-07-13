"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Search,
  Star,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  Variants,
} from "framer-motion";

import {
  useEffect,
  useRef,
} from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};
const floating: Variants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({
  value,
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const controls = animate(0, value, {
      duration: 2,
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            Math.floor(latest) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [value, suffix]);

  return (
    <h3
      ref={ref}
      className="text-3xl font-bold text-blue-600"
    >
      0
    </h3>
  );
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [10, -10])
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-10, 10])
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/30 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/30 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-16 px-5 py-16 lg:flex-row"
      >
        {/* LEFT */}

        <div className="flex-1">

          <motion.span
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
            }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
          >
            <BookOpen size={18} />
            Discover Your Next Favorite Book
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            A Home For Every

            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Book{" "}
            </span>

            Lover.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Explore thousands of books across different
            genres. Read reviews, discover bestsellers,
            and build your personal reading collection
            with BookNest.
          </motion.p>

          {/* SEARCH */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.02,
            }}
            className="mt-8 flex max-w-xl overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-xl backdrop-blur-xl"
          >
            <input
              type="text"
              placeholder="Search books, authors..."
              className="w-full bg-transparent px-5 py-4 outline-none"
            />

            <button className="bg-blue-600 px-6 text-white transition hover:bg-blue-700">
              <Search />
            </button>
          </motion.div>

          {/* BUTTONS */}

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href="/all-books"
                className="group relative flex overflow-hidden rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-1000 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">
                  Explore Books

                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
            >
              <Link
                href="/categories"
                className="rounded-xl border border-blue-600 px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Browse Categories
              </Link>
            </motion.div>
          </motion.div>

          {/* STATS */}

          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-5"
          >
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl bg-white/90 p-5 text-center shadow-xl backdrop-blur"
            >
              <Counter
                value={5000}
                suffix="+"
              />

              <p className="mt-2 text-sm text-gray-500">
                Books
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl bg-white/90 p-5 text-center shadow-xl backdrop-blur"
            >
              <Counter
                value={700}
                suffix="+"
              />

              <p className="mt-2 text-sm text-gray-500">
                Authors
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl bg-white/90 p-5 text-center shadow-xl backdrop-blur"
            >
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-yellow-500">
                4.9

                <Star
                  fill="currentColor"
                  size={22}
                />
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Average Rating
              </p>
            </motion.div>
          </motion.div>

        </div>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex flex-1 items-center justify-center"
        >
          {/* Blue Blob */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-12 top-8 h-56 w-56 rounded-full bg-blue-400/40 blur-3xl"
          />

          {/* Orange Blob */}

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-10 right-0 h-60 w-60 rounded-full bg-orange-300/40 blur-3xl"
          />

          {/* Floating Book Image */}

          <motion.div
            variants={floating}
            animate="animate"
            whileHover={{
              scale: 1.03,
              rotate: -2,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative z-20 overflow-hidden rounded-3xl"
          >
            <Image
              src="/image1.jpg"
              alt="Books"
              width={700}
              height={700}
              priority
              className="rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          {/* Floating Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            whileHover={{
              y: -8,
            }}
            className="absolute -left-8 top-10 z-30 hidden rounded-2xl bg-white/90 p-4 shadow-2xl backdrop-blur md:block"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3">
                <BookOpen
                  size={22}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">
                  5,000+ Books
                </h4>

                <p className="text-sm text-gray-500">
                  Updated Weekly
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rating Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            whileHover={{
              y: -8,
            }}
            className="absolute -bottom-4 right-0 z-30 hidden rounded-2xl bg-white/90 p-4 shadow-2xl backdrop-blur md:block"
          >
            <div className="flex items-center gap-3">
              <Star
                fill="currentColor"
                className="text-yellow-500"
              />

              <div>
                <h4 className="font-semibold">
                  4.9 Rating
                </h4>

                <p className="text-sm text-gray-500">
                  Trusted by Readers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Floating Circle */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute right-16 top-20 h-6 w-6 rounded-full bg-blue-500"
          />

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-20 left-8 h-4 w-4 rounded-full bg-orange-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { cinzel } from "@/app/fonts";
import { FaBookOpen, FaUsers, FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-[#f8f5f2]">

      {/* ================= Hero Section ================= */}

      <section className="relative h-[70vh] overflow-hidden">

        <Image
          src="/image2.jpg"
          alt="About BookNest"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

          <div className="max-w-3xl text-white">

            <Image
              src="/bookNest_logo.png"
              alt="BookNest"
              width={90}
              height={90}
            />

            <h1
              className={`mt-8 text-5xl font-bold lg:text-7xl ${cinzel.className}`}
            >
              About
              <span className="text-orange-400">
                {" "}BookNest
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-200">
              BookNest is more than just an online bookstore. We are a community
              of passionate readers dedicated to making books accessible,
              affordable, and enjoyable for everyone. Whether you're searching
              for timeless classics, bestselling novels, or educational
              resources, BookNest is your trusted reading companion.
            </p>

            <Link
              href="/all-books"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Books
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* ================= Our Story ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}

          <div className="relative overflow-hidden rounded-3xl shadow-xl">

            <Image
              src="/image1.jpg"
              alt="Our Story"
              width={700}
              height={700}
              className="h-[550px] w-full object-cover"
            />

          </div>

          {/* Content */}

          <div>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Our Story
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              Inspiring Readers Through Every Page
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              BookNest was founded with one simple vision — to connect people
              with books that educate, inspire, and entertain. We believe every
              great journey begins with a single page, and every reader deserves
              easy access to quality books from around the world.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Our platform offers carefully curated collections across various
              genres, allowing readers to discover new favorites while helping
              authors reach a wider audience. With secure shopping, fast
              browsing, and an ever-growing library, BookNest continues to make
              reading more accessible than ever.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <FaBookOpen className="text-4xl text-orange-500" />

                <h3 className="mt-4 text-xl font-bold text-[#3b1a08]">
                  12,000+
                </h3>

                <p className="mt-2 text-gray-500">
                  Books Available
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <FaUsers className="text-4xl text-orange-500" />

                <h3 className="mt-4 text-xl font-bold text-[#3b1a08]">
                  5,000+
                </h3>

                <p className="mt-2 text-gray-500">
                  Happy Readers
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
      {/* ================= Mission & Vision ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Our Mission
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              Why We Built BookNest
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              Our mission is to make reading enjoyable and accessible for everyone.
              We strive to create a modern platform where readers can discover,
              explore, and collect books while supporting authors and publishers
              around the world.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}

            <div className="rounded-3xl border border-gray-100 bg-[#fcfaf8] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-500">
                📚
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#3b1a08]">
                Huge Collection
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Thousands of carefully selected books across fiction,
                programming, business, history, self-development and many more
                categories.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-3xl border border-gray-100 bg-[#fcfaf8] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-500">
                🚀
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#3b1a08]">
                Fast & Easy
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Browse books instantly with powerful search, category filters,
                and detailed book information for a seamless reading
                experience.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-3xl border border-gray-100 bg-[#fcfaf8] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-500">
                ❤️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#3b1a08]">
                Reader Community
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                BookNest connects passionate readers and book lovers by helping
                them discover, share and enjoy amazing books together.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= Why Choose Us ================= */}

      <section className="bg-[#f8f5f2] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Why Choose Us
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              What Makes BookNest Different?
            </h2>

          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "🔒",
                title: "Secure Platform",
                desc: "Your information and browsing experience remain safe and protected.",
              },
              {
                icon: "⭐",
                title: "Top Rated Books",
                desc: "Explore highly rated books loved by thousands of readers.",
              },
              {
                icon: "💰",
                title: "Affordable Prices",
                desc: "Discover premium books at competitive and budget-friendly prices.",
              },
              {
                icon: "🌍",
                title: "Worldwide Collection",
                desc: "Books from famous authors and publishers across the globe.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#3b1a08]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= Statistics ================= */}

      <section className="bg-[#3b1a08] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-300">
              BookNest In Numbers
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-white ${cinzel.className}`}
            >
              Growing Every Day
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-gray-300">
              Thousands of readers trust BookNest to discover their next favorite
              book. Our community continues to grow with new books and readers
              joining every day.
            </p>

          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "12K+",
                title: "Books Available",
              },
              {
                number: "5K+",
                title: "Happy Readers",
              },
              {
                number: "600+",
                title: "Authors",
              },
              {
                number: "98%",
                title: "Customer Satisfaction",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
              >

                <h3 className="text-5xl font-bold text-orange-400">
                  {item.number}
                </h3>

                <p className="mt-4 text-lg text-gray-300">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= Our Team ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Meet Our Team
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              Passionate People Behind BookNest
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              Our dedicated team works every day to bring readers and books
              together through an enjoyable and reliable platform.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                image: "/image1.jpg",
                name: "Sarah Johnson",
                role: "Founder & CEO",
              },
              {
                image: "/image2.jpg",
                name: "Michael Brown",
                role: "Lead Developer",
              },
              {
                image: "/image3.jpg",
                name: "Emily Davis",
                role: "Customer Success",
              },
            ].map((member, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-[#fcfaf8] shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover"
                />

                <div className="p-8 text-center">

                  <h3 className="text-2xl font-bold text-[#3b1a08]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-orange-500">
                    {member.role}
                  </p>

                  <p className="mt-5 leading-8 text-gray-600">
                    Dedicated to making BookNest the best destination for readers
                    around the world through innovation and passion.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= CTA Section ================= */}

      <section className="relative overflow-hidden bg-[#3b1a08] py-24">

        <div className="absolute inset-0 opacity-10">
          <Image
            src="/image2.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Start Your Reading Journey
          </span>

          <h2
            className={`mt-8 text-4xl font-bold text-white lg:text-6xl ${cinzel.className}`}
          >
            Every Great Story
            <span className="block text-orange-400">
              Begins With A Book
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Whether you&apos;re looking for your next favorite novel, expanding your
            professional knowledge, or exploring timeless classics, BookNest is
            here to help you discover books that inspire, educate, and entertain.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/all-books"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Explore Books
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#3b1a08]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* ================= Newsletter ================= */}

      <section className="bg-[#f8f5f2] py-24">

        <div className="mx-auto max-w-4xl rounded-[32px] bg-white px-8 py-16 text-center shadow-2xl">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Newsletter
          </span>

          <h2
            className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
          >
            Stay Updated
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-gray-600">
            Subscribe to receive updates about new arrivals, bestselling books,
            exclusive offers, and exciting reading recommendations from BookNest.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:border-orange-500"
            />

            <button
              className="rounded-xl bg-[#3b1a08] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#2a1206]"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>
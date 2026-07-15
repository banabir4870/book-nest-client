import Image from "next/image";
import { cinzel } from "@/app/fonts";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="bg-[#f8f5f2]">

      {/* ================= Hero ================= */}

      <section className="relative h-[65vh] overflow-hidden">

        <Image
          src="/image1.jpg"
          alt="Contact BookNest"
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
              Contact
              <span className="text-orange-400">
                {" "}BookNest
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-200">
              We&apos;d love to hear from you. Whether you have a question,
              suggestion, or simply want to say hello, our team is always
              ready to help.
            </p>

          </div>

        </div>

      </section>

      {/* ================= Contact Cards ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Get In Touch
          </span>

          <h2
            className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
          >
            We&apos;d Love To Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            Reach out to our support team anytime. We&apos;re committed to providing
            the best experience for every BookNest reader.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Email */}

          <div className="rounded-3xl bg-white p-10 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">

              <FaEnvelope className="text-3xl text-orange-500" />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#3b1a08]">
              Email
            </h3>

            <p className="mt-4 text-gray-600">
              support@booknest.com
            </p>

            <p className="text-gray-600">
              contact@booknest.com
            </p>

          </div>

          {/* Phone */}

          <div className="rounded-3xl bg-white p-10 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">

              <FaPhone className="text-3xl text-orange-500" />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#3b1a08]">
              Phone
            </h3>

            <p className="mt-4 text-gray-600">
              +880 1712-345678
            </p>

            <p className="text-gray-600">
              +880 1812-345678
            </p>

          </div>

          {/* Address */}

          <div className="rounded-3xl bg-white p-10 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">

              <FaLocationDot className="text-3xl text-orange-500" />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#3b1a08]">
              Address
            </h3>

            <p className="mt-4 text-gray-600">
              123 Reading Avenue
            </p>

            <p className="text-gray-600">
              Dhaka, Bangladesh
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
      {/* ================= Contact Form ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Send Message
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              Let&apos;s Talk
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Have a question, suggestion, or partnership idea? Fill out the
              form and our team will get back to you as soon as possible.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <h3 className="text-xl font-bold text-[#3b1a08]">
                  Business Hours
                </h3>

                <p className="mt-3 text-gray-600">
                  Monday - Friday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>

              </div>

              <div>
                <h3 className="text-xl font-bold text-[#3b1a08]">
                  Customer Support
                </h3>

                <p className="mt-3 text-gray-600">
                  We&apos;re available every day to help readers with any questions.
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[32px] bg-[#fcfaf8] p-8 shadow-xl">

            <form className="space-y-6">

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500"
                />

              </div>

              <button
                className={`${cinzel.className} w-full rounded-xl bg-[#3b1a08] py-4 text-lg font-semibold text-white transition hover:bg-[#2a1206]`}
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
            {/* ================= Map Section ================= */}

      <section className="bg-[#f8f5f2] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Visit Us
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              Find Our Office
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              We welcome visitors during business hours. Feel free to stop by
              our office for assistance, partnership discussions, or general
              inquiries.
            </p>

          </div>

          <div className="mt-14 overflow-hidden rounded-[32px] shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Frequently Asked Questions
            </span>

            <h2
              className={`mt-6 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
            >
              Need Some Help?
            </h2>

          </div>

          <div className="mt-14 space-y-6">

            {[
              {
                question: "How can I add my own books?",
                answer:
                  "After logging in, go to the Add Book page from your dashboard and fill in the required information.",
              },
              {
                question: "Can I delete a book later?",
                answer:
                  "Yes. You can manage all books you've added from the My Books page. Admins can manage every book.",
              },
              {
                question: "Do I need an account to browse books?",
                answer:
                  "No. Everyone can explore books and view details. However, adding and managing books requires an account.",
              },
            ].map((faq, index) => (

              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-[#fcfaf8] p-6"
              >

                <h3 className="text-xl font-bold text-[#3b1a08]">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#3b1a08] py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2
            className={`text-4xl font-bold text-white lg:text-5xl ${cinzel.className}`}
          >
            Ready To Discover
            <span className="block text-orange-400">
              Your Next Favorite Book?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Join thousands of readers exploring books, discovering new authors,
            and sharing knowledge through BookNest.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <a
              href="/books"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Books
            </a>

            <a
              href="/auth/register"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#3b1a08]"
            >
              Join BookNest
            </a>

          </div>

        </div>

      </section>

import Image from "next/image";
import Link from "next/link";
import { cinzel } from "@/app/fonts";
import { FaGoogle, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-[#f6f3ef] px-4 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:grid-cols-2">

        {/* Left Side */}

        <div className="relative hidden lg:block">
          <Image
            src="/image2.jpg"
            alt="BookNest"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-16 text-white">

            <Image
              src="/bookNest_logo.png"
              alt="BookNest"
              width={90}
              height={90}
            />

            <h1
              className={`mt-6 text-6xl font-bold ${cinzel.className}`}
            >
              Book
              <span className="text-orange-400">
                Nest
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-200">
              Create your BookNest account and unlock thousands of amazing
              books, personalized recommendations, and your own reading library.
            </p>

            <div className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">

              <p className="text-2xl italic leading-10">
                &quot;Today a reader, tomorrow a leader.&quot;
              </p>

              <p className="mt-4 font-semibold text-orange-300">
                — Margaret Fuller
              </p>

            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center bg-[#fcfaf8] px-8 py-12 lg:px-14">

          <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-10 shadow-lg">

            {/* Logo */}

            <div className="text-center">

              <Image
                src="/bookNest_logo.png"
                alt="BookNest"
                width={70}
                height={70}
                className="mx-auto"
              />

              <h2
                className={`mt-5 text-4xl font-bold text-[#3b1a08] ${cinzel.className}`}
              >
                Book
                <span className="text-orange-400">
                  Nest
                </span>
              </h2>

              <p className="mt-3 text-gray-500">
                Create your account and start your reading journey.
              </p>

            </div>

            {/* Form */}

            <form className="mt-8 space-y-5">

              {/* Name */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-[#3b1a08]">

                  <FaUser className="text-gray-500" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-[#3b1a08]">

                  <MdEmail className="text-xl text-gray-500" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Photo */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Photo URL
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-[#3b1a08]">

                  <IoImageOutline className="text-xl text-gray-500" />

                  <input
                    type="text"
                    placeholder="Paste your photo URL"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-[#3b1a08]">

                  <RiLockPasswordFill className="text-xl text-gray-500" />

                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Register */}

              <button
                className={`${cinzel.className} w-full rounded-xl bg-[#3b1a08] py-4 text-lg font-semibold text-white transition hover:bg-[#2a1206]`}
              >
                Create Account
              </button>

            </form>

            {/* Divider */}

            <div className="my-8 flex items-center">

              <div className="h-px flex-1 bg-gray-300"></div>

              <span className="px-4 text-sm text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-300"></div>

            </div>

            {/* Google */}

            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-4 font-semibold transition hover:bg-gray-100">

              <FaGoogle className="text-red-500" />

              Continue with Google

            </button>

            {/* Login */}

            <p className="mt-8 text-center text-gray-600">

              Already have an account?

              <Link
                href="/auth/login"
                className="ml-2 font-semibold text-[#3b1a08] hover:text-orange-500"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
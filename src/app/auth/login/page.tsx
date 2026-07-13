import Image from "next/image";
import Link from "next/link";
import { cinzel } from "@/app/fonts";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#f6f3ef] px-4 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="relative hidden lg:block">
          <Image
            src="/image1.jpg"
            alt="BookNest"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-16 text-white">
            <Image
              src="/bookNest_logo.png"
              alt="BookNest Logo"
              width={90}
              height={90}
            />

            <h1
              className={`mt-6 text-6xl font-bold ${cinzel.className}`}
            >
              Book
              <span className="text-orange-400">Nest</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-200">
              Discover timeless classics, bestselling novels, inspiring
              biographies, and thousands of books from every genre.
            </p>

            <div className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-2xl italic leading-10">
                &quot;A reader lives a thousand lives before he dies.&quot;
              </p>

              <p className="mt-4 font-semibold text-orange-300">
                — George R. R. Martin
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
                <span className="text-orange-400">Nest</span>
              </h2>

              <p className="mt-3 text-gray-500">
                Welcome back! Login to continue your reading journey.
              </p>
            </div>

            {/* Form */}

            <form className="mt-10 space-y-6">

              {/* Email */}

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#3b1a08]">
                  <MdEmail className="text-xl text-gray-500" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="font-semibold text-gray-700">
                    Password
                  </label>
                </div>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#3b1a08]">
                  <RiLockPasswordFill className="text-xl text-gray-500" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />
                </div>
              </div>

              {/* Login */}

              <button
                className={`${cinzel.className} w-full rounded-xl bg-[#3b1a08] py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#2a1206]`}
              >
                Login
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

            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-4 font-semibold transition duration-300 hover:bg-gray-100">
              <FaGoogle className="text-red-500" />

              Continue with Google
            </button>

            {/* Register */}

            <p className="mt-8 text-center text-gray-600">
              Don&apos;t have an account?

              <Link
                href="/auth/register"
                className="ml-2 font-semibold text-[#3b1a08] hover:text-orange-500"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { cinzel } from '@/app/fonts';

const isLoggedIn = false;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex py-2 w-10/12 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bookNest_logo.png"
            alt="BookNest"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div>
            <h2 className="text-2xl font-extrabold">
            <span className={`${cinzel.className}`}>Book</span>
              <span className={`${cinzel.className}`}>Nest</span>
            </h2>

            <p className="-mt-1 text-xs text-black/80">
              Read • Discover • Inspire
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 font-medium lg:flex">
          <Link
            href="/"
            className={`${cinzel.className} transition text-xl hover:text-[#3b1a08] hover:font-extrabold`}
          >
            Home
          </Link>

          <Link
            href="/books"
            className={`${cinzel.className} transition text-xl hover:text-[#3b1a08] hover:font-extrabold`}
          >
            Explore Books
          </Link>

          <Link
            href="/about"
            className={`${cinzel.className} transition text-xl hover:text-[#3b1a08] hover:font-extrabold`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`${cinzel.className} transition text-xl hover:text-[#3b1a08] hover:font-extrabold`}
          >
            Contact
          </Link>

          {isLoggedIn && (
            <>
              <Link
                href="/dashboard"
                className={`${cinzel.className} transition text-xl hover:text-[#3b1a08] hover:font-extrabold`}
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/add-book"
                className={`${cinzel.className} transition text-xl hover:text-[#3b1a08] hover:font-extrabold`}
              >
                Add Book
              </Link>
            </>
          )}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className={`${cinzel.className} rounded-lg border border-[#3b1a08] px-5 py-2 font-semibold text-[#3b1a08] transition hover:bg-blue-50`}
              >
                Login
              </Link>

              <Link
                href="/register"
                className={`${cinzel.className} rounded-lg bg-[#3b1a08] px-5 py-2 font-semibold text-white transition hover:bg-[#2a1206]`}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Image
                src="/user.jpg"
                alt="User"
                width={42}
                height={42}
                className="rounded-full border"
              />

              <button className={`${cinzel.className} rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600`}>
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button className={`${cinzel.className} rounded-lg border p-2`}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
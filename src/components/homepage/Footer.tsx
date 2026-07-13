import Image from "next/image";
import Link from "next/link";
import { cinzel } from "@/app/fonts";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#2b160c] text-gray-300">
      <div className="mx-auto w-10/12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}

          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/bookNest_logo.png"
                alt="BookNest"
                width={60}
                height={60}
              />

              <div>
                <h2
                  className={`text-2xl font-bold text-white ${cinzel.className}`}
                >
                  Book
                  <span className="text-orange-400">Nest</span>
                </h2>

                <p className="text-xs text-gray-400">
                  Read • Discover • Inspire
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-gray-400">
              BookNest is your trusted online library where readers can discover
              thousands of books, explore new genres, and enjoy a seamless
              reading experience.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className={`mb-6 text-xl font-semibold text-white ${cinzel.className}`}
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="transition hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition hover:text-orange-400"
                >
                  Explore Books
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-orange-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3
              className={`mb-6 text-xl font-semibold text-white ${cinzel.className}`}
            >
              Categories
            </h3>

            <ul className="space-y-3">
              <li>Programming</li>
              <li>Business</li>
              <li>Fantasy</li>
              <li>Science</li>
              <li>Biography</li>
              <li>Self Development</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className={`mb-6 text-xl font-semibold text-white ${cinzel.className}`}
            >
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lg text-orange-400" />

                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg text-orange-400" />

                <span>+880 1712-345678</span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-xl text-orange-400" />

                <span>support@booknest.com</span>
              </div>
            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b1a08] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b1a08] transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b1a08] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[#4a2918]">
        <div className="mx-auto flex w-10/12 flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p className="text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">BookNest</span>. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-orange-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
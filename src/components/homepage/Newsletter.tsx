import Image from "next/image";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="overflow-hidden rounded-4xl bg-linear-to-r from-blue-600 to-indigo-700">

          <div className="grid items-center lg:grid-cols-2">

            {/* Left */}

            <div className="p-10 text-white lg:p-16">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                Newsletter
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                Never Miss A Great Book
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Subscribe to receive new arrivals, bestselling books,
                personalized recommendations and exclusive reading tips.
              </p>

              <div className="mt-10 flex overflow-hidden rounded-2xl bg-white">

                <div className="flex items-center px-5 text-gray-500">
                  <Mail size={20} />
                </div>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 py-4 text-gray-700 outline-none"
                />

                <button className="bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
                  Subscribe
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="hidden lg:block">

              <Image
                src="/image3.jpg"
                alt="Newsletter"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;
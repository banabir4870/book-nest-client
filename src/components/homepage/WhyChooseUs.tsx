import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookMarked,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Curated Collection",
    description:
      "Discover handpicked books from bestselling authors and hidden gems across every genre.",
    icon: BookMarked,
  },
  {
    id: 2,
    title: "Trusted Reviews",
    description:
      "Read genuine ratings and reviews from thousands of passionate readers.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Secure Shopping",
    description:
      "Enjoy a safe and secure browsing experience with reliable book information.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Fast Delivery",
    description:
      "Order your favorite books with quick delivery and hassle-free service.",
    icon: Truck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-200 blur-3xl"></div>

          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-orange-200 blur-3xl"></div>

          <Image
            src="/image2.jpg"
            alt="Why Choose BookNest"
            width={700}
            height={700}
            className="relative z-10 rounded-3xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
            Your Trusted Destination
            <span className="text-blue-600"> For Books</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            BookNest helps readers discover amazing books through curated
            collections, trusted recommendations, and an enjoyable reading
            experience.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Learn More
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import Link from "next/link";
import { cinzel } from "@/app/fonts";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fffaf5] px-6">

      <div className="text-center">


        {/* 404 Number */}
        <h1
          className={`${cinzel.className} text-8xl md:text-9xl font-extrabold text-[#3b1a08]`}
        >
          404
        </h1>


        {/* Title */}
        <h2
          className={`${cinzel.className} mt-5 text-3xl md:text-4xl font-bold`}
        >
          Page Not Found
        </h2>


        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-gray-600 text-lg">
          Sorry, the page you are looking for does not exist or has been
          moved. Let&apos;s get you back to your reading journey.
        </p>



        {/* Button */}
        <Link
          href="/"
          className={`
          ${cinzel.className}
          inline-block
          mt-8
          rounded-lg
          bg-[#3b1a08]
          px-8
          py-3
          text-white
          font-semibold
          transition
          hover:bg-[#2a1206]
          hover:scale-105
          `}
        >
          Back To Home
        </Link>



      </div>

    </main>
  );
};

export default NotFound;
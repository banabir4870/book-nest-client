"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Form } from "@heroui/react";

import { cinzel } from "@/app/fonts";

import { FaGoogle, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";

type RegisterForm = {
  name: string;
  email: string;
  photo: string;
  password: string;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<RegisterForm>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: Partial<RegisterForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.photo.trim()) {
      newErrors.photo = "Photo URL is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else {
      if (formData.password.length < 6) {
        newErrors.password =
          "Password must be at least 6 characters.";
      } else if (!/[A-Z]/.test(formData.password)) {
        newErrors.password =
          "Password must contain at least one uppercase letter.";
      } else if (!/[a-z]/.test(formData.password)) {
        newErrors.password =
          "Password must contain at least one lowercase letter.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) {
      alert("Please fix the errors.");
      return;
    }

    const { data, error } = await authClient.signUp.email(
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: formData.photo,
      },
      {
        onSuccess: () => {
          alert("Registration Successful!");
        },

        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );

    setFormData({
      name: "",
      email: "",
      photo: "",
      password: "",
    });

    setErrors({});
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

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

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

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
              Create your BookNest account and unlock thousands of books,
              personalized recommendations, exclusive collections, and your
              own digital reading library.
            </p>

            <div className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">

              <p className="text-2xl italic leading-10">
                &quot;Today a reader, tomorrow a leader.&quot;
              </p>

              <p className="mt-4 font-semibold text-orange-300">
                — Margaret Fuller
              </p>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="rounded-xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur">

                <h3 className="text-3xl font-bold text-orange-300">
                  12K+
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Books
                </p>

              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur">

                <h3 className="text-3xl font-bold text-orange-300">
                  8K+
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Readers
                </p>

              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur">

                <h3 className="text-3xl font-bold text-orange-300">
                  4.9★
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Rating
                </p>

              </div>

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

            <Form
              onSubmit={onSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#3b1a08] focus-within:ring-2 focus-within:ring-[#3b1a08]/20">

                  <FaUser className="text-gray-500" />

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-900 px-3 py-4 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />

                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#3b1a08] focus-within:ring-2 focus-within:ring-[#3b1a08]/20">

                  <MdEmail className="text-lg text-gray-500" />

                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-900 px-3 py-4 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />

                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Photo URL */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Photo URL
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#3b1a08] focus-within:ring-2 focus-within:ring-[#3b1a08]/20">

                  <IoImageOutline className="text-lg text-gray-500" />

                  <input
                    name="photo"
                    type="text"
                    placeholder="Paste your photo URL"
                    value={formData.photo}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-900 px-3 py-4 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />

                </div>

                {errors.photo && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.photo}
                  </p>
                )}

              </div>
              {/* Password */}

              <div>

                <label className="mb-2 block font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#3b1a08] focus-within:ring-2 focus-within:ring-[#3b1a08]/20">

                  <RiLockPasswordFill className="text-lg text-gray-500" />

                  <input
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-800 px-3 py-4 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />

                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password}
                  </p>
                )}

                <p className="mt-2 text-xs text-gray-500">
                  Password must contain at least 6 characters,
                  one uppercase letter and one lowercase letter.
                </p>

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className={`${cinzel.className} w-full rounded-xl bg-[#3b1a08] py-4 text-lg font-semibold text-white transition hover:bg-[#2a1206]`}
              >
                Create Account
              </button>

            </Form>

            {/* Divider */}

            <div className="my-8 flex items-center">

              <div className="h-px flex-1 bg-gray-300"></div>

              <span className="px-4 text-sm text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-300"></div>

            </div>

            {/* Google Login */}

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-4 font-semibold transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={handleGoogleSignIn}
            >

              <FaGoogle className="text-red-500" />

              Continue with Google

            </button>

            {/* Login Link */}

            <p className="mt-8 text-center text-gray-600">

              Already have an account?

              <Link
                href="/auth/login"
                className="ml-2 font-semibold text-[#3b1a08] transition hover:text-orange-500"
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
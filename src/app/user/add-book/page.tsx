"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { ensureJWT } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { cinzel } from "@/app/fonts";
import Image from "next/image";
import {
  FaBook,
  FaUser,
  FaTag,
  FaDollarSign,
  FaStar,
  FaBuilding,
  FaCalendarAlt,
  FaGlobe,
  FaFileAlt,
  FaLayerGroup,
  FaBarcode,
  FaImage,
  FaAlignLeft,
} from "react-icons/fa";

const API_URL = "https://book-nest-server-delta.vercel.app";

const CATEGORIES = [
  "Programming",
  "Business",
  "Fantasy",
  "Science",
  "Novel",
  "History",
  "Self Development",
  "Productivity",
  "Thriller",
  "Biography",
  "Education",
  "Health",
  "Travel",
  "Art",
  "Philosophy",
  "Other",
];

type FormData = {
  title: string;
  author: string;
  category: string;
  price: string;
  rating: string;
  publisher: string;
  published: string;
  language: string;
  pages: string;
  quantity: string;
  isbn: string;
  image: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

interface InputFieldProps {
  name: keyof FormData;
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

// Defined outside AddBookPage to prevent re-creation on every render (fixes focus loss)
const InputField = ({
  name,
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: InputFieldProps) => (
  <div>
    <label className="mb-2 block font-semibold text-gray-700">{label}</label>
    <div
      className={`flex items-center rounded-xl border bg-gray-50 px-4 transition focus-within:border-[#3b1a08] ${error ? "border-red-400" : "border-gray-200"
        }`}
    >
      <span className="text-gray-400 text-lg">{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent px-3 py-3.5 outline-none text-sm"
      />
    </div>
    {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
  </div>
);

export default function AddBookPage() {
  const { data: sessionData, isPending } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    author: "",
    category: "",
    price: "",
    rating: "",
    publisher: "",
    published: "",
    language: "",
    pages: "",
    quantity: "",
    isbn: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const user = sessionData?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/auth/login");
    }
  }, [user, isPending, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.category) newErrors.category = "Category is required";

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!formData.rating) {
      newErrors.rating = "Rating is required";
    } else if (Number(formData.rating) < 0 || Number(formData.rating) > 5) {
      newErrors.rating = "Rating must be between 0 and 5";
    }

    if (!formData.publisher.trim()) newErrors.publisher = "Publisher is required";
    if (!formData.published) newErrors.published = "Published year is required";
    if (!formData.language.trim()) newErrors.language = "Language is required";

    if (!formData.pages) {
      newErrors.pages = "Pages is required";
    } else if (Number(formData.pages) <= 0) {
      newErrors.pages = "Pages must be greater than 0";
    }

    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required";
    } else if (Number(formData.quantity) < 0) {
      newErrors.quantity = "Quantity must be 0 or more";
    }

    if (!formData.isbn.trim()) newErrors.isbn = "ISBN is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      // Exchange Better Auth session for a JWT cookie on Express (once per submit).
      // This bypasses SameSite=Lax restrictions on the Better Auth cookie.
      await ensureJWT();

      // Now fetch with credentials:include so the booknest_jwt cookie is sent automatically
      const res = await fetch(`${API_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          rating: Number(formData.rating),
          published: Number(formData.published),
          pages: Number(formData.pages),
          quantity: Number(formData.quantity),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to add book");
        return;
      }

      toast.success("Book added successfully!");
      router.push("/user/my-books");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
        <div className="text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#3b1a08] border-t-transparent mx-auto" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <section className="min-h-screen bg-[#f6f3ef] px-4 py-8 lg:px-8 lg:py-12">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden lg:block">
          <Image src="/image2.jpg" alt="BookNest Add Book" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-14 text-white">
            <Image src="/bookNest_logo.png" alt="BookNest Logo" width={80} height={80} />
            <h1 className={`mt-6 text-5xl font-bold ${cinzel.className}`}>
              Share Your
              <span className="block text-orange-400">Knowledge</span>
            </h1>
            <p className="mt-6 max-w-sm text-lg leading-8 text-gray-200">
              Add books to the BookNest collection and help readers discover great titles.
            </p>
            <div className="mt-10 space-y-4">
              {["Fill in book details below", "Your book gets added instantly", "Manage it from My Books page"].map(
                (step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-400 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="text-gray-200">{step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="overflow-y-auto bg-[#fcfaf8] px-6 py-10 lg:px-12">
          <div className="mx-auto max-w-lg">

            {/* Header */}
            <div className="text-center">
              <Image src="/bookNest_logo.png" alt="BookNest" width={60} height={60} className="mx-auto" />
              <h2 className={`mt-4 text-3xl font-bold text-[#3b1a08] ${cinzel.className}`}>Add New Book</h2>
              <p className="mt-2 text-gray-500 text-sm">Fill in all details to add your book to BookNest</p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="mt-8 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2 placeholder:text-gray-500 dark:placeholder:text-gray-400">
                <InputField name="title" label="Book Title" icon={<FaBook />} placeholder="Enter book title" value={formData.title} onChange={handleChange} error={errors.title} />
                <InputField name="author" label="Author" icon={<FaUser />} placeholder="Author name" value={formData.author} onChange={handleChange} error={errors.author} />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">Category</label>
                <div className={`flex items-center rounded-xl border bg-gray-50 dark:bg-gray-700 px-4 transition focus-within:border-[#3b1a08] dark:focus-within:border-orange-500 ${errors.category
                  ? "border-red-400"
                  : "border-gray-200 dark:border-gray-600"
                  }`}>
                  <FaTag className="text-gray-400" />
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-transparent px-3 py-3.5 outline-none text-sm text-gray-900 dark:text-white">
                    <option value="">Select a category</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                {errors.category && <p className="mt-1.5 text-xs text-red-500">{errors.category}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2 placeholder:text-gray-500 dark:placeholder:text-gray-400">
                <InputField name="price" label="Price (৳)" icon={<FaDollarSign />} type="number" placeholder="e.g. 499" value={formData.price} onChange={handleChange} error={errors.price} />
                <InputField name="rating" label="Rating (0–5)" icon={<FaStar />} type="number" placeholder="e.g. 4.5" value={formData.rating} onChange={handleChange} error={errors.rating} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2 placeholder:text-gray-500 dark:placeholder:text-gray-400">
                <InputField name="publisher" label="Publisher" icon={<FaBuilding />} placeholder="Publisher name" value={formData.publisher} onChange={handleChange} error={errors.publisher} />
                <InputField name="published" label="Published Year" icon={<FaCalendarAlt />} type="number" placeholder="e.g. 2024" value={formData.published} onChange={handleChange} error={errors.published} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2 placeholder:text-gray-500 dark:placeholder:text-gray-400">
                <InputField name="language" label="Language" icon={<FaGlobe />} placeholder="e.g. English" value={formData.language} onChange={handleChange} error={errors.language} />
                <InputField name="pages" label="Pages" icon={<FaFileAlt />} type="number" placeholder="Number of pages" value={formData.pages} onChange={handleChange} error={errors.pages} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2 placeholder:text-gray-500 dark:placeholder:text-gray-400">
                <InputField name="quantity" label="Quantity" icon={<FaLayerGroup />} type="number" placeholder="Stock quantity" value={formData.quantity} onChange={handleChange} error={errors.quantity} />
                <InputField name="isbn" label="ISBN" icon={<FaBarcode />} placeholder="e.g. 9780735211292" value={formData.isbn} onChange={handleChange} error={errors.isbn} />
              </div>

              <div className="placeholder:text-gray-500 dark:placeholder:text-gray-400">
                <InputField name="image" label="Cover Image URL" icon={<FaImage />} placeholder="https://example.com/cover.jpg" value={formData.image} onChange={handleChange} error={errors.image} />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">Description</label>
                <div className={`flex rounded-xl border bg-gray-50 dark:bg-gray-700 px-4 py-3 transition focus-within:border-[#3b1a08] dark:focus-within:border-orange-500 ${errors.description
                  ? "border-red-400"
                  : "border-gray-200 dark:border-gray-600"
                  }`}>
                  <FaAlignLeft className="mt-1 shrink-0 text-gray-400" />
                  <textarea
                    name="description"
                    placeholder="Write a brief description of the book..."
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none bg-transparent px-3 outline-none text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                {errors.description && <p className="mt-1.5 text-xs text-red-500">{errors.description}</p>}
              </div>

              {/* Submit — only onSubmit on the <form>, no onClick on the button */}
              <button
                type="submit"
                disabled={loading}
                className={`${cinzel.className} w-full rounded-xl bg-[#3b1a08] py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#2a1206] disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {loading ? "Adding Book..." : "Add Book"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  published: number;
  pages: number;
  language: string;
  image: string;
  description: string;
};

export const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    price: 499,
    rating: 4.9,
    published: 2018,
    pages: 320,
    language: "English",
    image: "/image1.jpg",
    description:
      "Tiny changes can lead to remarkable results. Learn how habits shape success.",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Business",
    price: 550,
    rating: 4.8,
    published: 2020,
    pages: 256,
    language: "English",
    image: "/image2.jpg",
    description:
      "Understand how people think about money and financial decisions.",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
    price: 450,
    rating: 4.7,
    published: 1997,
    pages: 336,
    language: "English",
    image: "/image3.jpg",
    description:
      "Classic personal finance book that changes the way you think about money.",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    price: 650,
    rating: 4.8,
    published: 2016,
    pages: 304,
    language: "English",
    image: "/image1.jpg",
    description:
      "Master focused success in a distracted world.",
  },
  {
    id: 5,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 990,
    rating: 4.9,
    published: 2008,
    pages: 464,
    language: "English",
    image: "/image2.jpg",
    description:
      "A handbook of agile software craftsmanship.",
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    price: 1100,
    rating: 4.9,
    published: 2019,
    pages: 352,
    language: "English",
    image: "/image3.jpg",
    description:
      "One of the best books every software developer should read.",
  },
  {
    id: 7,
    title: "Harry Potter",
    author: "J. K. Rowling",
    category: "Fantasy",
    price: 780,
    rating: 4.9,
    published: 1997,
    pages: 420,
    language: "English",
    image: "/image1.jpg",
    description:
      "The magical journey of Harry Potter.",
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    category: "Fantasy",
    price: 720,
    rating: 4.8,
    published: 1937,
    pages: 366,
    language: "English",
    image: "/image2.jpg",
    description:
      "Adventure, dragons, dwarves and treasures.",
  },
  {
    id: 9,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    price: 860,
    rating: 4.8,
    published: 2015,
    pages: 498,
    language: "English",
    image: "/image3.jpg",
    description:
      "A brief history of humankind.",
  },
  {
    id: 10,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Business",
    price: 490,
    rating: 4.7,
    published: 1937,
    pages: 320,
    language: "English",
    image: "/image1.jpg",
    description:
      "Timeless success principles and wealth mindset.",
  },
  {
    id: 11,
    title: "Ikigai",
    author: "Hector Garcia",
    category: "Self Development",
    price: 560,
    rating: 4.7,
    published: 2016,
    pages: 208,
    language: "English",
    image: "/image2.jpg",
    description:
      "Discover the Japanese secret to a long and happy life.",
  },
  {
    id: 12,
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    price: 620,
    rating: 4.6,
    published: 2014,
    pages: 224,
    language: "English",
    image: "/image3.jpg",
    description:
      "Notes on startups and building the future.",
  },
  {
    id: 13,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Novel",
    price: 480,
    rating: 4.8,
    published: 1988,
    pages: 208,
    language: "English",
    image: "/image1.jpg",
    description:
      "A philosophical novel about following your dreams.",
  },
  {
    id: 14,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    price: 640,
    rating: 4.7,
    published: 2019,
    pages: 352,
    language: "English",
    image: "/image2.jpg",
    description:
      "A psychological thriller with an unforgettable ending.",
  },
  {
    id: 15,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    price: 820,
    rating: 4.8,
    published: 1988,
    pages: 256,
    language: "English",
    image: "/image3.jpg",
    description:
      "Explore the mysteries of space and time.",
  },
  {
    id: 16,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    price: 690,
    rating: 4.7,
    published: 2011,
    pages: 336,
    language: "English",
    image: "/image1.jpg",
    description:
      "Entrepreneurship through continuous innovation.",
  },
];
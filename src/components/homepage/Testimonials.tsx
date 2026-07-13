import { Quote, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  profession: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Book Enthusiast",
    rating: 5,
    review:
      "BookNest has completely changed the way I discover books. The recommendations are amazing and the interface is beautiful.",
  },
  {
    id: 2,
    name: "Michael Brown",
    profession: "Software Engineer",
    rating: 5,
    review:
      "I found every programming book I needed. The search and categories make everything incredibly easy to find.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    profession: "University Student",
    rating: 5,
    review:
      "An excellent platform with a huge collection of books. I highly recommend BookNest to every reader.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What Our Readers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Thousands of readers trust BookNest to discover their next favorite
            book.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >

              <Quote
                size={42}
                className="text-blue-600"
              />

              <div className="mt-5 flex">

                {[...Array(item.rating)].map((_, index) => (

                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-500"
                  />

                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-600">
                &quot;{item.review}&quot;
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.profession}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
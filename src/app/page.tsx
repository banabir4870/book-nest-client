import Categories from "@/components/homepage/Categories";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import Hero from "@/components/homepage/Hero";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <WhyChooseUs />
    </div>
  );
}

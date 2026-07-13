import Categories from "@/components/homepage/Categories";
import FAQ from "@/components/homepage/FAQ";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import Hero from "@/components/homepage/Hero";
import LatestBooks from "@/components/homepage/LatestBooks";
import Newsletter from "@/components/homepage/Newsletter";
import Statistics from "@/components/homepage/Statistics";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <WhyChooseUs />
      <Statistics />
      <LatestBooks />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </div>
  );
}

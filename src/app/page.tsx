import Hero from "@/components/sections/hero";
import Brands from "@/components/sections/brands";
import Products from "@/components/sections/products";
import Reports from "@/components/sections/reports";
import WhereWeAre from "@/components/sections/where-we-are";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brands />
      <Products />
      <Reports />
      <WhereWeAre />
    </main>
  );
}

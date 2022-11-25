import Hero from "../components/Hero";
import Gifts from "../components/Gifts";
import CategoryCard from "../components/CategoryCard";

export default function Homepage() {
  return (
    <section className=" ">
      <Hero />
      <div className="grid grid-cols-2 h-128 mt-24">
        <Gifts name="Women's collection" btnName="Shop now" />
        <Gifts name="Men's collecition" btnName="Shop now" />
      </div>
      <div className="flex justify-center mt-24">
        <CategoryCard name="Clothing" />
        <CategoryCard name="Sneaker" />
        <CategoryCard name="Sports" />
        <CategoryCard name="Accessories" />
      </div>
    </section>
  );
}

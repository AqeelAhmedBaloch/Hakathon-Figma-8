import Logo from "./components/LogoSection/Logo";
import FeaturedProducts from "./components/Featured-ExplorePages/FeaturedProducts";
import TopCategories from "./components/TopCategory/TopCategories";
import ExploreNew from "./components/Featured-ExplorePages/ExploreNew";
import OurProduct from "./components/OurProduct/OurProduct";
import HomePage1 from "./components/BestFurniture/page";

export default function Home() {
  return (
    <div>
      <HomePage1 />
      <Logo />
      <div className="mt-20 ml-40">
        <FeaturedProducts />
      </div>
      <div className="mt-8 ml-40">
        <TopCategories />
      </div>
      <div className="mt-8 ml-40">
        <ExploreNew />
      </div>
      <div className="mt-8 ml-40">
        <OurProduct />
      </div>
    </div>
  );
}

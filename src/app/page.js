import Hero from "@@/components/home/Hero";
import RecentProperty from "../components/RecentProperty/RecentProperty";
import TopDestination from "@@/components/home/TopDestination/TopDestination";
import Testimonials from "@@/components/home/Testimonials/Testimonials";
import products from "../../public/api/products";
import blogs from "../../public/api/blogs";
import Blog from "@@/components/home/Blog/Blog";



export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="h-full py-12 mb-6">
        <Hero  />
        
        <TopDestination />
        <Blog />
        <Testimonials blogs={blogs} />
        <RecentProperty />
      </div>
    </div>
  );
};

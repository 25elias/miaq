import BottomNav from "./BottomComponent/BottomNav";
import TopNav from "./TopComponent/TopNav";

const Footer = () => {
  return (
    <footer className="py-16 relative w-full h-full bg-black ">
      <div className="wrapper flex flex-col gap-8">
        <TopNav />

        <BottomNav />
      </div>
    </footer>
  );
};

export default Footer;

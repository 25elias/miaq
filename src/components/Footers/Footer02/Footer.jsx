import BottomNav from "./BottomComponent/BottomNav";
import TopNav from "./TopComponent/TopNav";

const Footer = () => {
  return (
    <footer className="py-16 relative w-full h-full bg-slate-400/70 ">
      <div className="wrapper">
        <TopNav />

        <BottomNav />
      </div>
    </footer>
  );
};

export default Footer;

import RecentProperty from "../components/RecentProperty/RecentProperty";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="h-full py-12 mb-6">
        <h1 className="text-center">Main Contents</h1>
        <RecentProperty />
      </div>
    </div>
  );
};

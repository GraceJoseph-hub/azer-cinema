import Hero from "@/components/hero/Hero";
// import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <div className="flex font-poppins pl-[1%]">
        {/* <Sidebar className="w-[15%] h-screen bg-dark-grey px-[2%] rounded-md border-l-8 border-l-indigo-900 overflow-y-scroll" /> */}
        <Hero className="" />
      </div>
    </div>
  );
}

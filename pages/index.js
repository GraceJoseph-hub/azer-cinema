import Hero from "@/components/hero/Hero";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <div className="flex font-krona">
        <Sidebar className="w-[25%] bg-dark-grey" />
        <Hero className="w-auto " />
      </div>
    </div>
  );
}

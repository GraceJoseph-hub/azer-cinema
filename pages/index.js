// _app.js or layout.js (if using App Router)
// import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS file to use FontAwesome icons
// import "../styles/globals.css"; // Your global styles

import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";
import MovieSchedule from "@/components/movieSchedule/MovieSchedule";

export default function Home() {
  return (
    <Layout className="">
      {/* <Hero /> */}
      <MovieSchedule />
      
    </Layout>
  );
}

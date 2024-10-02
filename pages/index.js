import Layout from "@/components/layout/Layout";
import MovieSchedule from "@/components/movieSchedule/MovieSchedule";
import MovieTrailer from "@/components/movieTrailer/MovieTrailer";
import About from "@/components/about/About";

export default function Home() {
  return (
    <Layout className="">
      <MovieSchedule />
      <MovieTrailer />
      <About />
    </Layout>
  );
}

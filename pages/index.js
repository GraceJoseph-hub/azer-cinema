import Layout from "@/components/layout/Layout";
import MovieSchedule from "@/components/movieSchedule/MovieSchedule";
import MovieTrailer from "@/components/movieTrailer/MovieTrailer";


export default function Home() {
  return (
    <Layout className="">
      <MovieSchedule />
      <MovieTrailer />
    </Layout>
  );
}

import Benefits from "@/components/benefits/Benefits";
import ForYou from "@/components/forYou/ForYou";
import Layout from "@/components/layout/Layout";
import MovieSchedule from "@/components/movieSchedule/MovieSchedule";
import MovieTrailer from "@/components/movieTrailer/MovieTrailer";


export default function Home() {
  return (
    <Layout>
      <MovieSchedule />
      <MovieTrailer />
      <Benefits />
      <ForYou />
    </Layout>
  );
}

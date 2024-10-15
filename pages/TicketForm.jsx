import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import moviesData from "@/components/movieSchedule/moviesData";

const TicketForm = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back()
  };
  return (
    <Layout>
      <div className="h-screen w-full bg-[url('/img/ticket2.jpg')] bg-no-repeat bg-cover bg-top"></div>
      <form>
        <button onClick={handleBack}>back</button>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Phone number</label>
          <input type="number" name="" id="" />
        </div>
      </form>
    </Layout>
  );
};

export default TicketForm;

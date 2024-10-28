import Layout from "@/components/layout/Layout";
import Image from "next/image";
import aboutUs from "../public/img/aboutUs.jpg";
import Contact from "@/pages/Contact";

const About = () => {
  return (
    <Layout>
      <div className="relative h-[50vh] w-full bg-[url('/img/bg8.png')] bg-fixed bg-cover bg-center">
        <div className="absolute xs:top-[50%] md:top-[40%] xs:left-[6%] md:left-[10%] xs:w-[40%] md:w-[30%]">
          <h1 className="xs:text-[1.2rem] md:text-[2.5rem] font-bold text-purple">
            About Us
          </h1>
          <p className="xs:text-[0.8rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, omnis
            in? Atque praesentium modi dignissimos?
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0"
        >
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,288L80,277.3C160,267,320,245,480,250.7C640,256,800,288,960,282.7C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="xs:px-[10%] md:px-[4%] xs:py-8 md:py-10 xs:flex xs:flex-col md:flex md:flex-row items-center gap-20">
        <Image src={aboutUs} className="w-full" />
        <div className="flex flex-col justify-center items-center xs:gap-5 md:gap-10 md:w-[90%]">
          <h2 className="text-[2rem] text-purple">Title</h2>
          <p>
            nesciunt facilis quia asperiores natus labore laboriosam quibusdam
            in doloribus maiores eveniet iure, temporibus id quaerat? Quaerat
            animi laudantium id, similique sequi eius sint illo quibusdam
            accusamus, maiores eaque consequatur incidunt delectus sed! Id
            veniam quae expedita dicta, molestiae quidem, ipsum quibusdam
            deleniti beatae non voluptatibus! Eius vero libero officia
            consequatur consequuntur assumenda esse, reiciendis culpa deleniti?
            Iure sunt velit ex repudiandae, ullam exercitationem error aliquid?
            Repellendus delectus esse ea porro, explicabo nisi?
          </p>
        </div>
      </div>
      <div className="">
        {/* <Contact /> */}
      </div>
    </Layout>
  );
};

export default About;

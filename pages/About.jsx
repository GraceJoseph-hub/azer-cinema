import Layout from "@/components/layout/Layout";
import Image from 'next/image'
import aboutUs from '../public/img/aboutUs.jpg'
import Contact from "@/components/contactInfo/Contact";
import aboutUs2 from '../public/img/aboutUs2.jpg'
import aboutUs3 from '../public/img/aboutUs3.jpg'


const About = () => {
  return (
    <Layout>
      <div className="relative h-screen w-full bg-[url('/img/bg8.png')] bg-fixed bg-cover bg-center">
        <div className="absolute top-[40%] left-[10%] w-[30%]">
          <h1 className="text-[2.5rem] font-bold text-purple">About Us</h1>
          <p>
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
      <div className="px-[4%] py-10 flex items-center gap-20">
        <Image src={aboutUs} />
        <div className="flex flex-col justify-center items-center gap-10">
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
        <Contact />
      </div>
    </Layout>
  );
};

export default About;

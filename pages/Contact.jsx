import ContactForm from "../components/contactInfo/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="xs:py-[30%] sm:py-[16%] lg:py-[14%] w-full px-[4%]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <h2 className="xs:text-[1rem] md:text-[2rem] text-purple">
              Contact Us
            </h2>
          </div>
          <p className="xs:text-center">
            Any questions or remarks? Just write us a message!
          </p>
          <ContactForm />
          <button className="border w-[49%] rounded-[2rem] mt-4 py-1 mb-[5rem] hover:text-white hover:bg-purple">
            Submit
          </button>
        </div>
      </div>
      <div className="relative bg-white w-full h-[150px]">
        <div className="absolute left-[3%] right-[3%] top-[-30%] bottom-[25%] bg-black border border-l-0 border-r-0 border-b-0 border-t-purple px-[6%] py-5 shadow-[2px_4px_12px_black]">
          <div className="absolute left-0 right-0 top-[-15%] flex items-center justify-around">
            <Link
              href="/"
              className="text-center pt-1 w-[40px] h-[40px]  rounded-full bg-white text-purple "
            >
              <FontAwesomeIcon icon={faUser} size="xl" />
            </Link>

            <Link
              href="/"
              className="text-center pt-1 w-[40px] h-[40px]  rounded-full bg-white text-purple "
            >
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </Link>

            <Link
              href="/"
              className="text-center pt-1 w-[40px] h-[40px]  rounded-full bg-white text-purple "
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} size="xl" />
            </Link>
          </div>
          <div className="flex justify-between mt-16 xs:mt-10">
            <div className="text-center xs:mr-8">
              <h3 className="font-bold text-purple xs:text-[0.8rem] md:text-[1rem]">About Azer</h3>
              <p className="xs:text-[0.5rem] md:text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center xs:mr-8">
              <h3 className="font-bold text-purple xs:text-[0.8rem] md:text-[1rem]">Phone</h3>
              <p className="xs:text-[0.5rem] md:text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-purple xs:text-[0.8rem] md:text-[1rem]">Office location</h3>
              <p className="xs:text-[0.5rem] md:text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

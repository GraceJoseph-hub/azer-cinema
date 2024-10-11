import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link";


const Contact = () => {
  return (
    <div>
      <div className="py-10 w-full px-[4%]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <h2 className="text-[2rem] text-purple">Contact Us</h2>
          </div>
          <p>Any questions or remarks? Just write us a message!</p>
          <ContactForm />
          <button className="border w-[49%] rounded-[2rem] mt-4 py-1 mb-[5rem] hover:text-white hover:bg-purple">
            Submit
          </button>
        </div>
      </div>
      <div className="relative bg-purple w-full h-[200px]">
        <div className="absolute left-[3%] right-[3%] top-[-30%] bottom-[25%] bg-black border border-l-0 border-r-0 border-b-0 border-t-purple px-[6%] py-5 shadow-[2px_4px_12px_black]">
          <div className="absolute left-0 right-0 top-[-15%] flex items-center justify-around">
            <Link
              href="/"
              className="text-center pt-1 w-[40px] h-[40px]  rounded-full bg-white text-purple "
            >
              <FontAwesomeIcon
                icon={faUser}
                size="xl"
              />
            </Link>

            <Link
              href="/"
              className="text-center pt-1 w-[40px] h-[40px]  rounded-full bg-white text-purple "
            >
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                // className="px-4 py-4 rounded-full bg-white text-purple"
              />
            </Link>

            <Link
              href="/"
              className="text-center pt-1 w-[40px] h-[40px]  rounded-full bg-white text-purple "
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="xl"
                // className="px-4 py-4 rounded-full bg-white text-purple"
              />
            </Link>
          </div>
          <div className="flex justify-between mt-16">
            <div className="text-center">
              <h3 className="font-bold">About Azer</h3>
              <p className="">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">Phone</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">Office location</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

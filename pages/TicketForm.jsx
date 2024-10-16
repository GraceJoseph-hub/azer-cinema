import { useRouter } from "next/router";

const TicketForm = ({ onProceed }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <div className="px-[5%] py-8">
        <button
          onClick={handleBack}
          className="border border-purple px-4 text-[1rem] rounded-md"
        >
          &#8592;
        </button>
        <form className=" flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="text-purple">
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="What's your name?"
              className="text-black text-sm px-4 py-1 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="text-purple">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email..."
              className="text-black text-sm px-4 py-1 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="text-purple">
              Phone number
            </label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Phone number..."
              className="text-black text-sm px-4 py-1 outline-none rounded-md"
            />
          </div>
          <button onClick={onProceed}>Proceed</button>
        </form>
      </div>
    </>
  );
};

export default TicketForm;

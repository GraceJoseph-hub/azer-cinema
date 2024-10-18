import { useRouter } from "next/router";
import { useState } from "react";

const TicketForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const router = useRouter();

  // Validate Name
  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Name is required");
      return false;
    } else {
      setNameError("");
      return true
    }
  }

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailError("Email is required")
      return false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true
    }
  }

  const validatePhoneNumber = () => {
    if (phoneNumber.length !== 11) {
      setPhoneError("Phone number must be 14 digits");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };


  const handleBack = () => {
    router.back();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleProceed = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhoneNumber();

    if (isNameValid && isEmailValid && isPhoneValid) {
      console.log("Form submitted successfully");
    }

    
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
        <form
          onSubmit={handleProceed}
          className=" flex flex-col justify-center items-center gap-5"
        >
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="text-purple">
              Name
            </label>
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              name=""
              id=""
              placeholder="What's your name?"
              className="text-black text-sm px-4 py-1 outline-none rounded-md"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="text-purple">
              Email
            </label>
            <input
              type="email"
              onChange={handleEmailChange}
              value={email}
              name=""
              id=""
              placeholder="Enter your email..."
              className="text-black text-sm px-4 py-1 outline-none rounded-md"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="text-purple">
              Phone number
            </label>
            <input
              type="number"
              onChange={handlePhoneNumChange}
              value={phoneNumber}
              name=""
              id=""
              placeholder="Phone number..."
              className="text-black text-sm px-4 py-1 outline-none rounded-md"
            />
            {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
          </div>
          <button
            // onClick={onProceed}
            className="border border-purple px-5 py-1 rounded-md "
          >
            Proceed
          </button>
        </form>
      </div>
    </>
  );
};

export default TicketForm;

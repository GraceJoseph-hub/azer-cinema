import React from 'react'

const ContactForm = () => {
  return (
    <form action="" className="xs:flex xs:flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email address..."
          className="xs:w-[15rem] sm:w-[20rem] md:w-[20rem] px-6 py-1 outline-none rounded-[2rem] text-purple"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your email name..."
          className="xs:w-[15rem] sm:w-[20rem] md:w-[20rem] px-6 py-1 outline-none rounded-[2rem] text-purple"
        />
      </div>
    </form>
  );
}

export default ContactForm
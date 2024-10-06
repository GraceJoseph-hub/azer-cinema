import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email address..."
            className="w-[20rem] px-6 py-1 outline-none rounded-[2rem] text-purple"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email name..."
            className="w-[20rem] px-6 py-1 outline-none rounded-[2rem] text-purple"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm
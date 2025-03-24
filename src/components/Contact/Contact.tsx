import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../Button";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="left w-1/2 h-auto flex flex-col gap-y-3 p-5">
        <div className="w-full h-auto flex flex-row">
          <div className="w-fit py-7 px-7 bg-[#00c0ff] rounded-full">
            <IoLocationSharp size={30} color="#ffffff" />
          </div>
          <div className="flex flex-col text-left gap-y-1 px-5 py-3">
            <h1 className="text-white font-semibold text-2xl ">Address</h1>
            <p className="text-[#b4afc6] font-semibold">
              20, somewhere in world
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row">
          <div className="w-fit py-7 px-7 bg-[#00c0ff] rounded-full">
            <IoLocationSharp size={30} color="#ffffff" />
          </div>
          <div className="flex flex-col text-left gap-y-1 px-5 py-3">
            <h1 className="text-white font-semibold text-2xl ">Address</h1>
            <p className="text-[#b4afc6] font-semibold">
              20, somewhere in world
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row">
          <div className="w-fit py-7 px-7 bg-[#00c0ff] rounded-full">
            <IoLocationSharp size={30} color="#ffffff" />
          </div>
          <div className="flex flex-col text-left gap-y-1 px-5 py-3">
            <h1 className="text-white font-semibold text-2xl ">Address</h1>
            <p className="text-[#b4afc6] font-semibold">
              20, somewhere in world
            </p>
          </div>
        </div>
      </div>

      <div className="left w-1/2 h-auto flex flex-col  ">
        <div className="w-full p-5 font-sans">
          <form className="flex flex-col gap-5 text-white">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  className="w-full p-3 border border-[#625A7C]  rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  className="w-full p-3 border border-[#625A7C] rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Your Phone"
                  className="w-full p-3 border border-[#625A7C] rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject"
                  className="w-full p-3 border border-[#625A7C] rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Write your message here"
                className="w-full p-3 border border-[#625A7C] rounded h-40 focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                required
              />
            </div>
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

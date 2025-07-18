import { useState } from "react";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "../Button";
import TextHeading from "../TextHeading";

function Contact() {
  const [formData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <div className="pt-10">
        <TextHeading heading="Contact" text="I want to hear from you" />
        <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-center mt-2">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 sm:w-[80%] w-[95%] h-auto justify-center items-center flex flex-col gap-y-3 p-5">
            {/* Location */}
            <div className="w-full h-auto flex flex-row">
              <div className="w-fit sm:py-7 sm:px-7 p-3 bg-[#00c0ff] rounded-full">
                <IoLocationSharp size={30} color="#ffffff" />
              </div>
              <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-2">
                <h1 className="text-white font-semibold sm:text-2xl text-lg">Location</h1>
                <p className="text-[#b4afc6] font-semibold">
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="w-full h-auto flex flex-row">
              <div className="w-fit sm:py-7 sm:px-7 p-3 bg-[#00c0ff] rounded-full">
                <MdEmail size={30} color="#ffffff" />
              </div>
              <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-2">
                <h1 className="text-white font-semibold sm:text-2xl text-lg">Email</h1>
                <p className="text-[#b4afc6] font-semibold">
                  adeel8128377@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="w-full h-auto flex flex-row">
              <div className="w-fit sm:py-7 sm:px-7 p-3 bg-[#00c0ff] rounded-full">
                <IoCallSharp size={30} color="#ffffff" />
              </div>
              <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-2">
                <h1 className="text-white font-semibold sm:text-2xl text-lg">Phone</h1>
                <p className="text-[#b4afc6] font-semibold">
                  +92 336 554488
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 sm:w-[90%] w-[95%] h-auto flex flex-col justify-center items-center">
            <div className="w-full p-5 font-sans">
              <form className="flex flex-col gap-5 text-white">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Your Name"
                      className="w-full p-3 border border-[#625A7C] rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
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
      </div>
    </>
  );
}

export default Contact;

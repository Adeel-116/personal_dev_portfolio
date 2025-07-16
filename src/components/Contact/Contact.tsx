import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../Button";
import TextHeading from "../TextHeading";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  console.log(setFormData)
  return ( 
    <>

    <div className="py-30">
 
      <TextHeading heading="Contact" text="I want to hear from you" />
    <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-center mt-2">
    
      <div className="left lg:w-1/2 sm:w-[80%] w-[95%] h-auto justify-center items-center flex flex-col gap-y-3 p-5">
        <div className="w-full h-auto flex flex-row">
          <div className="w-fit sm:py-7 sm:px-7 p-3 bg-[#00c0ff] rounded-full">
            <IoLocationSharp size={30} color="#ffffff" />
          </div>
          <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-2">
            <h1 className="text-white font-semibold sm:text-2xl text-lg">Address</h1>
            <p className="text-[#b4afc6] font-semibold">
              20, somewhere in world
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row">
          <div className="w-fit sm:py-7 sm:px-7 p-3 bg-[#00c0ff] rounded-full">
            <IoLocationSharp size={30} color="#ffffff" />
          </div>
          <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-2">
            <h1 className="text-white font-semibold sm:text-2xl text-lg ">Address</h1>
            <p className="text-[#b4afc6] font-semibold">
              20, somewhere in world
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row">
          <div className="w-fit sm:py-7 sm:px-7 p-3 bg-[#00c0ff] rounded-full">
            <IoLocationSharp size={30} color="#ffffff" />
          </div>
          <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-2">
            <h1 className="text-white font-semibold sm:text-2xl text-lg">Address</h1>
            <p className="text-[#b4afc6] font-semibold">
              20, somewhere in world
            </p>
          </div>
        </div>
      </div>

      <div className="left lg:w-1/2 sm:w-[90%] w-[95%] h-auto flex flex-col justify-center items-center">
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

            <div className="flex flex-col sm:flex-row gap-5 ">
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

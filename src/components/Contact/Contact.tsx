import { useState } from "react";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import TextHeading from "../TextHeading";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Contact Info Array
  const contactInfo = [
    {
      icon: <IoLocationSharp size={28} color="#ffffff" />,
      title: "Location",
      value: "Karachi, Pakistan",
      link: "https://www.google.com/maps/place/Karachi,+Pakistan",
    },
    {
      icon: <MdEmail size={28} color="#ffffff" />,
      title: "Email",
      value: "adeel8128377@gmail.com",
      link: "mailto:adeel8128377@gmail.com",

    },
    {
      icon: <IoCallSharp size={28} color="#ffffff" />,
      title: "Phone",
      value: "+92 342 2815470",
      link: "tel:+923422815470",
    },
  ];

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("https://email-integration-5maq.vercel.app/api/email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("✅ Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSuccess("❌ Failed to send email. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pt-15">
        <TextHeading heading="Contact" text="I want to hear from you" />
        <div className="w-full h-auto flex lg:flex-row flex-col mt-2">

          <div className="lg:w-[40%] sm:w-[80%] w-[95%] h-auto flex flex-col gap-y-3 p-5">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                rel="noopener noreferrer"
                className="w-full h-auto flex flex-row items-center group cursor-pointer"
              >
                <div className="w-fit sm:py-5 sm:px-5 p-3 bg-[#00c0ff] rounded-full transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left sm:gap-y-1 sm:px-5 sm:py-3 px-3">
                  <h1 className="text-white font-semibold sm:text-2xl text-lg">
                    {item.title}
                  </h1>
                  <p className="text-[#b4afc6] font-semibold group-hover:text-[#00c0ff]">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-[60%] sm:w-[90%] w-[95%] h-auto flex flex-col justify-center items-center">
            <div className="w-full sm:p-5 p-4 font-sans">
              <form
                className="flex flex-col gap-5 text-white"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full p-3 border border-[#625A7C] rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full p-3 border border-[#625A7C] rounded focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    className="w-full p-3 border border-[#625A7C] rounded h-40 focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                    required
                  />
                </div>

                {/* ✅ Button shows loading */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`p-3 rounded-full bg-[#00c0ff] text-white font-semibold transition-all ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00a8e0]"
                    }`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {/* Success Message */}
                {success && <p className="text-green-500">{success}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

import Button from "../Button";
import TextHeading from "../TextHeading";
import AboutImage from "../../assets/about2.webp";

function AboutUS() {
  return (
    <div className="text-center w-full">
      <TextHeading
        heading="About Me"
        text={
          <>
            Passionate Developer <br />
            Who Loves to Code
          </>
        }
      />

      <div className="flex py-5 flex-col lg:flex-row w-full">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="About Me"
            className="lg:w-[90%] 2xl:w-[75%] lg:flex md:hidden w-[80%] rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 md:py-0 py-5 flex flex-col justify-center items-center lg:items-start gap-y-5 text-white text-center lg:text-left px-5 2xl:pl-20">
          <div className="text-[16px] xl:text-[17px] 2xl:text-[18px] leading-relaxed max-w-[90%] lg:w-auto">
            <p className="mb-4">
              I’m a <strong className="text-[#00c0ff]">Full-Stack Developer</strong> passionate about building
              <strong> modern websites</strong>, <strong>scalable web apps</strong>, and
              <strong> cross-platform mobile applications</strong> using the latest technologies.
            </p>

            <p className="mb-4">
              My focus is on delivering <strong>clean UI/UX</strong>, high performance, and
              <strong> future-ready digital solutions</strong> that help brands grow online.
            </p>

            <p className="mb-4">
              <strong className="text-[#00c0ff]">Tech Stack:</strong> React.js, Next.js, Tailwind CSS,
              Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, React Native, Flutter.
            </p>

            <p>
              I enjoy solving real-world problems, staying up-to-date with new technologies, and
              collaborating as a <strong>Freelancer</strong> to turn ideas into powerful digital products. 🚀
            </p>
          </div>

          <div className="w-fit">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;

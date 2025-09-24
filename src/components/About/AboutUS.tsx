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
              I'm{" "}
              <span className="text-[#00c0ff] font-semibold">
                Muhammad Adeel
              </span>
              , a Final Year Computer Science student and{" "}
              <strong>Full-Stack Developer</strong> specializing in{" "}
              <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
              <strong>React Native</strong>.
            </p>

            <p className="mb-4">
              With 4+ years of experience, I create responsive websites and
              cross-platform mobile apps with a focus on clean UI, performance,
              and scalability.
            </p>

            <p className="mb-4">
              <strong className="text-[#00c0ff]">Tech Stack:</strong> React.js,
              Next.js, Tailwind, Node.js, Express.js, REST APIs, MongoDB,
              PostgreSQL, React Native, Flutter.
            </p>

            <p>
              I love building real-world solutions and constantly learning new
              technologies to grow as a developer.
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

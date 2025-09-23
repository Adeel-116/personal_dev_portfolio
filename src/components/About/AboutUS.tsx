import Button from "../Button";
import TextHeading from "../TextHeading";

function AboutUS() {
  return (
    <div className="w-full h-auto text-center">
      <TextHeading
        heading="About Me"
        text={
          <>
            A Passionate Developer <br />
            Who Loves to Code
          </>
        }
      />

      <div className="w-full flex lg:flex-row flex-col">
        <div className="relative lg:w-1/2 w-full h-auto p-4 flex flex-col gap-y-5 items-center">
         
        </div>

        <div className="lg:w-1/2 w-full h-auto 2xl:pl-20 py-4 flex flex-col lg:items-start items-center justify-center gap-y-5 lg:text-left text-center">
          <div className="lg:text-left text-center lg:w-auto w-[80%] text-[#9D96B6] text-[16px] sm:text-[18px] leading-relaxed">
            <p className="mb-4">
              I'm{" "}
              <span className="text-[#00c0ff] font-semibold">
                Muhammad Adeel
              </span>
              , a Final Year Computer Science student and experienced{" "}
              <strong>Full-Stack Developer</strong> specializing in{" "}
              <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
              <strong>React Native</strong>.
            </p>

            <p className="mb-4">
              With 4+ years in software development, I build responsive web apps
              and cross-platform mobile applications. My focus is on
              performance, clean UI/UX, and scalable architecture.
            </p>

            <p className="mb-4">
              <strong>Tech Stack:</strong>
              <br />
              <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS,
              TypeScript
              <br />
              <strong>Backend:</strong> Node.js, Express.js, REST APIs
              <br />
              <strong>Databases:</strong> MongoDB, PostgreSQL
              <br />
              <strong>Mobile:</strong> React Native, Flutter, basic Android
              (Java/XML)
            </p>

            <p>
              I'm passionate about building real-world solutions and
              continuously learning new technologies to grow as a developer.
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

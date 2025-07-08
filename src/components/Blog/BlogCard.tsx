import { useRef } from "react";
import { useTransform } from "../ContextAPI/TransformContext"; // Import the context hook
import blogPicture from "../../assets/blog.avif";

// Define prop types for BlogCard
interface BlogCardProps {
  className: string;
  id: string; // Define the id as a string
}

function BlogCard({ className, id }: BlogCardProps) {
  const { transform, handleMouseMove, handleMouseLeave } = useTransform(); // Access the global state
  const cardRef = useRef<HTMLDivElement>(null);

  // Get the transform values for the current card using its id
  const currentTransform = transform[id] || { rotateX: 0, rotateY: 0 };

  return (
    <div
      ref={cardRef}
      className={`${className} h-auto flex flex-col gap-y-6 overflow-hidden bg-[#3A2B71] rounded-2xl`}
      style={{
        transform: `perspective(1000px) rotateX(${currentTransform.rotateX}deg) rotateY(${currentTransform.rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={(e) => handleMouseMove(e, id)} // Pass the card id
      onMouseLeave={() => handleMouseLeave(id)} // Pass the card id
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="bloImage">
          <img src={blogPicture} alt="" className="lg:w-full md:w-full" />
        </div>
        <div className="w-full px-10 py-7">
          <div className="flex gap-x-4">
            <p className="font-normal text-[#00c0ff]">Branding</p>
            <p className="text-[#b4afc6]">August 27, 2022</p>
          </div>
          <h3 className="text-left text-white font-semibold text-2xl mt-3">
            How good designers can collaborate better
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

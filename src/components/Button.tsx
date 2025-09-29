import { useEffect, useState } from "react";

export default function Button({
  buttonTile = "Get Connected",
  onClick,
}: {
  buttonTile?: string;
  onClick?: () => void;
}) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(false);
  }, []);

  return (
    <button
      className="w-fit relative rounded-full bg-[#00c0ff] overflow-hidden sm:px-9 sm:py-3 px-5 py-3 group cursor-pointer"
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      onClick={onClick}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>

      {/* Text */}
      <div className="relative z-10">
        <p
          className="font-medium 2xl:text-[0.9rem] text-[0.9rem]"
          style={{ color: animation ? "black" : "#ffffff" }}
        >
          {buttonTile}
        </p>
      </div>
    </button>
  );
}

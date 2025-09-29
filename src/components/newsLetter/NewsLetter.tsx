import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e:any) => {
    e.preventDefault();
    setError("");

 
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setIsLoading(true);

    try {
  
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSent(true);
      setEmail(""); 

      setTimeout(() => setIsSent(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='lg:w-full sm:w-[90%] w-[95%] h-auto lg:p-20 sm:p-10 p-5 flex lg:flex-row flex-col justify-center items-center sm:bg-[#432D92] sm:rounded-2xl'>
      
      {/* Text Section */}
      <div className='lg:w-1/2 w-full flex flex-col'>
        <div className='w-full flex flex-col gap-y-2 text-left'>
          <h3 className='text-[#00c0ff] sm:text-2xl text-lg font-normal'>Subscribe Now</h3>
          <h1 className='text-white font-semibold sm:text-5xl text-3xl'>Get My Newsletter</h1>
          <p className='text-[#b4afc6] sm:text-lg text-sm'>Get latest news, tips and tricks in your inbox</p>
        </div>
      </div>

      {/* Input Section */}
      <div className='lg:w-1/2 w-full lg:mt-0 sm:mt-5 mt-3'>
        <form className='relative w-full flex' onSubmit={handleSubscribe}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Here"
            className="sm:w-2/2 w-full sm:px-7 text-sm sm:py-6 p-3 border bg-white sm:rounded-2xl rounded-sm outline-none focus:ring-2 focus:ring-[#00c0ff]"
            required
          />
          <button
            type="submit"
            className='absolute sm:w-1/4 w-[30%] h-full overflow-hidden bg-[#00c0ff] right-0 flex justify-center items-center sm:rounded-r-2xl rounded-r-sm'
            disabled={isLoading || isSent}
          >
            <span className='text-white text-sm font-semibold'>
              {isLoading ? "Loading..." : isSent ? "Sent ✓" : "Send Now"}
            </span>
          </button>
        </form>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>

    </div>
  );
}

export default NewsLetter;

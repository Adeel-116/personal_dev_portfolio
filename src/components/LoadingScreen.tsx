function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1E1345] via-[#2A1B5C] to-[#1E1345] flex flex-col justify-center items-center z-[1001] overflow-hidden">
      {/* Main content container */}
      <div className="flex flex-col items-center gap-8 px-4">
       
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00C0FF] animate-shimmer bg-[length:200%_100%]">
            Loading Portfolio
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white animate-fade-in-up">
            Loading your experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 md:w-80 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00C0FF] via-white to-[#00C0FF] rounded-full animate-loading-bar bg-[length:200%_100%]"></div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-[#00C0FF] rounded-full animate-bounce-delay-0"></div>
          <div className="w-2 h-2 bg-[#00C0FF] rounded-full animate-bounce-delay-1"></div>
          <div className="w-2 h-2 bg-[#00C0FF] rounded-full animate-bounce-delay-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse-scale {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }

        .animate-bounce-delay-0 {
          animation: bounce-custom 1.4s ease-in-out infinite;
          animation-delay: 0s;
        }

        .animate-bounce-delay-1 {
          animation: bounce-custom 1.4s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .animate-bounce-delay-2 {
          animation: bounce-custom 1.4s ease-in-out infinite;
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
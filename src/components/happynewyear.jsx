import { useEffect } from "react";
import confetti from "canvas-confetti";

const HappyNewYear = () => {
  const launchFireworks = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  useEffect(() => {
    launchFireworks();
  }, []);

  return (
    <div className="relative w-full h-screen bg-space-gradient flex flex-col justify-center items-center">
      {/* Elemen Bulan */}
      <div className="moon absolute top-5 left-5 md:w-36 md:h-36 w-24 h-24 bg-gray-300 rounded-full shadow-lg"></div>

      {/* Responsif Judul */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 animate-bounce text-center">
        Happy New Year 2025!
      </h1>

      {/* Responsif Paragraf */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white opacity-80 animate-fade-in text-center">
        Jangan Lupa Tetap ngopi & Ngudud ☕🚬
      </p>

      {/* Responsif Tombol */}
      <button
        onClick={launchFireworks}
        className="mt-8 px-4 sm:px-6 md:px-8 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-purple-300 animate-pulse"
      >
        Celebrate Now!
      </button>
    </div>
  );
};

export default HappyNewYear;

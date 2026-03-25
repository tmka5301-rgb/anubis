import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-[#0a0a0a] min-h-[400px] flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background-д байгаа диагональ зураас (Overlay) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #333 25%, transparent 25%, transparent 50%, #333 50%, #333 75%, transparent 75%, transparent)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="relative flex flex-col items-center">
        {/* "THE" текст */}
        <h2 className="text-yellow-400 text-5xl md:text-7xl font-black italic tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">
          THE
        </h2>

        {/* "GUARDIANS" текст */}
        <h1 className="text-yellow-400 text-7xl md:text-9xl font-black italic tracking-tighter leading-none drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">
          GUARDIANS
        </h1>

        {/* Доод талын зураас болон "ELITE ROSTER 2024" */}
        <div className="flex items-center w-full max-w-2xl mt-4">
          {/* Зүүн талын зураас */}
          <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent to-yellow-400"></div>

          {/* Текст */}
          <span className="px-4 text-gray-400 text-xs md:text-sm font-bold tracking-[0.5em] whitespace-nowrap uppercase">
            Elite Roster 2024
          </span>

          {/* Баруун талын зураас */}
          <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent to-yellow-400"></div>
        </div>
      </div>
    </div>
  );
};

import { players } from "@/constants/Eroster";
import React from "react";

interface PlayerStats {
  ppg: string;
  ast: string;
  reb: string;
}

interface PlayerCardProps {
  name: string;
  position: string;
  number: string;
  image: string;
  stats: PlayerStats;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  position,
  number,
  image,
  stats,
}) => {
  return (
    <div className="w-[300px] bg-[#111111] rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
      {/* Дээд хэсэг: Зураг болон Нэр */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-auto h-auto object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        {/* Градиент эффект */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
        {/* Нэр болон Байрлал */}
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-yellow-400 text-2xl font-black italic uppercase leading-none tracking-tighter break-words">
            {name}
          </h2>
          <div className="mt-4 flex items-center gap-2 border-t border-gray-700 pt-2">
            <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
              {position} / {number}
            </span>
          </div>
        </div>
      </div>

      {/* Доод хэсэг: Үзүүлэлтүүд */}
      <div className="p-6 bg-[#181818]">
        <p className="text-yellow-400 text-xl font-bold pb-2">
          Last game Statistic:
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
              Ppg
            </span>
            <span className="text-yellow-400 text-xl font-bold">
              {stats.ppg}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
              Ast
            </span>
            <span className="text-yellow-400 text-xl font-bold">
              {stats.ast}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
              Reb
            </span>
            <span className="text-yellow-400 text-xl font-bold">
              {stats.reb}
            </span>
          </div>
        </div>

        {/* Товчлуур */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 text-[10px] tracking-[0.2em] uppercase transition-colors">
          View all Stats
        </button>
      </div>
    </div>
  );
};

// Жишээ болгож 3 карт ашиглах хэсэг
export default function Roster() {
  return (
    <div className="bg-black p-10 flex flex-wrap gap-10 justify-center">
      {players
        .map((p, index) => <PlayerCard key={index} {...p} />)
        .slice(0, 15)}
    </div>
  );
}

// import React from "react";

// const FixtureCard = ({
//   league,
//   team1,
//   team2,
//   time,
// }: {
//   league: string;
//   team1: string;
//   team2: string;
//   time?: string;
// }) => (
//   <div className="flex flex-col items-center mb-8 w-full max-w-2xl">
//     {/* League Header */}
//     <div className="bg-gradient-to-b from-zinc-800 to-black px-8 py-1 skew-x-[-20deg] border-t border-zinc-700 shadow-lg mb-1">
//       <span className="text-white text-[10px] md:text-xs font-black tracking-widest uppercase italic skew-x-[20deg] block">
//         {league}
//       </span>
//     </div>

//     {/* Match Row */}
//     <div className="flex items-center justify-center w-full gap-1 md:gap-3">
//       {/* Team 1 */}
//       <div className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-400 py-3 md:py-4 skew-x-[-20deg] shadow-[0_0_15px_rgba(234,179,8,0.3)] relative overflow-hidden group">
//         <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
//         <span className="text-black font-black text-center block text-xs md:text-lg italic skew-x-[20deg] uppercase tracking-tight">
//           {team1}
//         </span>
//       </div>
//       <div>55</div>
//       {/* VS Badge */}
//       <div className="bg-zinc-900 border-2 border-zinc-700 p-2 md:p-3 skew-x-[-10deg] shadow-xl z-10">
//         <span className="text-white font-black italic text-sm md:text-xl skew-x-[10deg] block drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
//           VS
//         </span>
//       </div>
//       <div>44</div>

//       {/* Team 2 */}
//       <div className="flex-1 bg-gradient-to-l from-yellow-500 to-yellow-400 py-3 md:py-4 skew-x-[-20deg] shadow-[0_0_15px_rgba(234,179,8,0.3)] relative overflow-hidden group">
//         <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
//         <span className="text-black font-black text-center block text-xs md:text-lg italic skew-x-[20deg] uppercase tracking-tight">
//           {team2}
//         </span>
//       </div>
//     </div>

//     {/* Time / Venue Footer */}
//     {time && (
//       <div className="bg-zinc-900/80 px-6 py-1 mt-1 skew-x-[-20deg] border-b border-zinc-700">
//         <span className="text-yellow-400 text-[10px] md:text-xs font-bold italic skew-x-[20deg] block tracking-tighter shadow-yellow-500/50 drop-shadow-md">
//           {time}
//         </span>
//       </div>
//     )}
//   </div>
// );

// export const FixturesBoard: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center py-12 px-4 font-sans">
//       {/* Page Title (Optional) */}
//       <h1 className="text-yellow-400 text-4xl font-black italic mb-12 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">
//         Match Fixtures
//       </h1>

//       <FixtureCard
//         league="Crossover league"
//         team1="Anubis"
//         team2="Chanmari FC"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Electric Veng"
//         team2="Chawnpui"
//       />

//       <FixtureCard
//         league="Crossover league"
//         team1="Panjim Footballers"
//         team2="Velsao SCC"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Corps of Signals"
//         team2="Vasco Sports Club"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Anubis"
//         team2="Vasco Sports Club"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Anubis"
//         team2="Chanmari FC"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Anubis"
//         team2="Chanmari FC"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Anubis"
//         team2="Chanmari FC"
//       />
//       <FixtureCard
//         league="Crossover league"
//         team1="Anubis"
//         team2="Chanmari FC"
//       />
//     </div>
//   );
// };

// export default FixturesBoard;

import { matches } from "@/constants/Efixture";
import React from "react";

const FixtureRow = ({
  team1,
  team2,
  score1,
  score2,
}: {
  team1: string;
  team2: string;
  score1: string;
  score2: string;
}) => (
  <div className="flex flex-col items-center mb-6 w-full max-w-4xl">
    {/* League Header */}
    <div className="bg-zinc-900 border-b border-zinc-700 px-6 py-1 skew-x-[-15deg] z-20">
      <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase italic skew-x-[15deg] block">
        Crossover League
      </span>
    </div>

    {/* Match Content */}
    <div className="flex items-center justify-center w-full -mt-1">
      {/* Team 1 Card */}
      <div className="flex-1 bg-yellow-500 py-4 skew-x-[-15deg] shadow-[0_0_20px_rgba(234,179,8,0.2)]">
        <span className="text-black font-black text-center block text-sm md:text-xl italic skew-x-[15deg] uppercase">
          {team1}
        </span>
      </div>

      {/* Center Score Section */}
      <div className="flex items-center bg-[#111] px-4 py-2 border-y border-zinc-800 z-10 mx-[-10px]">
        <span className="text-white font-bold text-lg italic pr-4">
          {score1}
        </span>

        <div className="bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 p-2 shadow-2xl">
          <span className="text-white font-black italic text-lg block drop-shadow-md">
            VS
          </span>
        </div>

        <span className="text-white font-bold text-lg italic pl-4">
          {score2}
        </span>
      </div>

      {/* Team 2 Card */}
      <div className="flex-1 bg-yellow-500 py-4 skew-x-[-15deg] shadow-[0_0_20px_rgba(234,179,8,0.2)]">
        <span className="text-black font-black text-center block text-sm md:text-xl italic skew-x-[15deg] uppercase">
          {team2}
        </span>
      </div>
    </div>
  </div>
);

const MatchFixtures: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-16 px-4 font-sans">
      {/* Main Title */}
      <h1 className="text-yellow-500 text-4xl md:text-5xl font-black italic mb-16 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
        Match Fixtures
      </h1>

      <div className="w-full flex flex-col items-center">
        {matches
          .map((match, index) => (
            <FixtureRow
              key={index}
              team1={match.team1}
              team2={match.team2}
              score1={match.score1}
              score2={match.score2}
            />
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default MatchFixtures;

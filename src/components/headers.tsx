import React from "react";
import { User, ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  const navItems = [
    { name: "ROSTER", active: true },
    { name: "FIXTURE", active: false },
    { name: "STATS", active: false },
    { name: "HIGHLIGHT", active: false },
    // { name: "STORE", active: false },
  ];

  return (
    <nav className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between font-sans">
      {/* Logo хэсэг */}
      <div className="flex items-center">
        <span className="text-yellow-400 text-2xl font-black italic tracking-tighter">
          ANUBIS
        </span>
      </div>

      {/* Цэсний хэсэг (Дунд) */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <div key={item.name} className="relative group cursor-pointer">
            <span
              className={`text-sm font-bold tracking-widest ${
                item.active
                  ? "text-yellow-400"
                  : "text-gray-400 hover:text-white"
              } transition-colors uppercase`}
            >
              {item.name}
            </span>
            {/* Идэвхтэй байгаа цэсний доорх зураас */}
            {item.active && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400" />
            )}
          </div>
        ))}
      </div>

      {/* Баруун талын иконгууд */}
      <div className="flex items-center space-x-6 text-yellow-400">
        <button className="hover:opacity-80 transition-opacity">
          <User size={22} strokeWidth={2.5} />
        </button>
        {/* <button className="hover:opacity-80 transition-opacity">
          <ShoppingCart size={22} strokeWidth={2.5} />
        </button> */}
      </div>
    </nav>
  );
};

export default Header;

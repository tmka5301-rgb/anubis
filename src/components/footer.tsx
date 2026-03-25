import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Contact",
    "Careers",
    "Media Kit",
  ];

  return (
    <footer className="bg-[#111111] text-white py-16 px-4 flex flex-col items-center border-t border-gray-900">
      {/* Лого хэсэг */}
      <div className="mb-10">
        <h2 className="text-yellow-400 text-4xl font-black italic tracking-tighter uppercase">
          ANUBIS
        </h2>
      </div>

      {/* Туслах цэснүүд */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
        {footerLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Зохиогчийн эрх */}
      <div className="text-center">
        <p className="text-gray-600 text-[9px] md:text-[10px] tracking-[0.15em] uppercase">
          © 2024 ANUBIS BASKETBALL OPERATING LLC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

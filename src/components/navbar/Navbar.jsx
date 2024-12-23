import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={menuOpen?"text-white px-6 py-3 flex justify-between items-center mb-40":"text-white px-6 py-3 flex justify-between items-center "}>
      {/* Logo */}
      <div
        className={`font-bold text-3xl ${
          menuOpen ? "absolute left-1/2 transform -translate-x-1/2 top-4" : ""
        }`}
      >
        رحلاتي <span className="text-primary">.</span>
      </div>

      {/* Burger Menu Icon */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`${
          menuOpen ? "block " : "hidden"
        } lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto bg-transparent lg:bg-transparent z-10 `}
      >
        <ul className="flex flex-col lg:flex-row gap-6 text-xl font-semibold text-center lg:text-left py-4 lg:py-0  pl-5">
          <li>الرحلات</li>
          <li>الخدمات</li>
          <li>الاسعار</li>
          <li>آراء العملاء</li>
          <li>اتصل بنا</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div
        className={`${
          menuOpen ? "hidden lg:flex mt-4 lg:mt-0" : "hidden lg:flex"
        } flex-col lg:flex-row gap-2 items-center`}
      >
        <p className="text-xl font-semibold">يوتيوب</p>
        <button className="text-black bg-white px-4 py-1 rounded-xl flex items-center justify-center lg ">
          <BiSolidRightArrow className="text-sm" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

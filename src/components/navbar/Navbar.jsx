import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav
      className={`text-black px-6 py-3 flex justify-between items-center  fixed w-full z-50 ${
        menuOpen ? "mb-40" : ""
      }`}
    >
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
          menuOpen ? "block" : "hidden"
        } lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto bg-transparent lg:bg-transparent z-10`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 text-xl font-semibold text-center lg:text-left py-4 lg:py-0 pl-5">
          <li>
            <button
              onClick={() => handleScroll("Trips")}
              className="cursor-pointer"
            >
              الرحلات
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Trips2")}
              className="cursor-pointer"
            >
              الخدمات
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Price")}
              className="cursor-pointer"
            >
              الاسعار
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Comments")}
              className="cursor-pointer"
            >
              آراء العملاء
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Comunicate")}
              className="cursor-pointer"
            >
              اتصل بنا
            </button>
          </li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div
        className={`${
          menuOpen ? "hidden lg:flex mt-4 lg:mt-0" : "hidden lg:flex"
        } flex-col lg:flex-row gap-2 items-center`}
      >
        <p className="text-xl font-semibold">يوتيوب</p>
        <button className="text-white bg-black px-4 py-1 rounded-xl flex items-center justify-center lg">
          <BiSolidRightArrow className="text-sm" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

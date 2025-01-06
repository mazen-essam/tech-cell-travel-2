import React, { useState, useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scrolling direction on large screens only
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav
      className={`text-white px-6 py-3 flex justify-between items-center fixed w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible || window.innerWidth < 1024 ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      {/* Logo */}
      <div
        className={`font-bold text-3xl ${
          menuOpen ? "absolute left-1/2 transform -translate-x-1/2 top-4" : ""
        }`}
      >
        <button
          style={{ textShadow: "2px 2px 4px #000000" }}
          onClick={() => handleScroll("Header")}
        >
          رحلاتي <span className="text-primary">.</span>
        </button>
      </div>

      {/* Burger Menu Icon */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto  lg:bg-transparent z-10`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 text-xl font-semibold text-center lg:text-left py-4 lg:py-0 pl-5">
          <li>
            <button
              onClick={() => handleScroll("Trips")}
              className="cursor-pointer"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              الرحلات
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Trips2")}
              className="cursor-pointer"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              الخدمات
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Price")}
              className="cursor-pointer"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              الاسعار
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Comments")}
              className="cursor-pointer"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              آراء العملاء
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Comunicate")}
              className="cursor-pointer"
              style={{ textShadow: "2px 2px 4px #000000" }}
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
        <p
          className="text-xl font-semibold"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          يوتيوب
        </p>
        <button className="text-white bg-black px-4 py-1 rounded-xl flex items-center justify-center lg">
          <BiSolidRightArrow className="text-sm" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

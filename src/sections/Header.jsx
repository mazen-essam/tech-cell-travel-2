import React from "react";
import Navbar from "../components/navbar/Navbar";
import arrow from "../assets/Designer.png";
import bgImg from "../assets/e0cbe4be56a85ef0adaf0a4338ca0a9a.jpeg";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { motion } from "framer-motion";

function Header() {
  return (
    <section
      className=" font-sans"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" ,backgroundRepeat:"no-repeat"}}
    >
      <div>
        <Navbar />
      </div>
      <div className="text-center text-white  pt-28 pb-32">
        <h1 className="text-5xl mt-12 mb-16 font-bold">سافر معنا إلى العالم</h1>
        <p className="font-medium text-lg mb-16">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان وبخدمات مخصصة لك
          ولعائلتك
        </p>
        <button className="bg-primary text-black  px-16 py-2 rounded-xl font-semibold inline-flex items-center gap-2">
          {" "}
          <p className="inline-block "> احجز الان</p>
          <span className="inline-block bg-white p-1 rounded-full">
            <MdKeyboardArrowLeft className=" " />
          </span>
        </button>
      </div>
      <div className="text-center text-white pb-24 relative">
        <div className="absolute md:block hidden xl:left-[40%] lg:left-[35%] left-[25%] top-[-5rem]">
          <img src={arrow} alt="" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="font-medium text-lg mb-10">تابع للاسفل</p>

          <a
            href="#Trips"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="w-[35px] h-[64px] rounded-3xl bg-white flex justify-center items-start p-2 ">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-black mb-1"
              />
              {/* <div className="w-3 h-3 rounded-full bg-secondary mb-1" /> */}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;

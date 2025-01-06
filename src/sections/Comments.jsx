import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { fetchTes } from "../api/axiosconfig";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Comments() {
  const [items, setItems] = useState([]);
  const sliderRef = useRef(null); // Ref for the slider

  // Fetching the data
  useEffect(() => {
    const fetchTest = async () => {
      const response = await fetchTes();
      const data = await response.data;
      setItems(data);
    };
    fetchTest();
  }, []);

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    rtl: true,
    nextArrow: false, // Remove custom arrows (we'll use external buttons)
    prevArrow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-32" id="Comments">
      <div className="px-8 text-center">
        <p className="text-[#A5A5A5] font-bold text-2xl">قالوا عنا</p>
        <h2 className="font-bold text-4xl">آراء مجموعة من عملائنا</h2>
      </div>

      {/* Carousel */}
      <div className="xl:py-12 xl:px-24 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8 mt-20">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <div key={item.id} className="p-4" dir="rtl">
              <div className="bg-[#F1EFFD] p-6 rounded-lg">
                <div className="flex items-center gap-4 my-8">
                  <img src={item.avatar} alt={item.name} className="w-6 h-6" />
                  <p className="text-xl font-bold">{item.name}</p>
                </div>
                <p>{item.msg}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* Navigation Arrows below the slider */}
        <div className="flex justify-center mt-4 gap-4">
          
          <button
            onClick={() => sliderRef.current.slickNext()} // Go to the next slide
            className="p-1 bg-[#7755EE] rounded-full text-white ml-4"
          >
            <MdKeyboardArrowRight className="text-3xl" />
          </button>
          <button
            onClick={() => sliderRef.current.slickPrev()} // Go to the previous slide
            className="p-1 bg-[#7755EE] rounded-full text-white"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Comments;

import React, { useRef, useState,useEffect } from "react";
import Card from "../components/card/Card";
import img1 from "../assets/f937bd2041f53c6be27a0ab05d6e5fb0.png";
import { fetchTrips } from "../api/axiosconfig";
const items = [
  {
    id: 1,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },
  {
    id: 2,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },
  {
    id: 3,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },
  {
    id: 4,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },{
    id: 4,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },{
    id: 4,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },{
    id: 4,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },{
    id: 4,
    title: "اسطنبول",
    image1: img1,
    price: "5 أيام بتكلفة 1,500 دولار",
  },
];

function Trips() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTrips();
      
      console.log(response);
      setTrips(response);
    };
    fetchData();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    document.body.style.cursor = "grabbing"; // Change cursor during drag
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default scrolling behavior
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust speed multiplier as needed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    document.body.style.cursor = "default"; // Reset cursor
  };

  const preventDragHandler = (e) => {
    e.preventDefault(); // Prevent the default drag behavior for images
  };

  return (
    <div className="mt-32" id="Trips">
      {/* Section Header */}
      <div className="px-12">
        <p className="text-2xl font-semibold text-[#A5A5A5]">قم بزيارة العالم</p>
        <h2 className="text-4xl font-bold">الرحلات التي نقدمها</h2>
      </div>

      {/* Draggable Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-10 overflow-hidden no-scrollbar mt-12 px-12 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onScroll={(e) => e.preventDefault()} // Prevent browser scroll conflicts
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/4"
            onDragStart={preventDragHandler} // Prevent image dragging
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;

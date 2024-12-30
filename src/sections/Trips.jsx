import React, { useRef, useState, useEffect } from "react";
import Card from "../components/card/Card";
import { fetchTrips } from "../api/axiosconfig";

function Trips() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTrips();
      const data = await response.data;
      // console.log(data);
      setTrips(data);
    };
    fetchData();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust speed multiplier as needed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-32" id="Trips">
      {/* Section Header */}
      <div className="px-12">
        <p className="text-2xl font-semibold text-[#A5A5A5]">
          قم بزيارة العالم
        </p>
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={(e) => e.preventDefault()} // Prevent browser scroll conflicts
      >
        {trips.map((data) => (
          <div
            key={data.id}
            className="flex-shrink-0 xl:w-1/4 lg:w-1/3 md:w-1/2 w-1/2  "
            onDragStart={preventDragHandler}
          >
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;

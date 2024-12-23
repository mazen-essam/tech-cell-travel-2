import React from "react";

function Card({ item }) {
  return (
    <div className="relative">
      <img src={item.image1} alt="" className="w-full " />
      <div className="absolute bottom-6 w-[90%] left-1/2 transform -translate-x-1/2 py-6  bg-white p-2 rounded-2xl">
        <h3 className="font-bold text-2xl font-sans leading-6">{item.title}</h3>
        <p className="font-semibold text-xl text-[#797979]">{item.price}</p>
      </div>
    </div>
  );
}

export default Card;

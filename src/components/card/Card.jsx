import React from "react";
import img from "../../assets/f937bd2041f53c6be27a0ab05d6e5fb0.png";
function Card({ data }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img src={data.image_link} alt="" className="w-full " />
      <div className="absolute bottom-6 w-[90%] left-1/2 transform -translate-x-1/2 lg:py-6  bg-white lg:p-2 p-1 rounded-2xl">
        <h3 className="font-bold lg:text-2xl text-xl font-sans leading-6">
          {data.city}
        </h3>
        <p className="font-semibold lg:text-xl text-sm text-[#797979]">
          {data.cost}
        </p>
      </div>
    </div>
  );
}

export default Card;

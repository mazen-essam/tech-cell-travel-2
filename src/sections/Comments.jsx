import React from "react";
import { useState,useEffect } from "react";
import { fetchTes } from "../api/axiosconfig";
function Comments() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchTes = async () => {
      const response = await fetchTes();
      const data = await response.data;
      // console.log(data);
      setItems(data);
    };
    fetchTes();
  }, []);
  return (
    <section className="mt-32">
      <div className="px-8 text-center">
        <p className="text-[#A5A5A5] font-bold text-2xl">قالوا عنا</p>
        <h2 className="font-bold text-4xl">آراء مجموعة من عملائنا</h2>
      </div>
      <div className=" xl:py-12 xl:px-24 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8  gap-10 grid grid-cols-1 lg:grid-cols-3 justify-between mt-20">
        {items.map((item) => (
          <div key={item.id} className="bg-[#F1EFFD] p-6 rounded-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center space-x-2 gap-4 my-8">
              <img src={item.image} alt="" className="w-6 h-6" />
              <p className="text-xl font-bold">{item.name}</p>
            </div>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;

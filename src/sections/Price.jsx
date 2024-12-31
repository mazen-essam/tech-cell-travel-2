import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { fetchPlans } from "../api/axiosconfig";

function Price() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const response = await fetchPlans();
        const data = response.data.map((plan) => ({
          ...plan,
          features: JSON.parse(plan.features.replace(/'/g, '"')), // Fix single quotes
        }));
        setTrips(data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };
    loadPlans();
  }, []);

  return (
    <section className="mt-32" id="Price">
      <p className="text-2xl font-semibold text-[#A5A5A5] px-12">
        لا تقلق حول التكلفة
      </p>
      <h2 className="text-4xl font-bold px-12">خطط تناسب ميزانيتك</h2>
      <div className="xl:py-12 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8 gap-10 grid grid-cols-1 lg:grid-cols-3 justify-between mt-20">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className={`bg-[#FFE7AC] rounded-3xl xl:py-10 xl:px-8 lg:py-8 lg:px-6 py-4 px-4 border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-4 hover:bg-[#46368B] hover:text-white`}
          >
            <div className="border-b-2 border-black pb-8">
              <p className="text-2xl font-medium">
                <span className="text-3xl font-bold leading-6">
                  ${trip.price} /
                </span>
                للشخص
              </p>
              <h3 className="font-bold text-2xl my-6">{trip.name}</h3>
              <p>{trip.description}</p>
            </div>
            <div>
              {trip.features.map((feature, idx) => (
                <div key={idx} className="flex gap-2 items-center my-4">
                  <FaCheck className="p-1 bg-white rounded-full text-xl text-green-500 hover:text-white" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div>
              <button className="bg-transparent text-black hover:text-white mt-12 px-16 py-2 rounded-xl font-semibold flex items-center gap-2 justify-center w-full border-2 border-black hover:border-white">
                <p className="inline-block">احجز الان</p>
                <span className="inline-block bg-white p-1 rounded-full">
                  <MdKeyboardArrowLeft />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Price;

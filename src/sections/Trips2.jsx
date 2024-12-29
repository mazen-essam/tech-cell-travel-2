import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import arrow from "../assets/Designer2.png";
import { useState, useEffect } from "react";
import { fetchServices } from "../api/axiosconfig";
function Trips2() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchServices();
      const data = await response.data;
      // console.log(data);
      setServices(data);
    };
    fetchData();
  }, []);
  return (
    <section className="mt-20 mx-12 text-center">
      <p className="text-2xl font-semibold text-[#A5A5A5]">تمتع في رحلتك</p>
      <h2 className="text-4xl font-bold">مجموعة من خدماتنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between mt-12 relative bg-[#F1EFFD] rounded-3xl xl:py-12 xl:px-24 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8  gap-10">
        {services.map((service) => (
          <div
            className="xl:py-14 xl:px-20 lg:py-9 lg:px-12 md:py-8 md:px-10 sm:py-6 sm:px-8 md:mt-0 mt-10"
            key={service.id}
          >
            <img src={service.icon_link} alt="" />
            <h3 className="text-2xl font-bold my-6">{service.title}</h3>
            <p className="text-xl">{service.description}</p>
          </div>
        ))}

        {/* <div className="xl:py-14 xl:px-20 lg:py-9 lg:px-12 md:py-8 md:px-10 sm:py-6 sm:px-8 md:mt-0 mt-10">
          <img src={img2} alt="" />
          <h3 className="text-2xl font-bold my-6">حجوزات فندقية</h3>
          <p className="text-xl">لا تقلق حول مكان إقامتك فنحن نهتم بكامل الحجوزات الخاصة بك.</p>
        </div>
        <div className="xl:py-14 xl:px-20 lg:py-9 lg:px-12 md:py-8 md:px-10 sm:py-6 sm:px-8 md:mt-0 mt-10">
          <img src={img3} alt="" />
          <h3 className="text-2xl font-bold my-6">رحلات ميدانية</h3>
          <p className="text-xl">
            لن تكون إجازتك مملة معنا فهنا الكثير من الخطط والرحلات المختلفة.
          </p>
        </div> */}
        <div className="absolute top-0 left-[35%] hidden lg:block">
          <img src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Trips2;

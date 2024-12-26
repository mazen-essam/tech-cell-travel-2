import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
function Price() {
  return (
    <section>
      <p className="text-2xl font-semibold text-[#A5A5A5]">
        لا تقلق حول التكلفة
      </p>
      <h2 className="text-4xl font-bold">خطط تناسب ميزانيتك</h2>
      <div className=" xl:py-12 xl:px-24 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8  gap-10 grid grid-cols-1 md:grid-cols-3 justify-between mt-12">
        <div className="bg-[#FFE7AC]  rounded-3xl">
          <div>
            <p>
              <span></span>
            </p>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <button className="bg-transparent text-black  px-16 py-2 rounded-xl font-semibold inline-flex items-center gap-2">
              {" "}
              <p className="inline-block "> احجز الان</p>
              <span className="inline-block bg-white p-1 rounded-full">
                <MdKeyboardArrowLeft className=" " />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-[#46368B] rounded-3xl ">
          <div>
            <p>
              <span></span>
            </p>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <button className="bg-transparent text-black  px-16 py-2 rounded-xl font-semibold inline-flex items-center gap-2">
              {" "}
              <p className="inline-block "> احجز الان</p>
              <span className="inline-block bg-white p-1 rounded-full">
                <MdKeyboardArrowLeft className=" " />
              </span>
            </button>
          </div>
        </div>
        <div>
          <div>
            <p>
              <span></span>
            </p>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <button className="bg-transparent text-black  px-16 py-2 rounded-xl font-semibold inline-flex items-center gap-2">
              {" "}
              <p className="inline-block "> احجز الان</p>
              <span className="inline-block bg-white p-1 rounded-full">
                <MdKeyboardArrowLeft className=" " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;

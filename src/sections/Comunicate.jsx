import { img } from "motion/react-client";
import React from "react";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";

const items = [
  {
    id: 1,
    img: item1,
    title: "نقدم لك المساعدة",
    content: `إن كان لديك اي مشكلة في البلد الذي تسافر 
إليه سنقوم بمساعدك في هذا الموضوع.`,
  },
  {
    id: 2,
    img: item2,
    title: "للتواصل",
    content: `يمكنك التواصل معنا عبر الفورم أو عبر البريد
الإلكتروني: company@mail.com`,
  },
  {
    id: 3,
    img: item3,
    title: "أوقات الدوام",
    content: `يمكنك التواصل معنا يومياً أثناء أوقات الدوام
من الساعة 9 صباحاً حتى 6 مساءاً.
`,
  },
];
function Comunicate() {
  return (
    <section>
      <div>
        <p className="text-[#A5A5A5] font-bold text-2xl">هل لديك سؤال؟</p>
        <h2 className="font-bold text-4xl">يسعدنا التواصل معك</h2>
      </div>
      <div className=" xl:py-12 xl:px-24 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8  gap-10 grid grid-cols-1 lg:grid-cols-2 justify-between mt-20">
        <div className="bg-[#FFE7AC] col-span-1  rounded-3xl xl:py-10 xl:px-8 lg:py-8 lg:px-6 py-4 px-4 border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.75)]">
          <label
            htmlFor="name"
            className="font-semibold text-xl mt-4 mb-3 block"
          >
            الاسم
          </label>
          <input
            type="text"
            name="name"
            className="py-2 px-2 w-full border-2 border-black rounded-2xl"
            placeholder="يرجى تسجيل اسمك الكامل"
          />
          <label
            htmlFor="email"
            className="font-semibold text-xl mt-4 mb-3 block"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            name="email"
            className="py-2 px-2 w-full border-2 border-black rounded-2xl"
            placeholder="سجل بريدك الشخصي"
          />
          <label
            htmlFor="subject"
            className="font-semibold text-xl mt-4 mb-3 block"
          >
            الموضوع
          </label>
          <textarea
            name="subject"
            id=""
            className="py-2 px-2 w-full border-2 border-black rounded-2xl"
            placeholder="ما هو السؤال أو المشكلة التي لديك؟"
          ></textarea>
          <button className="bg-black text-white mt-12  px-16 py-2 rounded-xl font-semibold inline-flex items-center gap-2 justify-center ">
            أرسل الرسالة
          </button>
        </div>
        <div>
          <div className="flex flex-col my-4 px-6 h-full justify-between 2xl:pl-48 ">
            {items.map((item) => (
              <div key={item.id} className="flex lg:flex-row flex-col gap-4 items-center lg:text-start text-center lg:mt-0 mt-8">
                <img src={item.img} alt="" className="w-32 h-32" />
                <div>
                  <h3 className="font-bold text-3xl">{item.title}</h3>
                  <p className="mt-4">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comunicate;

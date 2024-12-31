import { img } from "motion/react-client";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import React, { useState } from "react";
import { sendContactForm } from "../api/axiosconfig";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setText] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize error object
    const errors = {
      name: "",
      email: "",
      msg: "",
    };

    // Validation checks
    if (!name.trim()) errors.name = "يرجى إدخال الاسم.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = "يرجى إدخال بريد إلكتروني صالح مثل user@gmail.com.";
    if (!msg.trim()) errors.msg = "يرجى إدخال نص الرسالة.";

    // If any error exists, update the state and stop submission
    if (errors.name || errors.email || errors.msg) {
      setError(errors);
      return;
    }

    // Clear errors and proceed
    setError({ name: "", email: "", msg: "" });

    try {
      const response = await sendContactForm(name, email, msg);
      setMessage("تم إرسال الرسالة بنجاح!");
      setName("");
      setEmail("");
      setText("");
      console.log("Response:", response);
    } catch (error) {
      setMessage("فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <section id="Comunicate">
      <div className="px-12">
        <p className="text-[#A5A5A5] font-bold text-2xl">هل لديك سؤال؟</p>
        <h2 className="font-bold text-4xl">يسعدنا التواصل معك</h2>
      </div>
      <div className="xl:py-12 xl:px-24 lg:py-8 lg:px-12 md:py-6 md:px-10 sm:py-4 sm:px-8 gap-10 grid grid-cols-1 lg:grid-cols-2 justify-between mt-20">
        <form
          className="bg-[#FFE7AC] col-span-1 rounded-3xl xl:py-10 xl:px-8 lg:py-8 lg:px-6 py-4 px-4 border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.75)]"
          onSubmit={handleSubmit}
        >
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <p className="text-red-600 mt-2">{error.name}</p>}
          <label
            htmlFor="email"
            className="font-semibold text-xl mt-4 mb-3 block"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-2 w-full border-2 border-black rounded-2xl"
            placeholder="سجل بريدك الشخصي"
          />
          {error.email && <p className="text-red-600 mt-2">{error.email}</p>}
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
            value={msg}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          {error.msg && <p className="text-red-600 mt-2">{error.msg}</p>}
          <button
            className="bg-black text-white mt-12 px-16 py-2 rounded-xl font-semibold inline-flex items-center gap-2 justify-center"
            type="submit"
          >
            أرسل الرسالة
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
        <div>
          <div className="flex flex-col my-4 px-6 h-full justify-between 2xl:pl-48">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex lg:flex-row flex-col gap-4 items-center lg:text-start text-center lg:mt-0 mt-8"
              >
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

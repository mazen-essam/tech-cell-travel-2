import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#191919] text-[#797979] px-12 xl:pt-24 lg:pt-16 pt-12">
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-8 justify-between border-b-2 border-[#4C4C4C] pb-16">
        <div className=" lg:col-span-1 col-span-4">
          <h4 className="text-3xl font-bold mb-4 text-white">
            رحلاتي<span className="text-primary">.</span>
          </h4>
          <p>
            شركة متخصصة في مجال السياحة والسفر نقدم خدمات تأمين الرحلات
            والحجوزات والفيز لكل أنحاء العالم.
          </p>
        </div>
        <div className=" lg:col-span-1 col-span-2">
          <h4 className="text-3xl font-bold mb-4 text-white">حول</h4>
          <ul className="flex flex-col gap-4">
            <li>الشركه</li>
            <li>من نحن؟</li>
            <li>فرص العمل</li>
            <li>المدونة</li>
          </ul>
        </div>
        <div className=" lg:col-span-1 col-span-2">
          <h4 className="text-3xl font-bold mb-4 text-white">خدماتنا</h4>
          <ul className="flex flex-col gap-4">
            <li>بطاقات الطيران</li>
            <li>الرحلات البحرية</li>
            <li>الفنادق</li>
            <li>الرحلات البرية</li>
            <li>تأمين الفيزا</li>
          </ul>
        </div>
        <div className=" lg:col-span-1 col-span-2">
          <h4 className="text-3xl font-bold mb-4 text-white">الحجوزات</h4>
          <ul className="flex flex-col gap-4">
            <li>العروض الجديدة</li>
            <li>تأكد من حجزك</li>
            <li>الاشتراكات</li>
            <li>طرق السفر</li>
          </ul>
        </div>
        <div className=" lg:col-span-1 col-span-2">
          <h4 className="text-3xl font-bold mb-4 text-white">الموقع</h4>
          <ul className="flex flex-col gap-4">
            <li>سياسة الخصوصية</li>
            <li>شروط الاستخدام</li>
            <li>بلغ عن مشكلة</li>
            <li>تواصل معنا</li>
          </ul>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between mt-8">
        <div>
          <p>
            2023 جميع الحقوق محفوظة لموقع
            <span className="text-primary"> للمصمم أحمد سكماني </span>
          </p>
        </div>
        <div className="flex gap-2">
        <div className="p-2 border-2 border-[#797979] rounded-xl">
            <FaYoutube className="text-white text-xl  " />
          </div>
          <div className="p-2 border-2 border-[#797979] rounded-xl">
            <RiInstagramFill className="text-white text-xl  " />
          </div>
          
          <div className="p-2 border-2 border-[#797979] rounded-xl">
            <FaFacebookSquare className="text-white text-xl  " />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

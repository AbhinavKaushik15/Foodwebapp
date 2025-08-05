"use client";
import { Clock5, Mail, Phone } from "lucide-react";
import React, { useEffect } from "react";

const contact = () => {
  useEffect(() => {
    document.title = "Contact us | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vh]">
            <span className="text-[#707070]">Home</span>
            <span className="text-[#DB6885] ml-1">/ Contact us</span>
          </div>
          <h1 className="font-['figtree'] text-[11.5vh] font-[900]">
            Contact us
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full h-[155vh] px-[18px] flex">
        <div className="left w-[49.37vw] h-full flex flex-col items-start justify-center">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
            Contact us
          </h3>
          <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
            Get in Touch with Us
          </h1>
          <p className="w-[46vw] text-zinc-600 text-[2.6vh] leading-[2.1] mt-6">
            We would love to hear from you! If you have any questions, feedback,
            or inquiries, feel free to reach out to our friendly team. We‘re
            here to assist you and provide the best possible customer service.
          </p>
          <div className="mt-10 flex flex-col gap-6.5">
            <div className="email text-black font-['figtree'] flex items-center gap-2">
              <Mail className="text-[#DB6885] font-[100] w-6 h-6" />
              <h1 className="text-lg font-[900] tracking-tight">Email us :</h1>
              <p className="font-[600] text-lg">
                abhinavsharmaas20000@gmail.com
              </p>
            </div>
            <div className="email text-black font-['figtree'] flex items-center gap-2">
              <Phone className="text-[#DB6885] font-[100] w-6 h-6" />
              <h1 className="text-lg font-[900] tracking-tight">Call :</h1>
              <p className="font-[600] text-lg">+91-9084773936</p>
            </div>
            <div className="email text-black font-['figtree'] flex items-center gap-2">
              <Clock5 className="text-[#DB6885] font-[100] w-6 h-6" />
              <h1 className="text-lg font-[900] tracking-tight">
                Working Hours :
              </h1>
              <p className="font-[600] text-lg">
                Monday - Friday, 08 am - 05 pm
              </p>
            </div>
          </div>
        </div>

        <div className="right w-[49.37vw] h-full flex justify-end items-center">
          <div className="boundry w-[45vw] h-[128vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-[5vh] justify-center px-[10vh]">
            <h1 className="text-[3.7vh] font-['figtree'] font-[900]">
              Please use the contact details provided below to get in touch with
              us:
            </h1>
            <div className="w-full h-[0.5px] border-zinc-300 border-[0.3px]"></div>
            <input
              className="py-5 w-full border outline-[#DB6885] font-[500] text-xl border-zinc-300 rounded-full placeholder:text-black px-[7vh]"
              type="text"
              placeholder="Name"
            />
            <input
              className="py-5 w-full border outline-[#DB6885] font-[500] text-xl border-zinc-300 rounded-full placeholder:text-black px-[7vh]"
              type="mail"
              placeholder="Email Address"
            />
            <textarea
              className="py-5 w-full h-[40vh] max-h-[40vh] border outline-[#DB6885] font-[600] text-xl border-zinc-300 rounded-4xl placeholder:text-black px-[7vh]"
              placeholder="Message"
            ></textarea>
            <button className="w-full text-white font-[500] bg-[#DB6885] hover:bg-[] py-5 rounded-full text-lg hover:text-black hover:bg-[#FEBE0B] transition-all duration-700 ease-linear">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

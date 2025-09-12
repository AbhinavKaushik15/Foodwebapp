"use client";
import { Clock5, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const contact = () => {
  useEffect(() => {
    document.title = "Contact us | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[298px] md:h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[129px] md:top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center md:gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vw] md:text-[4.5vh]">
            <Link
              href="/"
              className="mr-1 font-['fredoka'] font-[900] text-zinc-600 hover:text-[#DB6885] hover:underline"
            >
              Home
            </Link>
            <Link href="/about" className="text-[#DB6885] ml-1 font-[900]">
              / Contact
            </Link>
          </div>
          <h1 className="font-['figtree'] text-[8.2vw] md:text-[11.5vh] font-[900] text-black">
            Contact us
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full h-[170vh] md:h-[155vh] px-6 md:px-[18px] flex flex-col md:flex-row mb-20 md:mb-0 bg-white">
        <div className="left w-full md:w-[49.37vw] h-full flex flex-col items-start justify-center">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl md:text-3xl text-center">
            Contact us
          </h3>
          <h1 className="font-['figtree'] text-[25px] md:text-[8.7vh] text-center font-[900] mt-4 whitespace-nowrap text-black">
            Get in Touch with Us
          </h1>
          <p className="w-full md:w-[46vw] text-zinc-600 text-[15px] md:text-[2.6vh] leading-[2.1] mt-6">
            We would love to hear from you! If you have any questions, feedback,
            or inquiries, feel free to reach out to our friendly team. We‘re
            here to assist you and provide the best possible customer service.
          </p>

          <div className="mt-14 md:mt-10 flex flex-col gap-6.5">
            <div className="email text-zinc-500 font-['figtree'] flex items-center gap-2">
              <Mail className="text-[#DB6885] font-[100] w-4 md:w-6 h-4 md:h-6" />
              <h1 className="text-md md:text-lg font-[900] tracking-tight text-zinc-500">
                Email us :
              </h1>
              <p className="font-[600] text-md md:text-lg text-zinc-500">
                abhinav@gmail.com
              </p>
            </div>

            <div className="email font-['figtree'] flex items-center gap-2">
              <Phone className="text-[#DB6885] font-[100] w-4 md:w-6 h-4 md:h-6" />
              <h1 className="text-md md:text-md md:text-lg font-[900] tracking-tight text-zinc-500">
                Call :
              </h1>
              <p className="font-[600] text-md md:text-md md:text-lg text-zinc-500">
                +91-9084773936
              </p>
            </div>

            <div className="email text-zinc-500 font-['figtree'] flex items-center gap-2">
              <Clock5 className="text-[#DB6885] font-[100] w-4 md:w-6 h-4 md:h-6" />
              <h1 className="text-md md:text-lg font-[900] tracking-tight">
                Working Hours :
              </h1>
              <p className="font-[600] text-md md:text-lg">
                Monday - Friday, 08 am - 05 pm
              </p>
            </div>
          </div>
        </div>

        <div className="right w-full md:w-[49.37vw] h-full flex justify-end items-center">
          <div className="boundry w-full md:w-[45vw] h-[103vh] md:h-[128vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-5 md:gap-[5vh] justify-center px-5 md:px-[10vh]">
            <h1 className="text-[5.5vw] md:text-[3.7vh] font-['figtree'] font-[900] text-black">
              Please use the contact details provided below to get in touch with
              us:
            </h1>
            <div className="w-full h-[0.5px] border-zinc-300 border-[0.3px]"></div>
            <input
              className="text-black py-4 md:py-5 w-full border hover:border-[#DB6885] focus:outline-[#DB6885] font-[500] text-lg md:text-xl border-zinc-300 rounded-full placeholder:text-zinc-600 px-7 md:px-[7vh]"
              type="text"
              placeholder="Name"
            />
            <input
              className="text-black py-4 md:py-5 w-full border hover:border-[#DB6885] outline-[#DB6885] font-[500] text-lg md:text-xl border-zinc-300 rounded-full placeholder:text-zinc-600 px-7 md:px-[7vh]"
              type="mail"
              placeholder="Email Address"
            />
            <textarea
              className="py-4 text-black md:py-5 w-full h-[40vh] max-h-[40vh] border hover:border-[#DB6885] outline-[#DB6885] font-[600] text-lg md:text-xl border-zinc-300 rounded-4xl placeholder:text-zinc-600 px-7 md:px-[7vh]"
              placeholder="Message"
            ></textarea>
            <button className="w-full text-white font-[500] bg-[#DB6885] py-4 md:py-5 rounded-full text-lg hover:text-zinc-600 hover:bg-[#FEBE0B] transition-all duration-700 ease-linear">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

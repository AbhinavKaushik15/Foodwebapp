"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";

const about = () => {
  useEffect(() => {
    document.title = "About | Fofood";
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
              / About
            </Link>
          </div>
          <h1 className="font-['figtree'] text-[8.2vw] md:text-[11.5vh] font-[900]">
            About
          </h1>
        </div>
      </div>

      {/* About us */}
      <div className="w-full max-h-[190vw] md:h-[200vh] lg:h-[100vh] mt-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="left-imgs w-full h-[83vw] md:h-[90vh] flex md:items-center justify-center gap-3 md:gap-8 px-3 md:px-[2.8vh]">
          <Image
            className="w-[45vw] lg:w-[21vw] h-[65vw] md:h-[67vh] rounded-2xl mt-5 object-cover"
            src="/image/about-us-1.webp"
            alt=""
            width={800}
            height={800}
          />
          <Image
            className="w-[45vw] lg:w-[21vw] h-[65vw] md:h-[67vh] rounded-2xl mt-[60px] md:mt-[11vh] object-cover"
            src="/image/about-us-2.webp"
            alt=""
            width={800}
            height={800}
          />
        </div>

        <div className="right-details w-full lg:w-1/2 h-[90vh] py-7 md:py-10 px-4 md:px-[8.1vh]">
          <h3 className="text-[#DB6885] text-xl md:text-[2.15vw] font-black font-['Fredoka']">
            About us
          </h3>
          <h1 className="font-['figtree'] font-[900] text-[25px] md:text-[8.6vh] mt-3">
            Our History
          </h1>
          <p className="w-full md:w-[35vw] text-zinc-600 text-[3.6vw] md:text-[2.6vh] leading-[1.8] md:leading-[2.1] mt-4 md:mt-6">
            Founded with a resolute commitment to addressing the pervasive issue
            of food deserts, [Your Website Name] has been empowering communities
            since its inception. Our journey began with a deep understanding of
            the challenges faced by individuals living in areas devoid of
            accessible, nutritious food options. Driven by the desire to make a
            meaningful impact, we set out to create sustainable solutions that
            ensure everyone has the opportunity to enjoy fresh, healthy, and
            affordable meals.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="w-full  max-h-[300vw] md:h-[75vh] px-5 md:px-[18px] flex flex-col md:flex-row gap-10 md:gap-0 justify-normal md:justify-between">
        <div className="left w-full md:w-[31vw] mt-0 md:mt-1">
          <div className="w-14 md:w-[9.5vh] h-14 md:h-[9.5vh] bg-[#FFF4F5] font-['fredoka'] font-[900] text-[#DB6885] rounded-full flex items-center justify-center text-xl md:text-3xl">
            01
          </div>
          <h1 className="text-[6vw] md:text-[3.95vh] font-['figtree'] font-[900] mt-[17px] md:mt-7">
            Collective Collaboration
          </h1>
          <p className="text-zinc-600 text-[3.6vw] md:text-[2.6vh] leading-[2.1] mt-[16px] md:mt-5 tracking-tight">
            We believe that real change happens when we join forces. By
            partnering with local residents, organizations, farmers, and
            businesses, we create a network of support, working together to
            establish sustainable solutions that break down barriers to food
            access.
          </p>
        </div>

        <div className="middle  w-full md:w-[31vw] mt-0 md:mt-[10vh]">
          <div className="w-14 md:w-[9.5vh] h-14 md:h-[9.5vh] bg-[#FFF4F5] font-['fredoka'] font-[900] text-[#DB6885] rounded-full flex items-center justify-center text-xl md:text-3xl">
            02
          </div>
          <h1 className="text-[6vw] md:text-[3.95vh] font-['figtree'] font-[900] mt-[17px] md:mt-7">
            Commitment to Community
          </h1>
          <p className="text-zinc-600 text-[3.6vw] md:text-[2.6vh] leading-[2.1] mt-[16px] md:mt-5 tracking-tight">
            At Fofood, our mission is simple - ensuring equitable access to
            fresh, healthy, and affordable food for all. We are dedicated to
            empowering communities affected by food deserts and improving
            overall well-being.
          </p>
        </div>

        <div className="right w-full md:w-[31vw] mt-0 md:mt-[20vh]">
          <div className="w-14 md:w-[9.5vh] h-14 md:h-[9.5vh] bg-[#FFF4F5] font-['fredoka'] font-[900] text-[#DB6885] rounded-full flex items-center justify-center text-xl md:text-3xl">
            03
          </div>
          <h1 className="text-[6vw] md:text-[3.95vh] font-['figtree'] font-[900] mt-[17px] md:mt-7">
            Technology-driven Impact
          </h1>
          <p className="text-zinc-600 text-[3.6vw] md:text-[2.6vh] leading-[2.1] mt-[16px] md:mt-5 tracking-tight">
            Embracing the power of technology, we leverage our online platform
            to reach and empower a wider audience. Through our website, we
            provide valuable resources, including recipes, tips, and educational
            content, making healthy eating accessible to all and fostering
            positive change.
          </p>
        </div>
      </div>

      {/* One Meal */}
      <video
        className="flex md:hidden w-[91vw] rounded-2xl mx-auto mt-20"
        width="320"
        height="320"
        controls
        muted
        loop
        autoPlay
        preload="none"
      >
        <source src="/image/about.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className="w-full max-h-[130vw] md:h-[122vh] px-5 md:px-[18px] flex items-center justify-between mt-10 md:mt-0">
        <div className="left w-full md:w-[44.6vw]">
          <h1 className="text-[5.7vw] md:text-[9vh] font-['figtree'] font-[900]">
            One Meal at a Time
          </h1>
          <p className="text-zinc-600 text-[3.6vw] md:text-[2.6vh] leading-[2.1] mt-[16px] md:mt-5 tracking-tight">
            Through collaborative efforts with local residents, organizations,
            and key stakeholders, we have established a strong network of
            support. Over the years, we have implemented various initiatives
            such as community gardens, mobile markets, and educational programs
            focused on nutrition and culinary skills. By fostering community
            engagement and leveraging technology, we have amplified our impact
            and connected individuals to vital resources. Our history is rooted
            in the success stories of individuals and families who have gained
            improved access to nutritious food, leading to enhanced well-being
            and a stronger sense of community.
          </p>
        </div>
        <video
          className="hidden md:flex w-[45vw] rounded-4xl"
          width="320"
          height="320"
          controls
          muted
          loop
          autoPlay
          preload="none"
        >
          <source src="/image/about.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Our Chefs */}
      <div className="w-full max-h-[246vh] mt-14 md:mt-0">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl md:text-3xl text-center">
          Our Chefs
        </h3>
        <h1 className="font-['figtree'] text-[25px] md:text-[8.7vh] text-center font-[900] mt-2 md:mt-4">
          Meet Our Talented Chefs
        </h1>

        <div className="w-full px-[18px] flex flex-col md:flex-row items-center justify-between mt-34 md:mt-[22.2vh]">
          <div className="w-full md:w-[28.15vw] h-[78vh] md:h-[90vh] flex flex-col">
            <div className="relative w-[91vw] md:w-[28.15vw] h-[47.8vh] md:h-[70vh] bg-[#FFD3D7] rounded-4xl">
              <Image
                className="group-hover absolute bottom-0 left-1/2 w-[37.1vh] md:w-[43.5vh] transition-all duration-300 -translate-x-1/2 hover:scale-120 hover:pb-[6.4vh]"
                src="/image/chef-1.webp"
                alt="chef-1"
                width={283}
                height={283}
              />
            </div>
            <div className="mt-[4vh] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[5.1vw] md:text-[3.9vh] font-['figtree'] font-[900]">
                Chef Ethan Mitchell
              </h1>
              <h2 className="text-[4.8vw] md:text-[3.6vh] text-zinc-500 font-['figtree'] font-[900]">
                Executive Chef
              </h2>
            </div>
          </div>

          <div className="w-full md:w-[28.15vw] h-[78vh] md:h-[90vh] flex flex-col">
            <div className="relative w-[91vw] md:w-[28.15vw] h-[47.8vh] md:h-[70vh] bg-[#FFD3D7] rounded-4xl">
              <Image
                className="group-hover absolute w-[38.8vh] md:w-[55.5vh] bottom-0 left-1/2 transition-all duration-300 -translate-x-1/2 hover:scale-105 hover:pb-[1.9vh]"
                src="/image/chef-2.webp"
                alt="chef-2"
                width={356}
                height={356}
              />
            </div>
            <div className="mt-[4vh] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[5.1vw] md:text-[3.9vh] font-['figtree'] font-[900]">
                Chef Marcus Thompson
              </h1>
              <h2 className="text-[4.8vw] md:text-[3.6vh] text-zinc-500 font-['figtree'] font-[900]">
                Head Chef
              </h2>
            </div>
          </div>

          <div className="w-full md:w-[28.15vw] h-[78vh] md:h-[90vh] flex flex-col">
            <div className="relative w-[91vw] md:w-[28.15vw] h-[47.8vh] md:h-[70vh] bg-[#FFD3D7] rounded-4xl">
              <Image
                className="group-hover absolute w-[38.8vh] md:w-[44.5vh] bottom-0 left-1/2 transition-all duration-300 -translate-x-1/2 hover:scale-120 hover:pb-[6.4vh]"
                src="/image/chef-3.webp"
                alt="chef-3"
                width={290}
                height={290}
              />
            </div>
            <div className="mt-[4vh] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[5.1vw] md:text-[3.9vh] font-['figtree'] font-[900]">
                Chef Alexander Scott
              </h1>
              <h2 className="text-[4.8vw] md:text-[3.6vh] text-zinc-500 font-['figtree'] font-[900]">
                Food Advocate
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="my-[10vh] md:my-[24vh]">
        <Testimonial />
      </div>
    </div>
  );
};

export default about;

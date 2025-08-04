"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const about = () => {
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vh]">
            <span className="text-[#707070]">Home</span>
            <span className="text-[#DB6885] ml-1">/ About</span>
          </div>
          <h1 className="font-['figtree'] text-[11.5vh] font-[900]">About</h1>
        </div>
      </div>

      {/* About us */}
      <div className="w-full h-[100vh] mt-10 flex items-center justify-between">
        <div className="left-imgs w-1/2 h-[90vh] flex gap-8 px-[2.8vh]">
          <Image
            className="w-[21vw] h-[67vh] rounded-2xl mt-5"
            src="/image/about-us-1.webp"
            alt=""
            width={800}
            height={800}
          />
          <Image
            className="w-[21vw] h-[67vh] rounded-2xl mt-[11vh]"
            src="/image/about-us-2.webp"
            alt=""
            width={800}
            height={800}
          />
        </div>

        <div className="right-details w-1/2 h-[90vh] py-10 px-[8.1vh]">
          <h3 className="text-[#DB6885] text-[2.15vw] font-black font-['Fredoka']">
            About us
          </h3>
          <h1 className="font-['figtree'] font-[900] text-[8.6vh] mt-3">
            Our History
          </h1>
          <p className="w-[35vw] text-zinc-600 text-[2.6vh] leading-[2.1] mt-6">
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
      <div className="w-full h-[75vh] px-[18px] flex justify-between">
        <div className="left w-[31vw] mt-1">
          <div className="w-[9.5vh] h-[9.5vh] bg-[#FFF4F5] font-['fredoka'] font-[900] text-[#DB6885] rounded-full flex items-center justify-center text-3xl">
            01
          </div>
          <h1 className="text-[3.95vh] font-['figtree'] font-[900] mt-7">
            Collective Collaboration
          </h1>
          <p className="text-zinc-600 text-[2.6vh] leading-[2.1] mt-5 tracking-tight">
            We believe that real change happens when we join forces. By
            partnering with local residents, organizations, farmers, and
            businesses, we create a network of support, working together to
            establish sustainable solutions that break down barriers to food
            access.
          </p>
        </div>

        <div className="middle w-[31vw] mt-[10vh]">
          <div className="w-[9.5vh] h-[9.5vh] bg-[#FFF4F5] font-['fredoka'] font-[900] text-[#DB6885] rounded-full flex items-center justify-center text-3xl">
            02
          </div>
          <h1 className="text-[3.95vh] font-['figtree'] font-[900] mt-7">
            Commitment to Community
          </h1>
          <p className="text-zinc-600 text-[2.6vh] leading-[2.1] mt-5 tracking-tight">
            At Fofood, our mission is simple - ensuring equitable access to
            fresh, healthy, and affordable food for all. We are dedicated to
            empowering communities affected by food deserts and improving
            overall well-being.
          </p>
        </div>

        <div className="right w-[31vw] mt-[20vh]">
          <div className="w-[9.5vh] h-[9.5vh] bg-[#FFF4F5] font-['fredoka'] font-[900] text-[#DB6885] rounded-full flex items-center justify-center text-3xl">
            03
          </div>
          <h1 className="text-[3.95vh] font-['figtree'] font-[900] mt-7">
            Technology-driven Impact
          </h1>
          <p className="text-zinc-600 text-[2.6vh] leading-[2.1] mt-5 tracking-tight">
            Embracing the power of technology, we leverage our online platform
            to reach and empower a wider audience. Through our website, we
            provide valuable resources, including recipes, tips, and educational
            content, making healthy eating accessible to all and fostering
            positive change.
          </p>
        </div>
      </div>

      {/* One Meal */}
      <div className="w-full h-[122vh] px-[18px] flex items-center justify-between">
        <div className="left w-[44.6vw]">
          <h1 className="text-[9vh] font-['figtree'] font-[900]">
            One Meal at a Time
          </h1>
          <p className="text-zinc-600 text-[2.6vh] leading-[2.1] mt-5 tracking-tight">
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
          className="w-[45vw] rounded-4xl"
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
      <div className="w-full h-[150vh]">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
          Our Chefs
        </h3>
        <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
          Meet Our Talented Chefs
        </h1>

        <div className="w-full px-[18px] flex items-center justify-between mt-[22.2vh]">
          <div className="w-[28.15vw] h-[90vh] flex flex-col">
            <div className="relative w-[28.15vw] h-[70vh] bg-[#FFD3D7] rounded-4xl">
              <Image
                className="group-hover absolute bottom-0 left-1/2 transition-all duration-300 -translate-x-1/2 hover:scale-120 hover:pb-[6.4vh]"
                src="/image/chef-1.webp"
                alt="chef-1"
                width={283}
                height={283}
              />
            </div>
            <div className="mt-[4vh] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[3.9vh] font-['figtree'] font-[900]">
                Chef Ethan Mitchell
              </h1>
              <h2 className="text-[3.6vh] text-zinc-700 font-['figtree'] font-[900]">
                Executive Chef
              </h2>
            </div>
          </div>

          <div className="w-[28.15vw] h-[90vh] flex flex-col">
            <div className="relative w-[28.15vw] h-[70vh] bg-[#FFD3D7] rounded-4xl">
              <Image
                className="group-hover absolute bottom-0 left-1/2 transition-all duration-300 -translate-x-1/2 hover:scale-105 hover:pb-[1.9vh]"
                src="/image/chef-2.webp"
                alt="chef-2"
                width={356}
                height={356}
              />
            </div>
            <div className="mt-[4vh] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[3.9vh] font-['figtree'] font-[900]">
                Chef Marcus Thompson
              </h1>
              <h2 className="text-[3.6vh] text-zinc-700 font-['figtree'] font-[900]">
                Head Chef
              </h2>
            </div>
          </div>

          <div className="w-[28.15vw] h-[90vh] flex flex-col">
            <div className="relative w-[28.15vw] h-[70vh] bg-[#FFD3D7] rounded-4xl">
              <Image
                className="group-hover absolute bottom-0 left-1/2 transition-all duration-300 -translate-x-1/2 hover:scale-120 hover:pb-[6.4vh]"
                src="/image/chef-3.webp"
                alt="chef-3"
                width={290}
                height={290}
              />
            </div>
            <div className="mt-[4vh] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[3.9vh] font-['figtree'] font-[900]">
                Chef Alexander Scott
              </h1>
              <h2 className="text-[3.6vh] text-zinc-700 font-['figtree'] font-[900]">
                Food Advocate
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="relative w-full h-[150vh] mt-[7vh]">
        <Image
          className="absolute w-[96vw] h-[130vh] left-1/2 -translate-x-1/2"
          src="/image/bg-testimonial.jpg"
          alt="testimonialBG"
          width={1000}
          height={1000}
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-24">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
            Testimonial
          </h3>
          <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
            What People Say
          </h1>
        </div>
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper absolute top-[44.5vh] w-[56.5vw] h-[56.5vh] bg-white rounded-2xl"
        >
          <SwiperSlide className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-full flex flex-col gap-4 items-center justify-center">
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px]"
                src="/image/avatar-1.webp"
                alt="avatar1"
                width={50}
                height={50}
              />
              <h1 className="text-xl font-[900] font-['figtree']">
                It's very Delicious!
              </h1>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-lg text-center font-['figtree'] font-[500] text-zinc-700 leading-[1.8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti architecto adipisci corporis similique non quisquam
                omnis, nulla natus, fugiat quae accusantium fuga molestiae iusto
                quas!
              </p>
              <h1 className="font-['Fredoka'] font-[900] text-[#DB6885]">
                Abhinav Kaushik
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-full flex flex-col gap-4 items-center justify-center">
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px]"
                src="/image/avatar-2.webp"
                alt="avatar2"
                width={50}
                height={50}
              />
              <h1 className="text-xl font-[900] font-['figtree']">
                It's very Delicious!
              </h1>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-lg text-center font-['figtree'] font-[500] text-zinc-700 leading-[1.8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti architecto adipisci corporis similique non quisquam
                omnis, nulla natus, fugiat quae accusantium fuga molestiae iusto
                quas!
              </p>
              <h1 className="font-['Fredoka'] font-[900] text-[#DB6885]">
                Harsh Kumar
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default about;

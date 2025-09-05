"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import PopularMenuCards from "./PopularMenuCards";
import OurBlog from "./OurBlog";

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | Fofood";
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[1070px] md:h-[100vh] bg-[#FFF4F5]">
        <Image
          className="absolute top-0 right-0 w-[95vw] sm:w-[34.75vw]"
          src="/image/hero-shape.png"
          alt="shape"
          width={1000}
          height={1000}
        />

        <Image
          className="absolute top-[12.3vh] md:top-[13.1vh] right-5 md:right-[44.5px] w-[90vw] md:w-[47.45vw]"
          src="/image/hero-cake.webp"
          alt="shape"
          width={1000}
          height={1000}
        />

        <div className="absolute w-[80vw] md:w-[50vw] h-[120vh] top-[539px] md:top-0 left-4">
          <h1 className="text-[#DB6885] text-[4.5vw] md:text-[2vw] mt-2 font-black font-['Fredoka']">
            Welcome to Fofood
          </h1>

          <h1 className="text-[8.6vw] md:text-[5vw] tracking-tight leading-[1.3] mt-1 md:mt-5 font-black text-[#2F3137] font-['Figtree']">
            Super Delicious Food Special for You
          </h1>
          <p className="lg:text-[1.9vw] xl:text-[1.32vw] text-zinc-500 font-['figtree'] lg:w-[43vw] xl:w-[27vw] font-[500] leading-[1.9] mt-1 md:mt-7">
            Order your favorites food from anywhere and get delivery at your
            door
          </p>

          <div className="flex items-center gap-5 mt-2 md:mt-[5.1vh]">
            <button className="px-10.5 md:px-[3.1vw] text-md md:text-lg tracking-tight py-[18px] md:py-[2.8vh] shadow-[#DB6885] shadow-2xl bg-[#DB6885] hover:bg-[#FFC008] rounded-full text-white hover:text-black transition-all ease-linear duration-200">
              Order Now
            </button>
            <button className="px-9 md:px-[2.85vw] text-lg tracking-tight py-[17.5px] md:py-[2.7vh] bg-white border border-[#DB6885] hover:bg-[#DB6885] rounded-full text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
              Learn More
            </button>
          </div>

          <div className="w-[75vw] md:w-[54.3vh] flex items-center justify-between mt-6.5 md:mt-[10.8vh]">
            <div className="flex">
              <Image
                className="w-13 md:w-14 h-13 md:h-14 rounded-full border-white border-[2px]"
                src="/image/avatar-1.webp"
                alt="avatar1"
                width={50}
                height={50}
              />
              <Image
                className="w-13 md:w-14 h-13 md:h-14 rounded-full border-white border-[2px] -ml-3"
                src="/image/avatar-2.webp"
                alt="avatar2"
                width={50}
                height={50}
              />
              <Image
                className="w-13 md:w-14 h-13 md:h-14 rounded-full border-white border-[2px] -ml-3"
                src="/image/avatar-3.webp"
                alt="avatar3"
                width={50}
                height={50}
              />
              <Image
                className="w-13 md:w-14 h-13 md:h-14 rounded-full border-white border-[2px] -ml-3"
                src="/image/avatar-4.webp"
                alt="avatar4"
                width={50}
                height={50}
              />
            </div>

            <div className="w-fit flex flex-col items-center justify-center">
              <div className="text-[1.5vh] md:text-[2.3vh] font-[800] text-black font-['figtree']">
                Our Happy Customers
              </div>
              <div className="flex items-center">
                <span className="text-[3vw] md:text-sm -ml-[1.4vh] mr-1">
                  ⭐
                </span>
                <span className="tracking-tighter text-[1.8vh] md:text-[2.4vh] font-[600] text-zinc-700 mr-1">
                  4.9
                </span>
                <span className="text-zinc-600 text-[1.8vh] md:text-[2.4vh] tracking-tighter">
                  (12.8k reviews)
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-[13.6px] md:text-[1.03vw] text-zinc-600 w-full md:w-[27vw] font-[500] leading-[1.9] mt-8 font-['Fredoka']">
            For Better Service Download Our Mobile App Now
          </h1>

          <div className="flex items-center gap-5 mt-3">
            <Image
              className="w-[47vw] md:w-[13.63vw]"
              src="/image/btn-google-play.webp"
              alt="appStore"
              width={300}
              height={300}
            />
            <Image
              className="w-[47vw] md:w-[13.63vw]"
              src="/image/btn-app-store.webp"
              alt="googlePlay"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="explore w-full h-[1850px] lg:h-[178vh] xl:h-[135vh] mt-[100px] md:mt-[15vh] lg:mt-[25.5vh]">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl md:text-3xl text-center">
          Explore
        </h3>
        <h1 className="font-['figtree'] text-[25px] md:text-[8.7vh] text-center font-[900] mt-3.5 md:mt-4">
          Our Delicious Menu
        </h1>

        {/* Explore Cards */}
        <div className="w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-[75vw] flex flex-wrap items-center justify-center gap-10 md:gap-[7vh]">
            <div className="w-[315px] md:w-[48vh] h-[240px] md:h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-30 md:w-40 h-30 md:h-40"
                src="/image/food-menu-1.webp"
                alt="menu1"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cakes</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                3 Menu
              </h2>
            </div>

            <div className="w-[315px] md:w-[48vh] h-[240px] md:h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-30 md:w-40 h-30 md:h-40"
                src="/image/food-menu-2.webp"
                alt="menu2"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cupcakes</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                3 Menu
              </h2>
            </div>
            <div className="w-[315px] md:w-[48vh] h-[240px] md:h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-30 md:w-40 h-30 md:h-40"
                src="/image/food-menu-3.webp"
                alt="menu3"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Donuts</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                2 Menu
              </h2>
            </div>
            <div className="w-[315px] md:w-[48vh] h-[240px] md:h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-30 md:w-40 h-30 md:h-40"
                src="/image/food-menu-4.webp"
                alt="menu4"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cookies</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                1 Menu
              </h2>
            </div>
            <div className="w-[315px] md:w-[48vh] h-[240px] md:h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-30 md:w-40 h-30 md:h-40"
                src="/image/food-menu-5.webp"
                alt="menu5"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Macarons</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                0 Menu
              </h2>
            </div>
            <div className="w-[315px] md:w-[48vh] h-[240px] md:h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-30 md:w-40 h-30 md:h-40"
                src="/image/food-menu-6.webp"
                alt="menu6"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Drinks</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                0 Menu
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="w-full h-[640px] md:h-[200vh] lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between">
        <div className="left-imgs w-full h-[400px] md:h-[90vh] flex md:items-center justify-center gap-3 md:gap-8 px-3 md:px-[2.8vh]">
          <Image
            className="w-[200px] lg:w-[21vw] h-[280px] md:h-[67vh] rounded-2xl mt-5 object-cover"
            src="/image/about-us-1.webp"
            alt=""
            width={800}
            height={800}
          />
          <Image
            className="w-[200px] lg:w-[21vw] h-[280px] md:h-[67vh] rounded-2xl mt-[60px] md:mt-[11vh] object-cover"
            src="/image/about-us-2.webp"
            alt=""
            width={800}
            height={800}
          />
        </div>

        <div className="right-details w-full lg:w-1/2 h-[90vh] py-10 px-4 md:px-[8.1vh]">
          <h3 className="text-[#DB6885] text-xl md:text-[2.15vw] font-black font-['Fredoka']">
            About us
          </h3>
          <h1 className="font-['figtree'] font-[900] text-[25px] md:text-[8.6vh] mt-3">
            Welcome to Fofood
          </h1>
          <p className="w-full md:w-[35vw] text-zinc-600 text-[15px] md:text-[2.6vh] leading-[1.8] md:leading-[2.1] mt-4 md:mt-6">
            Welcome to Fofood, where we‘re committed to combating food deserts.
            Our goal is to ensure everyone has access to fresh, healthy, and
            affordable food, regardless of their location. Join us in creating a
            brighter future for all.
          </p>
          <button className="px-9 md:px-[2.85vw] text-lg tracking-tight py-[17.5px] md:py-[2.7vh] bg-white border border-[#DB6885] hover:bg-[#DB6885] rounded-full text-[#DB6885] hover:text-white transition-all ease-linear duration-200 font-['figtree'] font-[900] text-[15px] md:text-[2.6vh] mt-6">
            Read More
          </button>
        </div>
      </div>

      {/* Popular Menu */}
      <PopularMenuCards />

      {/* Testimonial */}
      {/* <div className="relative w-full h-[150vh]">
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
                className="w-14 h-14 rounded-full border-white border-[2px]"
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
                className="w-14 h-14 rounded-full border-white border-[2px]"
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
      </div> */}

      {/* Our Blog */}
      <div className="flex flex-col h-[2680px] md:h-[182vh] gap-8.5 mb-44 -mt-14 md:mt-0">
        <div className="md:mt-13">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl md:text-3xl text-center">
            Our Blog
          </h3>
          <h1 className="font-['figtree'] text-[25px] md:text-[8.7vh] text-center font-[900] mt-4">
            Latest Post
          </h1>
        </div>
        <OurBlog />
      </div>
    </>
  );
};

export default Homepage;

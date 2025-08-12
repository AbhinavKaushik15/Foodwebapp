"use client";
import React, { useEffect } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | Fofood";
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[100vh] bg-[#FFF4F5]">
        <Image
          className="absolute top-0 right-0 w-[34.75vw]"
          src="/image/hero-shape.png"
          alt="shape"
          width={1000}
          height={1000}
        />

        <Image
          className="absolute top-[13.1vh] right-[44.5px] w-[47.45vw]"
          src="/image/hero-cake.webp"
          alt="shape"
          width={1000}
          height={1000}
        />

        <div className="absolute w-[50vw] xl:h-[120vh] left-4">
          <h1 className="text-[#DB6885] text-[2vw] mt-2 font-black font-['Fredoka']">
            Welcome to Fofood
          </h1>

          <h1 className="text-[5vw] tracking-tight leading-[1.3] mt-5 font-black text-[#2F3137] font-['Figtree']">
            Super Delicious Food Special for You
          </h1>
          <p className="lg:text-[1.9vw] xl:text-[1.32vw] text-zinc-500 font-['figtree'] lg:w-[43vw] xl:w-[27vw] font-[500] leading-[1.9] mt-7">
            Order your favorites food from anywhere and get delivery at your
            door
          </p>

          <div className="flex items-center gap-5 mt-[5.1vh]">
            <button className="px-[3.1vw] text-lg tracking-tight py-[2.8vh] shadow-[#DB6885] shadow-2xl bg-[#DB6885] hover:bg-[#FFC008] rounded-full text-white hover:text-black transition-all ease-linear duration-200">
              Order Now
            </button>
            <button className="px-[2.85vw] text-lg tracking-tight py-[2.7vh] bg-white border border-[#DB6885] hover:bg-[#DB6885] rounded-full text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
              Learn More
            </button>
          </div>

          <div className="w-[54.3vh] flex items-center justify-between mt-[10.8vh]">
            <div className="flex">
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px]"
                src="/image/avatar-1.webp"
                alt="avatar1"
                width={50}
                height={50}
              />
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px] -ml-3"
                src="/image/avatar-2.webp"
                alt="avatar2"
                width={50}
                height={50}
              />
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px] -ml-3"
                src="/image/avatar-3.webp"
                alt="avatar3"
                width={50}
                height={50}
              />
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px] -ml-3"
                src="/image/avatar-4.webp"
                alt="avatar4"
                width={50}
                height={50}
              />
            </div>

            <div className="w-fit flex flex-col items-center justify-center">
              <div className="text-[2.3vh] font-[800] text-black font-['figtree']">
                Our Happy Customers
              </div>
              <div className="flex items-center">
                <span className="text-sm -ml-[1.4vh] mr-1">⭐</span>
                <span className="tracking-tighter text-[2.4vh] font-[600] text-zinc-700 mr-1">
                  4.9
                </span>
                <span className="text-zinc-600 text-[2.4vh] tracking-tighter">
                  (12.8k reviews)
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-[1.03vw] text-zinc-600 w-[27vw] font-[500] leading-[1.9] mt-8 font-['Fredoka']">
            For Better Service Download Our Mobile App Now
          </h1>

          <div className="flex items-center gap-5 mt-3">
            <Image
              className="w-[13.63vw]"
              src="/image/btn-google-play.webp"
              alt="appStore"
              width={300}
              height={300}
            />
            <Image
              className="w-[13.63vw]"
              src="/image/btn-app-store.webp"
              alt="googlePlay"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="explore w-full lg:h-[178vh] xl:h-[135vh] mt-[15vh] lg:mt-[25.5vh]">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
          Explore
        </h3>
        <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
          Our Delicious Menu
        </h1>

        {/* Explore Cards */}
        <div className="w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-[75vw] flex flex-wrap items-center justify-center gap-[7vh]">
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
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
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
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
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
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
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
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
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
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
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
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
      <div className="w-full md:h-[200vh] lg:h-[100vh] flex md:flex-col lg:flex-row items-center justify-between">
        <div className="left-imgs w-full lg:w-1/2 h-[90vh] flex md:items-center md:justify-center gap-8 px-[2.8vh]">
          <Image
            className="w-[35vw] lg:w-[21vw] h-[67vh] rounded-2xl mt-5 object-cover"
            src="/image/about-us-1.webp"
            alt=""
            width={800}
            height={800}
          />
          <Image
            className="w-[35vw] lg:w-[21vw] h-[67vh] rounded-2xl mt-[11vh] object-cover"
            src="/image/about-us-2.webp"
            alt=""
            width={800}
            height={800}
          />
        </div>

        <div className="right-details w-full lg:w-1/2 h-[90vh] py-10 px-[8.1vh]">
          <h3 className="text-[#DB6885] text-[2.15vw] font-black font-['Fredoka']">
            About us
          </h3>
          <h1 className="font-['figtree'] font-[900] text-[8.6vh] mt-3">
            Welcome to Fofood
          </h1>
          <p className="w-[35vw] text-zinc-600 text-[2.6vh] leading-[2.1] mt-6">
            Welcome to Fofood, where we‘re committed to combating food deserts.
            Our goal is to ensure everyone has access to fresh, healthy, and
            affordable food, regardless of their location. Join us in creating a
            brighter future for all.
          </p>
          <button className="px-[6.8vh] font-['figtree'] font-[900] text-[#DB6885] text-[2.6vh] border border-[#DB6885] py-[2.88vh] rounded-full mt-6">
            Read More
          </button>
        </div>
      </div>

      {/* Popular Menu */}
      <div className="relative w-full h-[190vh] mt-[11.2vh]">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
          Popular Menu
        </h3>
        <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
          Most Popular Food
        </h1>

        {/* Popular Food List */}
        <div className="w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-full flex flex-wrap items-center justify-center -mt-5 gap-[4vh] px-2">
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-1.webp"
                alt="food-1"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Chococheese Cake
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $2.5
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-2.webp"
                alt="food-2"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Pink Donuts
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $2.8
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-3.webp"
                alt="food-3"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Choco Cake
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $2.9
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-4.webp"
                alt="food-4"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Sweet Cake
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $2.3
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-5.webp"
                alt="food-5"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Pink Sweet
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $2.1
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-6.webp"
                alt="food-6"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Choco Cookies
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $2.8
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-7.webp"
                alt="food-7"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Sweet Donuts
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $1.8
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center">
              <Image
                className="w-[34vh] h-[34vh] absolute top-5"
                src="/image/food-8.webp"
                alt="food-8"
                width={100}
                height={100}
              />
              <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                    Sweet Choco
                  </h1>
                  <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                    $3.6
                  </h2>
                </div>

                <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                  <div className="flex gap-2">
                    <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                      <Heart />
                    </div>
                    <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="absolute left-1/2 -translate-x-1/2 bottom-[162px] px-[6.8vh] font-['figtree'] font-[900] text-[#DB6885] text-[2.55vh] border border-[#DB6885] py-[2.88vh] rounded-full mt-6">
          See All Menu
        </button>
      </div>

      {/* Testimonial */}
      <div className="relative w-full h-[150vh]">
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

      {/* Our Blog */}
      <div className="w-full h-[123vh]">
        <div className="mt-14">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
            Our Blog
          </h3>
          <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
            Latest Post
          </h1>
        </div>

        <div className="w-full h-[70vh] flex items-center justify-between px-4 mt-18">
          <div className="left h-full w-[31vw] flex flex-col gap-7">
            <Image
              className="w-full h-[43vh] rounded-2xl object-cover"
              src="/image/article-1.jpg"
              alt="article-1"
              width={1000}
              height={1000}
            />
            <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
              How To Cook The Sweet Cupcakes with Strawberry Honey
            </h1>
            <Link
              className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
              href=""
            >
              Read More ››
            </Link>
          </div>
          <div className="middle h-full w-[31vw] flex flex-col gap-7">
            <Image
              className="w-full h-[43vh] rounded-2xl object-cover"
              src="/image/article-2.jpg"
              alt="article-2"
              width={1000}
              height={1000}
            />
            <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
              Donut topping recommendations for donut lovers
            </h1>
            <Link
              className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
              href=""
            >
              Read More ››
            </Link>
          </div>
          <div className="right h-full w-[31vw] flex flex-col gap-7">
            <Image
              className="w-full h-[43vh] rounded-2xl object-cover"
              src="/image/article-3.jpg"
              alt="article-3"
              width={1000}
              height={1000}
            />
            <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
              How To Cook The Sweet Macarons with Strawberry Cream
            </h1>
            <Link
              className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
              href=""
            >
              Read More ››
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="relative w-full min-h-[80vh] md:min-h-[250vh] mt-20 md:mt-0">
      <Image
        className="absolute w-[92vw] md:w-[96vw] h-[85vh] md:h-[130vh] left-1/2 -translate-x-1/2 object-cover"
        src="/image/bg-testimonial.jpg"
        alt="testimonialBG"
        width={1000}
        height={1000}
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-12 md:top-24">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl md:text-3xl text-center">
          Testimonial
        </h3>
        <h1 className="font-['figtree'] text-[25px] md:text-[8.7vh] text-center font-[900] mt-2 md:mt-4">
          What People Say
        </h1>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper absolute top-42 md:top-[44.5vh] w-[74vw] md:w-[56.5vw] h-[52vh] md:h-[56.5vh] bg-white rounded-2xl"
      >
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-full flex flex-col gap-4 items-center justify-center">
            <Image
              className="w-11 md:w-14 h-11 md:h-14 rounded-full border-white border-[2px]"
              src="/image/avatar-1.webp"
              alt="avatar1"
              width={50}
              height={50}
            />
            <h1 className="text-md md:text-xl font-[900] font-['figtree']">
              It's very Delicious!
            </h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="w-full text-sm md:text-lg text-center font-['figtree'] font-[500] text-zinc-700 leading-[1.8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              architecto adipisci corporis similique non quisquam omnis, nulla
              natus, fugiat quae accusantium fuga molestiae iusto quas!
            </p>
            <h1 className="font-['Fredoka'] font-[900] text-[#DB6885]">
              Abhinav Kaushik
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-full flex flex-col gap-4 items-center justify-center">
            <Image
              className="w-11 md:w-14 h-11 md:h-14 rounded-full border-white border-[2px]"
              src="/image/avatar-2.webp"
              alt="avatar1"
              width={50}
              height={50}
            />
            <h1 className="text-md md:text-xl font-[900] font-['figtree']">
              It's very Delicious!
            </h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="w-full text-sm md:text-lg text-center font-['figtree'] font-[500] text-zinc-700 leading-[1.8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              architecto adipisci corporis similique non quisquam omnis, nulla
              natus, fugiat quae accusantium fuga molestiae iusto quas!
            </p>
            <h1 className="font-['Fredoka'] font-[900] text-[#DB6885]">
              Harsh Kaushik
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;

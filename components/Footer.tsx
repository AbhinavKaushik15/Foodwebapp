import { Clock5, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full h-[1150px] md:h-[170vh] lg:h-[115.6vh]">
      <Image
        className="w-full h-[1150px] md:h-[170vh] lg:h-[115.6vh] object-cover"
        src="/image/footer.jpg"
        alt="footer"
        width={1000}
        height={1000}
      />

      {/* newsletter-section */}
      <div className="w-full absolute -top-6 md:top-0 px-5 py-[7.2vh] lg:py-[11.95vh] flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between">
        <h1 className="text-[26.9px] lg:text-[3.2vw] xl:text-[4.05vw] text-white font-['figtree'] font-[900]">
          Newsletter Subscribe
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-5">
          <input
            type="text"
            className="placeholder:text-white text-white border-white w-[92vw] lg:w-[66vh] border-[1px] outline-none px-10 md:px-[7vh] py-4 md:py-[3.1vh] rounded-full font-['figtree'] font-[900]"
            placeholder="Email Address"
          />
          <button className="text-[#DB6885] bg-[#fff] font-['figtree'] px-11 md:px-[7.2vh] tracking-tight py-4.5 md:py-[3.2vh] rounded-full font-[900] text-[15px] md:text-[2.1vw] lg:text-[1.2vw]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* newsletter underline */}
      <div className="absolute top-[280px] md:top-[50vh] lg:top-[35vh] w-[92vw] md:w-[88vw] lg:w-[96.5vw] border-[0.1px] border-[#ffffff61] left-1/2 -translate-x-1/2"></div>

      {/* footer Links Section */}
      <div className="absolute top-[315px] md:top-[56.5vh] lg:top-[45.9vh] w-full px-5 md:px-14 lg:px-5 flex justify-between flex-wrap gap-12 sm:gap-12 md:gap-14 lg:gap-0">
        {/* logo */}
        <div className="w-[400px] md:w-[67.5vh] h-full flex flex-col">
          <Link href="/">
            <img
              className="w-[110px]"
              src="/image/logo-white.webp"
              alt="logo-white"
              width={130}
              height={130}
            />
          </Link>
          <div className="mt-5 md:mt-10 flex flex-col gap-3.5 md:gap-6.5">
            <div className="email text-white font-['figtree'] flex items-center gap-2">
              <Mail className="text-white font-[100] w-4 h-4" />
              <h1 className="text-lg font-[900] tracking-tight">Email us :</h1>
              <p>abhinav@gmail.com</p>
            </div>
            <div className="phone text-white font-['figtree'] flex items-center gap-2">
              <Phone className="text-white font-[100] w-4 h-4" />
              <h1 className="text-lg font-[900] tracking-tight">Call :</h1>
              <p>+91-9084773936</p>
            </div>
            <div className="working text-white font-['figtree'] flex items-center gap-2">
              <Clock5 className="text-white font-[100] w-4 h-4" />
              <h1 className="text-lg font-[900] tracking-tight whitespace-nowrap">
                Working Hours :
              </h1>
              <p>Monday - Friday, 08 am - 05 pm</p>
            </div>
          </div>
          {/* social-links */}
          <div className="text-white flex items-center gap-5 mt-4 md:mt-8">
            <Link
              href="https://www.facebook.com/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff43] hover:bg-white hover:text-black  text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/accounts/login/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff43] hover:bg-white hover:text-black  text-2xl"
            >
              <IoLogoInstagram />
            </Link>
            <Link
              href="https://web.whatsapp.com/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff43] hover:bg-white hover:text-black  text-2xl"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* Quick Link 1 */}
        <div className="md:w-[25vh] h-full text-white flex flex-col gap-4 md:gap-7.5">
          <h1 className="font-['Fredoka'] font-[900] text-[22px] md:text-[3.3vh]">
            Quick Links 1
          </h1>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/about"
          >
            About
          </Link>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/blog"
          >
            Blog
          </Link>
        </div>
        {/* Quick Link 2 */}
        <div className="md:w-[25vh] h-full text-white flex flex-col gap-4 md:gap-7.5">
          <h1 className="font-['Fredoka'] font-[900] text-[22px] md:text-[3.3vh]">
            Quick Links 2
          </h1>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/my-favorites"
          >
            My favorites
          </Link>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/my-cart"
          >
            My Cart
          </Link>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/"
          >
            Empty State
          </Link>
          <Link
            className="font-['figtree'] font-[600] hover:underline"
            href="/contact"
          >
            Contact us
          </Link>
        </div>
        {/* Download */}
        <div className="w-[30vh] h-full font-['Fredoka'] text-white flex flex-col gap-6">
          <h1 className="font-['Fredoka'] font-[900] text-[22px] md:text-[3.3vh] mb-1">
            Download Our App
          </h1>
          <Link href="https://play.google.com/store/games?hl=en_IN">
            <Image
              className="w-[30vw] md:w-[11.5vw]"
              src="/image/btn-google-play.webp"
              alt="appStore"
              width={300}
              height={300}
            />
          </Link>
          <Link href="https://www.apple.com/in/app-store/">
            <Image
              className="w-[30vw] md:w-[11.5vw] mt-1"
              src="/image/btn-app-store.webp"
              alt="googlePlay"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>

      {/* footer Links Section underline */}
      <div className="absolute top-[1063px] md:top-[155.5vh] lg:top-[101.8vh]  w-[92vw] md:w-[88vw] lg:w-[96.5vw] border-[0.1px] border-[#ffffff61] left-1/2 -translate-x-1/2"></div>

      {/* Copyright */}
      <div className="absolute w-fit bottom-8 text-white left-1/2 -translate-x-1/2">
        <div className="font-['figtree'] text-[3.5vw] md:text-[2.5vh] whitespace-nowrap">
          Copyright <span className="font-[900]">Abhinav Studio</span> 2025 All
          Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

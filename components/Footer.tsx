import { Clock5, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full h-[115.6vh]">
      <div>
        <Image
          className="w-full h-[115.6vh]"
          src="/image/footer.jpg"
          alt="footer"
          width={1000}
          height={1000}
        />

        {/* newsletter-section */}
        <div className="w-full absolute top-0 px-5 py-[11.95vh] flex items-center justify-between">
          <h1 className="text-[4.05vw] text-white font-['figtree'] font-[900]">
            Newsletter Subscribe
          </h1>

          <div className="flex items-center gap-5">
            <input
              type="text"
              className="placeholder:text-white text-white border-white w-[66vh] border-[2.5px] outline-none px-[7vh] py-[3.1vh] rounded-full font-['figtree'] font-[900]"
              placeholder="Email Address"
            />
            <button className="text-[#DB6885] bg-[#fff] font-['figtree'] px-[7.2vh] tracking-tight py-[3.2vh] rounded-full font-[900] text-[1.2vw]">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* newsletter underline */}
        <div className="absolute top-[35vh] w-[96.5vw] border-[0.1px] border-[#ffffff61] left-1/2 -translate-x-1/2"></div>

        {/* footer Links Section */}
        <div className="absolute top-[45.9vh] w-full h-[53vh] px-5 flex items-center">
          {/* logo */}
          <div className="w-[67.5vh] h-full flex flex-col">
            <Image
              src="/image/logo-white.webp"
              alt="logo-white"
              width={130}
              height={130}
            />
            <div className="mt-10 flex flex-col gap-6.5">
              <div className="email text-white font-['figtree'] flex items-center gap-2">
                <Mail className="text-white font-[100] w-4 h-4" />
                <h1 className="text-lg font-[900] tracking-tight">
                  Email us :
                </h1>
                <p>abhinavsharmaas20000@gmail.com</p>
              </div>
              <div className="email text-white font-['figtree'] flex items-center gap-2">
                <Phone className="text-white font-[100] w-4 h-4" />
                <h1 className="text-lg font-[900] tracking-tight">Call :</h1>
                <p>+91-9084773936</p>
              </div>
              <div className="email text-white font-['figtree'] flex items-center gap-2">
                <Clock5 className="text-white font-[100] w-4 h-4" />
                <h1 className="text-lg font-[900] tracking-tight">
                  Working Hours
                </h1>
                <p>Monday - Friday, 08 am - 05 pm</p>
              </div>
            </div>
            {/* social-links */}
            <div className="text-white flex items-center gap-5 mt-8">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff43] hover:bg-white hover:text-black  text-xl">
                <FaFacebookF />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff43] hover:bg-white hover:text-black  text-2xl">
                <IoLogoInstagram />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff43] hover:bg-white hover:text-black  text-2xl">
                <FaWhatsapp />
              </div>
            </div>
          </div>

          {/* Quick Link 1 */}
          <div className="w-[25vh] h-full text-white flex flex-col gap-7.5 ml-[12vh]">
            <h1 className="font-['Fredoka'] font-[900] text-[3.3vh]">
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
          <div className="w-[25vh] h-full text-white flex flex-col gap-7.5 ml-[22vh]">
            <h1 className="font-['Fredoka'] font-[900] text-[3.3vh]">
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
          <div className="w-[30vh] h-full font-['Fredoka'] text-white flex flex-col gap-6 ml-[22vh]">
            <h1 className="font-['Fredoka'] font-[900] text-[3.3vh] mb-1">
              Download Our App
            </h1>
            <Image
              className="w-[11.5vw]"
              src="/image/btn-google-play.webp"
              alt="appStore"
              width={300}
              height={300}
            />
            <Image
              className="w-[11.5vw] mt-1"
              src="/image/btn-app-store.webp"
              alt="googlePlay"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* footer Links Section underline */}
        <div className="absolute top-[101.8vh] w-[96.5vw] border-[0.1px] border-[#ffffff61] left-1/2 -translate-x-1/2"></div>

        {/* Copyright */}
        <div className="absolute w-fit bottom-8 text-white left-1/2 -translate-x-1/2">
          <h1 className="font-['figtree'] text-[2.5vh]">
            Copyright <span className="font-[900]">Abhinav Studio</span> 2025
            All Right Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const signup = () => {
  return (
    <>
      <div className="w-full min-h-[155vh]">
        <Image
          className="absolute top-0 right-0 w-[32vw]"
          src="/image/hero-shape.png"
          alt="shape"
          width={1000}
          height={1000}
        />

        <Image
          className="absolute top-[10vh] right-[70px] w-[37.45vw]"
          src="/image/hero-cake.webp"
          alt="cake-shape"
          width={800}
          height={800}
        />
      </div>

      <div className="absolute top-34 left-[25vh] w-[42vw] h-[120vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-[5vh] justify-center px-[10vh]">
        <div className="flex flex-col gap-3 items-center mb-3">
          <h1 className="text-[5.5vh] font-['fredoka'] text-[#DB6885] font-[900]">
            Welcome
          </h1>
          <h1 className="text-[3.7vh] font-['figtree'] font-[900]">
            Sign up to create account
          </h1>
        </div>
        <input
          className="py-5 w-full border outline-[#DB6885] font-[500] text-xl placeholder:text-zinc-500 text-zinc-500 border-zinc-300 rounded-full px-[7vh]"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="py-5 w-full border outline-[#DB6885] font-[500] text-xl placeholder:text-zinc-500 text-zinc-500 border-zinc-300 rounded-full px-[7vh]"
          type="mail"
          placeholder="Email Address"
        />
        <input
          className="py-5 w-full border outline-[#DB6885] font-[500] text-xl border-zinc-300 rounded-full placeholder:text-zinc-500 text-zinc-500 px-[7vh]"
          type="text"
          placeholder="Password"
        />
        <button className="w-full text-white font-[500] bg-[#DB6885] py-5 rounded-full text-lg hover:text-black hover:bg-[#FEBE0B] transition-all duration-200 ease-linear">
          Create Account
        </button>
        <div className="w-full h-[1px] bg-zinc-200"></div>
        <button className="btn bg-white text-black w-full font-[500] py-7 rounded-full text-lg hover:text-black transition-all duration-200 ease-linear">
          <svg
            aria-label="Google logo"
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p>
          Have an account?
          <Link className="text-[#DB6885] ml-1" href="/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default signup;

"use client";
import { useAuth } from "@/contexts/AuthContext";
import { auth, fireDb } from "@/lib/firestore/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface LoginContextValue {
  isLoading: boolean;
  handleLogin: () => void;
  handleGoogleLogin: () => void;
}
const Login: React.FC<LoginContextValue> = () => {
  const { saveUserToFirestore } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    if (!email || !password) {
      toast.error("All fields are required!");
    }
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = res.user;

      await saveUserToFirestore(loggedInUser, false);

      localStorage.setItem("user", JSON.stringify(loggedInUser));
      toast.success("Login Successfull.");
      if (loggedInUser.email === "abhinavsharmaas20000@gmail.com") {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Login failed!");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const loggedInUser = res.user;

      await saveUserToFirestore(loggedInUser, true);

      localStorage.setItem("user", JSON.stringify(loggedInUser));
      toast.success("Login Successfull.");
      if (loggedInUser.email === "abhinavsharmaas20000@gmail.com") {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }
    } catch (error) {
      toast.error("Login failed!");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-[140vh]">
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

      <div className="absolute top-34 left-[25vh] w-[42vw] h-[105vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-[5vh] justify-center px-[10vh]">
        <div className="flex flex-col gap-3 items-center mb-3">
          <h1 className="text-[5.5vh] font-['fredoka'] text-[#DB6885] font-[900]">
            Welcome
          </h1>
          <h1 className="text-[3.7vh] font-['figtree'] font-[900]">
            Sign in to your account
          </h1>
        </div>
        <input
          className="py-5 w-full border outline-[#DB6885] font-[500] text-xl placeholder:text-zinc-500 text-zinc-500 border-zinc-300 rounded-full px-[7vh]"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          className="py-5 w-full border outline-[#DB6885] font-[500] text-xl border-zinc-300 rounded-full placeholder:text-zinc-500 text-zinc-500 px-[7vh]"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="w-full text-white font-[500] bg-[#DB6885] py-5 rounded-full text-lg hover:text-black hover:bg-[#FEBE0B] transition-all duration-200 ease-linear"
        >
          Sign in
        </button>
        <div className="w-full h-[1px] bg-zinc-200"></div>
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className={`btn bg-white text-black w-full font-[500] py-7 rounded-full text-lg hover:text-black transition-all duration-200 ease-linear`}
        >
          <svg
            aria-label="Google logo"
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`${isLoading ? "hidden" : "flex"}`}
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
          {isLoading ? "Loading..." : "Login with Google"}
        </button>
        <p>
          Don't have an account?
          <Link className="text-[#DB6885] ml-1" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;

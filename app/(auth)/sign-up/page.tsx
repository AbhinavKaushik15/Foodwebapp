"use client";
import { auth, fireDb } from "@/lib/firestore/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function signup() {
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

      <SignUpAuth />
    </>
  );
}

function SignUpAuth() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const SignupAccount = async () => {
    setLoading(true);
    if (!fullName || !email || !password) {
      toast.error("All fields are required!");
    }
    try {
      const users = createUserWithEmailAndPassword(auth, email, password);
      var user = {
        fullName: fullName,
        uid: (await users).user.uid,
        email: (await users).user.email,
      };
      const userRef = collection(fireDb, "users");
      await addDoc(userRef, user);
      toast.success("Signup Successfully.");
      setFullName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      toast.error("Sign-up failed!");
      setLoading(false);
    }
  };
  return (
    <div className="absolute top-34 left-[25vh] w-[42vw] h-[110vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-[5vh] justify-center px-[10vh]">
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
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
      />
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
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        onClick={SignupAccount}
        className="w-full text-white font-[500] bg-[#DB6885] py-5 rounded-full text-lg hover:text-black hover:bg-[#FEBE0B] transition-all duration-200 ease-linear"
      >
        Create Account
      </button>
      <p>
        Have an account?
        <Link className="text-[#DB6885] ml-1" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

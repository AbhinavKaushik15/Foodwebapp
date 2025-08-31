"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ChatbotIcon = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <Link
      href={user ? "/chatbot" : "/login"}
      className={`fixed right-10 bottom-30 z-[10] ${pathname === "/chatbot" ? "hidden" : "flex"}`}
    >
      <div className="group relative bg-black border-4 border-[#DB6885] w-16 h-16 rounded-full flex items-center justify-center">
        <button>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            height="44"
            width="44"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 hover:scale-105 duration-200 stroke-white hover:stroke-[#DB6885]"
            fill="none"
          >
            <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
          </svg>
        </button>
        <span className="absolute -top-22 left-[50%] w-24 -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          {user ? "Fofood AI Chatbot" : "First login, then chat with me"}
          <span> </span>
        </span>
      </div>
    </Link>
  );
};

export default ChatbotIcon;

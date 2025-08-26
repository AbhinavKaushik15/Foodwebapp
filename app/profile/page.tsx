"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function profile() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <ProtectedRoute>
      <div className="relative w-full h-[120vh] text-xl font-[700] flex flex-col items-center">
        {/* Side User Profile list */}
        <div className="absolute w-[18vw] h-[47vh] bg-zinc-100 top-28 left-10 rounded-lg p-5">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl">
            User Profile
          </h3>

          <ul className="w-full flex flex-col gap-1 mt-2">
            <li className="text-md font-[400] text-zinc-600 hover:bg-[#DB6885] w-53 hover:text-white px-3 py-1 rounded-lg">
              <Link href="/order">Order</Link>
            </li>
            <li className="text-md font-[400] text-zinc-600 hover:bg-[#DB6885] w-53 hover:text-white px-3 py-1 rounded-lg">
              <Link href="/address">Address</Link>
            </li>
            <li className="text-md font-[400] text-zinc-600 hover:bg-[#DB6885] w-53 hover:text-white px-3 py-1 rounded-lg">
              <Link href="/payment">Payment</Link>
            </li>
            <li className="text-md font-[400] text-zinc-600 hover:bg-[#DB6885] w-53 hover:text-white px-3 py-1 rounded-lg">
              <Link href="/wishlist">Wishlist</Link>
            </li>
          </ul>

          <div className="w-full h-[0.4px] bg-zinc-300 mt-3"></div>

          <LogoutButton />
        </div>

        {/* Center User Profile */}
        <div>
          {/* User Profile */}
          <div className="w-[50vw] mt-28 flex flex-col ">
            <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl">
              User Profile
            </h3>
            <p className="text-sm font-[400] text-zinc-700">
              Manage your details, view your tier status and changeyour
              password.
            </p>
          </div>

          <div className="relative w-[50vw] h-[80vh] mt-5 flex flex-col">
            <div className="w-full flex justify-between">
              {/* DP */}
              <div className="border border-zinc-400 w-54 h-60 rounded-lg flex items-center justify-center flex-col gap-2">
                <div className="w-40 h-40 rounded-full border border-zinc-200 hover:border hover:border-[#DB6885]"></div>
                <h1>{user?.email?.split("@")[0]}</h1>
              </div>

              {/* General Profile */}
              <div className="border border-zinc-400 w-[33vw] h-60 rounded-lg flex flex-col p-5 items-start justify-center gap-4">
                <h1>General information</h1>
                <div className="w-full flex items-center justify-between">
                  <div className="relative">
                    <input
                      className="px-3 pt-5 pb-1 w-49 border border-zinc-200 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
                      type="text"
                      placeholder="Abhinav"
                    />
                    <h1 className="absolute top-1 text-xs text-zinc-500 left-3">
                      First name
                    </h1>
                  </div>

                  <div className="relative">
                    <input
                      className="px-3 pt-5 pb-1 w-49 border border-zinc-200 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
                      type="text"
                      placeholder="Kaushik"
                    />
                    <h1 className="absolute top-1 text-xs text-zinc-500 left-3">
                      Last name
                    </h1>
                  </div>
                </div>
                <button className="px-3 py-2 cursor-pointer text-md bg-zinc-300 hover:bg-zinc-400 text-white rounded-lg">
                  Update
                </button>
              </div>
            </div>

            {/* Security */}
            <div className="w-[50vw] h-[33vh] mt-6 border border-zinc-400  rounded-lg p-5">
              <h1 className="">Security</h1>

              {/* three inputs */}
              <div className="flex items-center justify-between mt-5  ">
                <div className="relative">
                  <input
                    className="px-3 pt-5 pb-1 w-49 border border-zinc-200 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
                    type="text"
                    placeholder="address@gmail.com"
                  />
                  <h1 className="absolute top-1 text-xs text-zinc-500 left-3">
                    Email
                  </h1>
                </div>

                <div className="relative">
                  <input
                    className="px-3 pt-5 pb-1 w-49 border border-zinc-200 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
                    type="text"
                    placeholder="•••••••••••"
                  />
                  <h1 className="absolute top-1 text-xs text-zinc-500 left-3">
                    Password
                  </h1>
                </div>

                <div className="relative">
                  <input
                    className="px-3 pt-5 pb-1 w-49 border border-zinc-200 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
                    type="text"
                    placeholder="+91-9876543210"
                  />
                  <h1 className="absolute top-1 text-xs text-zinc-500 left-3">
                    Phone number
                  </h1>
                </div>
              </div>

              {/* two buttons */}
              <div className="flex items-center gap-5 mt-5">
                <button className="px-3 py-2 cursor-pointer text-md border-2 border-[#DB6885] hover:border-[#DB6885] text-[#DB6885] hover:bg-[#DB6885] hover:text-white transition-all duration-200 ease-linear rounded-lg font-[500]">
                  Change Password
                </button>
                <button className="px-3 py-2 cursor-pointer text-md border-2 border-[#DB6885] hover:border-[#DB6885] text-[#DB6885] hover:bg-[#DB6885] hover:text-white transition-all duration-200 ease-linear rounded-lg font-[500]">
                  Change phone number
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

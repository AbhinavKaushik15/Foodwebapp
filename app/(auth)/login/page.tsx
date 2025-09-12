// "use client";
// import { useAuth } from "@/contexts/AuthContext";
// import { auth } from "@/lib/firestore/firebase";
// import {
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// interface LoginContextValue {
//   isLoading: boolean;
//   handleLogin: () => void;
//   handleGoogleLogin: () => void;
// }

// export default function Login: React.FC<LoginContextValue> =  {
//   useEffect(() => {
//     document.title = "Login | Fofood";
//   }, []);

//   // const { saveUserToFirestore } = useAuth();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     setIsLoading(true);
//     if (!email || !password) {
//       toast.error("All fields are required!");
//     }
//     try {
//       const res = await signInWithEmailAndPassword(auth, email, password);
//       const loggedInUser = res.user;

//       // await saveUserToFirestore(loggedInUser);

//       localStorage.setItem("user", JSON.stringify(loggedInUser));
//       if (loggedInUser.email === "abhinav@gmail.com") {
//         toast.success("You are logged in as Admin.");
//         router.push("/");
//       } else {
//         toast.success("Login Successfull.");
//         router.push("/");
//       }
//       setEmail("");
//       setPassword("");
//     } catch (error: any) {
//       toast.error(error?.message || "Something went wrong!");
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setIsLoading(true);
//     try {
//       const res = await signInWithPopup(auth, new GoogleAuthProvider());
//       const loggedInUser = res.user;

//       // await saveUserToFirestore(loggedInUser);

//       localStorage.setItem("user", JSON.stringify(loggedInUser));
//       if (loggedInUser.email === "abhinav@gmail.com") {
//         toast.success("You are logged in as Admin.");
//         router.push("/");
//       } else {
//         toast.success("Login Successfull.");
//         router.push("/");
//       }
//     } catch (error: any) {
//       toast.error(error?.message || "Something went wrong!");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="w-full h-[800px] md:min-h-[140vh]">
//         <Image
//           className="hidden md:flex absolute top-0 right-0 w-[32vw]"
//           src="/image/hero-shape.png"
//           alt="shape"
//           width={1000}
//           height={1000}
//         />

//         <Image
//           className="hidden md:flex absolute top-[10vh] right-[70px] w-[37.45vw]"
//           src="/image/hero-cake.webp"
//           alt="cake-shape"
//           width={800}
//           height={800}
//         />
//       </div>

//       <div className="absolute top-28 md:top-34 -translate-x-1/2 md:translate-0 left-1/2 md:left-[25vh] w-[90vw] md:w-[42vw] h-[600px] md:h-[105vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-5 md:gap-[5vh] justify-center px-[10vh]">
//         <div className="flex flex-col md:gap-3 items-center mb-3">
//           <h1 className="text-[25px] md:text-[5.5vh] font-['fredoka'] text-[#DB6885] font-[900]">
//             Welcome
//           </h1>
//           <h1 className="text-[4.5vw] md:text-[3.7vh] font-['figtree'] font-[900]">
//             Sign in to your account
//           </h1>
//         </div>
//         <input
//           className="py-4 md:py-5 w-[80vw] md:w-full border outline-[#DB6885] font-[500] text-md md:text-xl placeholder:text-zinc-500 text-zinc-500 border-zinc-300 rounded-full px-8 md:px-[7vh]"
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email Address"
//         />
//         <input
//           className="py-4 md:py-5 w-[80vw] md:w-full border outline-[#DB6885] font-[500] text-md md:text-xl border-zinc-300 rounded-full placeholder:text-zinc-500 text-zinc-500 px-8 md:px-[7vh]"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-[80vw] md:w-full text-white font-[500] bg-[#DB6885] py-4 md:py-5 rounded-full text-md md:text-lg hover:text-black hover:bg-[#FEBE0B] transition-all duration-200 ease-linear"
//         >
//           Sign in
//         </button>
//         <div className="w-[80vw] md:w-full h-[1px] bg-zinc-200"></div>
//         <button
//           onClick={handleGoogleLogin}
//           disabled={isLoading}
//           className={`btn bg-white text-black w-[80vw] md:w-full font-[500] py-7 rounded-full text-md md:text-lg hover:text-black transition-all duration-200 ease-linear`}
//         >
//           <svg
//             aria-label="Google logo"
//             width="25"
//             height="25"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512"
//             className={`${isLoading ? "hidden" : "flex"}`}
//           >
//             <g>
//               <path d="m0 0H512V512H0" fill="#fff"></path>
//               <path
//                 fill="#34a853"
//                 d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//               ></path>
//               <path
//                 fill="#4285f4"
//                 d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//               ></path>
//               <path
//                 fill="#fbbc02"
//                 d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//               ></path>
//               <path
//                 fill="#ea4335"
//                 d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//               ></path>
//             </g>
//           </svg>
//           {isLoading ? "Loading..." : "Login with Google"}
//         </button>
//         <p className="text-[3.5vw] md:text-[1.2vw]">
//           Don't have an account?
//           <Link className="text-[#DB6885] ml-1" href="/sign-up">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// };

"use client";

import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firestore/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  useEffect(() => {
    document.title = "Login | Fofood";
  }, []);

  // const { saveUserToFirestore } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    if (!email || !password) {
      toast.error("All fields are required!");
      setIsLoading(false);
      return;
    }
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = res.user;

      // await saveUserToFirestore(loggedInUser);

      localStorage.setItem("user", JSON.stringify(loggedInUser));
      if (loggedInUser.email === "abhinav@gmail.com") {
        toast.success("You are logged in as Admin.");
        router.push("/");
      } else {
        toast.success("Login Successfull.");
        router.push("/");
      }
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const loggedInUser = res.user;

      // await saveUserToFirestore(loggedInUser);

      localStorage.setItem("user", JSON.stringify(loggedInUser));
      if (loggedInUser.email === "abhinav@gmail.com") {
        toast.success("You are logged in as Admin.");
        router.push("/");
      } else {
        toast.success("Login Successfull.");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-[800px] md:min-h-[140vh] bg-white">
        <Image
          className="hidden md:flex absolute top-0 right-0 w-[32vw]"
          src="/image/hero-shape.png"
          alt="shape"
          width={1000}
          height={1000}
        />

        <Image
          className="hidden md:flex absolute top-[10vh] right-[70px] w-[37.45vw]"
          src="/image/hero-cake.webp"
          alt="cake-shape"
          width={800}
          height={800}
        />
      </div>

      <div className="absolute top-28 md:top-34 -translate-x-1/2 md:translate-0 left-1/2 md:left-[25vh] w-[90vw] md:w-[42vw] h-[600px] md:h-[105vh] border border-zinc-300 rounded-3xl flex flex-col items-center gap-5 md:gap-[5vh] justify-center px-[10vh]">
        <div className="flex flex-col md:gap-3 items-center mb-3">
          <h1 className="text-[25px] md:text-[5.5vh] font-['fredoka'] text-[#DB6885] font-[900]">
            Welcome
          </h1>
          <h1 className="text-[4.5vw] md:text-[3.7vh] font-['figtree'] font-[900] text-black">
            Sign in to your account
          </h1>
        </div>
        <input
          className="py-4 md:py-5 w-[80vw] md:w-full border outline-[#DB6885] font-[500] text-md md:text-xl placeholder:text-zinc-500 text-zinc-500 border-zinc-300 rounded-full px-8 md:px-[7vh]"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          className="py-4 md:py-5 w-[80vw] md:w-full border outline-[#DB6885] font-[500] text-md md:text-xl border-zinc-300 rounded-full placeholder:text-zinc-500 text-zinc-500 px-8 md:px-[7vh]"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="w-[80vw] md:w-full text-white font-[500] bg-[#DB6885] py-4 md:py-5 rounded-full text-md md:text-lg hover:text-black hover:bg-[#FEBE0B] transition-all duration-200 ease-linear"
        >
          Sign in
        </button>
        <div className="w-[80vw] md:w-full h-[1px] bg-zinc-200"></div>
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="btn bg-white text-black w-[80vw] md:w-full font-[500] py-7 rounded-full text-md md:text-lg hover:text-black transition-all duration-200 ease-linear"
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
        <p className="text-[3.5vw] md:text-[1.2vw] text-black">
          Don't have an account?
          <Link className="text-[#DB6885] ml-1" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}

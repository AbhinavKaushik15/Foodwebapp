"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurBlog = () => {
  const cardDetails = [
    {
      id: "1",
      imageURL: "/image/article-1.jpg",
      title: "How To Cook The Sweet Cupcakes with Strawberry Honey",
    },
    {
      id: "2",
      imageURL: "/image/article-2.jpg",
      title: "Donut topping recommendations for donut lovers",
    },
    {
      id: "3",
      imageURL: "/image/article-3.jpg",
      title: "How To Cook The Sweet Macarons with Strawberry Cream",
    },
    {
      id: "4",
      imageURL: "/image/article-4.jpg",
      title: "Navigating Food Deserts: A Comprehensive Guide",
    },
    {
      id: "5",
      imageURL: "/image/article-5.jpg",
      title: "Exploring the Impact of Food Deserts on Health",
    },
    {
      id: "6",
      imageURL: "/image/article-6.jpg",
      title: "Fresh Food on Wheels: Mobile Markets Revolutionizing Access",
    },
  ];

  return (
    <div className="w-full min-h-[148vh]">
      <div className="w-full flex flex-wrap items-center justify-center gap-x-[4vh] gap-y-[11vh] px-2 mt-10">
        {cardDetails.map((item, id) => {
          return (
            <div key={id} className="h-full w-[31vw] flex flex-col gap-7">
              <Image
                className="w-full h-[43vh] rounded-2xl object-cover"
                src={item.imageURL}
                alt="article-1"
                width={1000}
                height={1000}
              />
              <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
                {item.title}
              </h1>
              <Link
                className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
                href=""
              >
                Read More ››
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurBlog;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const OurBlog = () => {
//   return (
//     <>
//       <div className="w-full h-[123vh]">
//         <div className="mt-14">
//           <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
//             Our Blog
//           </h3>
//           <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
//             Latest Post
//           </h1>
//         </div>

//         <div className="w-full h-[70vh] flex items-center justify-between px-4 mt-18">
//           <div className="left h-full w-[31vw] flex flex-col gap-7">
//             <Image
//               className="w-full h-[43vh] rounded-2xl object-cover"
//               src="/image/article-1.jpg"
//               alt="article-1"
//               width={1000}
//               height={1000}
//             />
//             <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
//               How To Cook The Sweet Cupcakes with Strawberry Honey
//             </h1>
//             <Link
//               className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
//               href=""
//             >
//               Read More ››
//             </Link>
//           </div>
//           <div className="middle h-full w-[31vw] flex flex-col gap-7">
//             <Image
//               className="w-full h-[43vh] rounded-2xl object-cover"
//               src="/image/article-2.jpg"
//               alt="article-2"
//               width={1000}
//               height={1000}
//             />
//             <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
//               Donut topping recommendations for donut lovers
//             </h1>
//             <Link
//               className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
//               href=""
//             >
//               Read More ››
//             </Link>
//           </div>
//           <div className="right h-full w-[31vw] flex flex-col gap-7">
//             <Image
//               className="w-full h-[43vh] rounded-2xl object-cover"
//               src="/image/article-3.jpg"
//               alt="article-3"
//               width={1000}
//               height={1000}
//             />
//             <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
//               How To Cook The Sweet Macarons with Strawberry Cream
//             </h1>
//             <Link
//               className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
//               href=""
//             >
//               Read More ››
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurBlog;

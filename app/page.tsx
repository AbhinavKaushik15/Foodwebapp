import { Heart, Images } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[100vh] bg-[#FFF4F5]">
        <Image
          className="absolute top-0 right-0 w-[34.75vw]"
          src="/image/hero-shape.png"
          alt="shape"
          width={1000}
          height={1000}
        />

        <Image
          className="absolute top-[13.1vh] right-[44.5px] w-[47.45vw]"
          src="/image/hero-cake.webp"
          alt="shape"
          width={1000}
          height={1000}
        />

        <div className="absolute w-[50vw] h-[120vh] left-4">
          <h1 className="text-[#DB6885] text-[2vw] mt-2 font-black font-['Fredoka']">
            Welcome to Fofood
          </h1>

          <h1 className="text-[5vw] tracking-tight leading-[1.3] mt-5 font-black text-[#2F3137] font-['Figtree']">
            Super Delicious Food Special for You
          </h1>
          <p className="text-[1.32vw] text-zinc-[34vh]0 w-[27vw] font-[500] leading-[1.9] mt-7">
            Order your favorites food from anywhere and get delivery at your
            door
          </p>

          <div className="flex items-center gap-5 mt-[5.1vh]">
            <button className="px-[3.1vw] text-lg tracking-tight py-[2.8vh] shadow-[#DB6885] shadow-2xl bg-[#DB6885] hover:bg-[#FFC008] rounded-full text-white hover:text-black transition-all ease-linear duration-200">
              Order Now
            </button>
            <button className="px-[2.85vw] text-lg tracking-tight py-[2.7vh] bg-white border border-[#DB6885] hover:bg-[#DB6885] rounded-full text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
              Learn More
            </button>
          </div>

          <div className="w-1/2 flex items-center justify-between mt-[10.8vh] bg-blue-[200]">
            <div className="flex">
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px]"
                src="/image/avatar-1.webp"
                alt="avatar1"
                width={50}
                height={50}
              />
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px] -ml-3"
                src="/image/avatar-2.webp"
                alt="avatar2"
                width={50}
                height={50}
              />
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px] -ml-3"
                src="/image/avatar-3.webp"
                alt="avatar3"
                width={50}
                height={50}
              />
              <Image
                className="w-14 h-14 rounded-full bg-red-400 border-white border-[2px] -ml-3"
                src="/image/avatar-4.webp"
                alt="avatar4"
                width={50}
                height={50}
              />
            </div>

            <div className="w-fit flex flex-col items-center justify-center">
              <div className="tracking-tighter text-[2.4vh] font-[600] text-zinc-700">
                Our Happy Customers
              </div>
              <div className="flex items-center">
                <span className="text-sm -ml-[1.4vh] mr-1">⭐</span>
                <span className="tracking-tighter text-[2.4vh] font-[600] text-zinc-700 mr-1">
                  4.9
                </span>
                <span className="text-zinc-600 text-[2.4vh] tracking-tighter">
                  (12.8k reviews)
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-[1.03vw] text-zinc-600 w-[27vw] font-[500] leading-[1.9] mt-8 font-['Fredoka']">
            For Better Service Download Our Mobile App Now
          </h1>

          <div className="flex items-center gap-5 mt-3">
            <Image
              className="w-[13.63vw]"
              src="/image/btn-google-play.webp"
              alt="appStore"
              width={300}
              height={300}
            />
            <Image
              className="w-[13.63vw]"
              src="/image/btn-app-store.webp"
              alt="googlePlay"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="explore w-full h-[135vh] mt-[25.5vh]">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
          Explore
        </h3>
        <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
          Our Delicious Menu
        </h1>

        {/* Explore Cards */}
        <div className="w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-[75vw] flex flex-wrap items-center justify-center gap-[7vh]">
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-1.webp"
                alt="menu1"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cakes</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                3 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-2.webp"
                alt="menu2"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cupcakes</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                3 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-3.webp"
                alt="menu3"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Donuts</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                2 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-4.webp"
                alt="menu4"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cookies</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                1 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-5.webp"
                alt="menu5"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Macarons</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                0 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-6.webp"
                alt="menu6"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Drinks</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                0 Menu
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="w-full h-[100vh] flex items-center justify-between">
        <div className="left-imgs w-1/2 h-[90vh] flex gap-8 px-[2.8vh]">
          <Image
            className="w-[21vw] h-[67vh] rounded-2xl mt-5"
            src="/image/about-us-1.webp"
            alt=""
            width={800}
            height={800}
          />
          <Image
            className="w-[21vw] h-[67vh] rounded-2xl mt-[11vh]"
            src="/image/about-us-2.webp"
            alt=""
            width={800}
            height={800}
          />
        </div>

        <div className="right-details w-1/2 h-[90vh] py-10 px-[8.1vh]">
          <h3 className="text-[#DB6885] text-[2.15vw] font-black font-['Fredoka']">
            About us
          </h3>
          <h1 className="font-['figtree'] font-[900] text-[8.6vh] mt-3">
            Welcome to Fofood
          </h1>
          <p className="w-[35vw] text-zinc-600 text-[2.6vh] leading-[2.1] mt-6">
            Welcome to Fofood, where we‘re committed to combating food deserts.
            Our goal is to ensure everyone has access to fresh, healthy, and
            affordable food, regardless of their location. Join us in creating a
            brighter future for all.
          </p>
          <button className="px-[6.8vh] font-['figtree'] font-[900] text-[#DB6885] text-[2.6vh] border border-[#DB6885] py-[2.88vh] rounded-full mt-6">
            Read More
          </button>
        </div>
      </div>

      {/* Popular Menu */}
      <div className="w-full h-[170vh] mt-[11.2vh] bg-blue-100">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
          Popular Menu
        </h3>
        <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
          Most Popular Food
        </h1>

        <div className="w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-full flex flex-wrap items-center justify-center -mt-5 gap-[4vh] px-2">
            <div className="w-[48vh] h-[56vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-[34vh] h-[34vh]"
                src="/image/food-1.webp"
                alt="menu1"
                width={100}
                height={100}
              />
              <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                Chococheese Cake
              </h1>
              <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                $2.5
              </h2>

              <div className="flex items-center gap-2 mt-3">
                <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                  <Heart />
                </div>
                <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-[48vh] h-[50vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-2.webp"
                alt="menu2"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cupcakes</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                3 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-3.webp"
                alt="menu3"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Donuts</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                2 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-4.webp"
                alt="menu4"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Cookies</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                1 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-5.webp"
                alt="menu5"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Macarons</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                0 Menu
              </h2>
            </div>
            <div className="w-[48vh] h-[40vh] rounded-xl bg-white border flex flex-col items-center justify-center border-[#dadada] hover:border-[#DB6885] hover:shadow-xl">
              <Image
                className="w-40 h-40"
                src="/image/food-menu-6.webp"
                alt="menu6"
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-[900] font-['figtree']">Drinks</h1>
              <h2 className="font-['Fredoka'] text-xl text-[#DB6885] font-black">
                0 Menu
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

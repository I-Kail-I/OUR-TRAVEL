import Image from "next/image";
import ImageLogin from "../../../public/assets/loginAssets/LoginPict.svg";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsLockFill } from "react-icons/bs";
import Link from "next/link";

export default function signIn() {
  return (
    <main className="min-h-screen bg-white flex justify-center">
      <div className="cardLoginContainer flex flex-col min-h-screen w-md shadow-2xl pb-6">
        <div className="z-3 imageSection mb-7 relative">
          <Image
            src={ImageLogin}
            layout="cover"
            alt="imageLogin"
            className="relative z-10 right-1"
          />
          <div className="logoPart flex items-center absolute bottom-0 left-60 transform -translate-x-0 translate-y-0 bg-white px-4 py-2 rounded-full shadow-md z-[5]">
            <IoMdAirplane className="text-xl mr-2 border-2 border-black rounded-2xl" />
            <span className="font-semibold">OUR TRAVEL</span>
          </div>
        </div>

        <div
          className=" text-center mt-3 h-max welcomeSection"
          style={{ fontFamily: "Belanosima" }}
        >
          <h1 className="font-bold text-4xl">Welcome back</h1>
          <p className="" style={{ color: "#00000085", fontFamily: "arial" }}>
            Login to your account
          </p>
        </div>

        <div className="inpuSection flex justify-center mt-14">
          <form action="" className="flex flex-col w-full px-8">
            <div className="inputSection gap-y-7 flex flex-col ">
              <div className="w-full max-w-sm min-w-[200px] relative">
                <FaUserLarge className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                <input
                  className="w-full bg-transparent placeholder-gray-500 text-black text-sm border border-black rounded-2xl px-4 py-3 pl-12 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-slate-300 shadow-sm focus:shadow-lg"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="w-full max-w-sm min-w-[200px] relative">
                <MdEmail className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                <input
                  className="w-full bg-transparent placeholder-gray-500 text-black text-sm border border-black rounded-2xl px-4 py-3 pl-12 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-slate-300 shadow-sm focus:shadow-lg"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="w-full max-w-sm min-w-[200px] relative">
                <BsLockFill className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                <input
                  className="w-full bg-transparent placeholder-gray-500 text-black text-sm border border-black rounded-2xl px-4 py-3 pl-12 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-slate-300 shadow-sm focus:shadow-lg"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="lowerSection w-full justify-center mt-4 flex flex-col">
              <div className="checkboxPart">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="appearance-none w-5 h-5 rounded-full border-blue-300 border-2 checked:bg-blue-300 cursor-pointer"
                />
                <label htmlFor="checkbox" className="ms-1 text-gray-400">
                  Remember me?
                </label>
              </div>

              <div className="submitbutton mt-20">
                <Link href={"home"} passHref>
                  <button
                    type="button"
                    className="w-full max-w-sm min-w-[200px] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring focus:outline-none focus:ring-black dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

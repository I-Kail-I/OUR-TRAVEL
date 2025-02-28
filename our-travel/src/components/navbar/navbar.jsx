"use client"

import React from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaCompass,
  FaBell,
  FaBookmark,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (pathname === "/signIn") {
    return null;
  }

  return <nav>{isMobile ? <NavBarPhone /> : <NavbarDesktop />}</nav>;
}

function NavbarDesktop() {
  return (
    <nav className="bg-cyan-500 text-white p-4 flex items-center justify-between fixed top-0 w-screen z-10">
      <div className="flex items-center gap-4 ms-10">
        <FaSearch className="text-xl ms-4" />

        <input
          type="search"
          placeholder="Search"
          className="bg-white text-black rounded-lg px-3  py-2 focus:outline-2"
        />
      </div>

      <div className="flex items-center gap-18">
        <FaBell className="text-xl cursor-pointer"/> 

        <FaBookmark className="text-xl cursor-pointer" />
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover me-20 cursor-pointer"
        />
      </div>
    </nav>
  );
}

function NavBarPhone() {
  return (
    <nav className="bg-cyan-500 px-5 py-3 h-19 flex shadow justify-center fixed bottom-0 w-full z-10">
      <ul className="flex w-full max-w-3xl items-center justify-between text-white">
        {/* Home */}
        <li className="flex-none">
          <button className="searchBar bg-white rounded-4xl flex h-10 items-center py-7 w-40 hover:bg-slate-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <FaHome size={34} className="text-blue-300 ms-4 font-light" />
            <span className="text-2xl text-black ms-2 font-light">Home</span>
          </button>
        </li>

        {/* Explore */}
        <li className="flex-none flex flex-col text-black items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          <FaCompass size={34} />
        </li>

        <li className="flex-none flex flex-col text-black items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          <FaBookmark size={34} />
        </li>

        {/* Notifications */}
        <li className="flex-none flex flex-col text-black items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          <FaBell size={34} />
        </li>
      </ul>
    </nav>
  );
}

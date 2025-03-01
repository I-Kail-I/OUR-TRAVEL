"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBell, FaBookmark, FaSearch } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { LiaCompass } from "react-icons/lia";
import { GoHome } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";

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

  if (pathname === "/signIn" || pathname === "/") {
    return null;
  }

  return (
    <>
      <div className={isMobile ? "pt-16" : "pb-16"} />
      <nav>{isMobile ? <NavBarPhone /> : <NavbarDesktop />}</nav>
    </>
  );
}

function NavbarDesktop() {
  return (
    <div className="fixed top-0 w-screen z-10">
      <div className="navbarContainer bg-cyan-500 text-white p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4 ms-10">
          <FaSearch className="text-xl ms-4" />

          <input
            type="search"
            placeholder="Search"
            className="bg-white text-black rounded-lg px-3 py-2 focus:outline-1 transition-all hover:outline-1"
          />
        </div>

        <div className="flex items-center gap-18">
          <FaBell className="text-xl cursor-pointer" />

          <FaBookmark className="text-xl cursor-pointer" />
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover me-20 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

function NavBarPhone() {
  return (
    <div className="z-10 fixed bottom-0 w-screen">
      <div className="navbarContainer bg-white py-3 flex shadow-2xl rounded-t-4xl shadow-black justify-center w-full">
        <ul className="flex w-full max-w-3xl items-center justify-between text-white px-10 gap-x-1">
          {/* Home */}
          <li className="flex-none flex">
            <Link href="/home" passHref>
              <motion.button
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "keyframes", stiffness: 300 }}
              >
                <GoHome size={45} className="text-blue-300" />
              </motion.button>
            </Link>
          </li>

          {/* Explore */}
          <li className="flex-none flex">
            <Link href="/explore" passHref>
              <motion.button
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "keyframes", stiffness: 300 }}
              >
                <LiaCompass size={45} className="text-black font-light" />
              </motion.button>
            </Link>
          </li>

          <li className="flex-none flex">
            <Link href="/bookmark" passHref>
              <motion.button
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "keyframes", stiffness: 300 }}
              >
                <BsBookmark size={30} className="text-black" />
              </motion.button>
            </Link>
          </li>

          {/* Notifications */}
          <li className="flex-none flex">
            <Link href="/Notifications" passHref>
              <motion.button
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "keyframes", stiffness: 300 }}
              >
                <IoIosNotificationsOutline
                  size={45}
                  className="text-black font-light"
                />
              </motion.button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

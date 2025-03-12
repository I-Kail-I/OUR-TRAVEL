"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBell, FaSearch, FaBookmark } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LiaCompass } from "react-icons/lia";
import { BsBookmark } from "react-icons/bs";
import { IoIosNotificationsOutline, IoMdAirplane } from "react-icons/io";
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

  const mobileNavbarHeight = 0;
  const desktopNavbarHeight = 70;

  return (
    <>
      <nav
        className={
          isMobile ? "z-10 fixed bottom-0 w-full" : "z-10 fixed top-0 w-full"
        }
      >
        {isMobile ? <NavBarPhone /> : <NavbarDesktop />}
      </nav>

      <div
        style={
          isMobile
            ? { paddingBottom: `${mobileNavbarHeight}px` }
            : { paddingTop: `${desktopNavbarHeight}px` }
        }
      />
    </>
  );
}

export function NavbarDesktop() {
  return (
    <div className="w-full z-10">
      <div className="bg-gray-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Brand & Search */}
          <div className="flex items-center gap-6">
            <Link href="/home" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-light cursor-pointer flex"
                style={{ fontFamily: "Julius Sans One" }}
              >
                <IoMdAirplane className="mt-1 border-1 border-white rounded-full" />
                UR TRAVEL
              </motion.div>
            </Link>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400" />
              </span>

              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-md bg-emerald-50 text-black focus:outline-none focus:ring-2 focus:ring-gray-800 duration-500 transition-colors"
              />
            </div>
          </div>
          {/* Right: Actions */}
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <FaBell size={20} />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <FaBookmark size={20} />
            </motion.div>

            <Link href="/profile" passHref>
              <motion.img
                src="/profile.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                whileHover={{ scale: 1.1 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavBarPhone() {
  return (
    <div className="z-10 w-screen">
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

          {/* Bookmark */}
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

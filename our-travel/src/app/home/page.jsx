"use client";
import {
  listPlace,
  popularDestinationSection,
  popularNatureSection,
} from "../../data/homeData/home";
import React, { useState } from "react";
import styles from "./home.module.css";
import { IoMdAirplane } from "react-icons/io";
import { FaBookmark, FaLocationCrosshairs } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Searchbar from "../../components/searchbar/searchbar";

export default function Home({}) {
  const [filledSvg, setFilledSvg] = useState(false);

  return (
    <div className="min-h-screen max-w-screen flex flex-col mb-24 lg:mt-20 md:mb-0">
      {/* Header section */}
      <div className="header flex flex-col mb-8 mt-10">
        <div
          className="logoPart flex text-2xl w-full justify-center mb-10"
          style={{ fontFamily: "Julius Sans One" }}
        >
          <IoMdAirplane className="mt-1 border-2 border-black rounded-full" />{" "}
          <span>UR TRAVEL</span>
        </div>

        <div className="quote mt-7 ms-5 text-center">
          <h2
            className="text-4xl font-extralight"
            style={{ fontFamily: "Palanquin Dark" }}
          >
            Pack your bag's <br />
            the world is waiting
          </h2>
        </div>
      </div>

      {/* Search Bar */}
      <div className="searchbar w-full justify-center items-center flex mb-10">
        <Searchbar />
      </div>

      {/* Place List */}
      <div
        className={`${styles.scrollContainer} mt-9 px-4 w-full`}
        id={styles.placeListContainer}
      >
        <ol className="flex gap-x-8 min-w-full w-full lg:justify-center lg:ms-10">
          {listPlace.map((isi, isiIndex) => (
            <li key={isiIndex} className="flex-none">
              <button className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded-md">
                {isi.placeName}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Popular Destination Section */}
      <div className="placeContent">
        <div
          className="popularDestinationSection mt-7 text-[20px]"
          style={{ fontFamily: "Platypi" }}
        >
          <ol className="flex justify-between px-6 mt-12">
            <li>Popular Destination </li>

            <li>
              <button className="cursor-pointer hover:text-gray-500 transition-colors">
                See All
              </button>
            </li>
          </ol>
        </div>

        <div className="px-6 py-10 overflow-hidden">
          <div className={`${styles.scrollContainer} flex`}>
            <div className="flex gap-x-10 min-w-min px-10">
              {popularDestinationSection.map((isi, index) => {
                const slug = isi.title.toLowerCase().replace(/ /g, "-");

                return (
                  <motion.div
                    className="imageDestinationPlace relative w-[280px] flex"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "keyframes", stiffness: 1 }}
                    key={index}
                  >
                    <Link href={`/home/${slug}`} passHref>
                      <Image
                        className="rounded-2xl object-fill"
                        src={isi.image}
                        alt={isi.title}
                        width={300}
                        style={{ height: "380px" }}
                      />

                      <div className="textContainer absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/75 p-3 rounded-2xl w-[200px] text-center">
                        <h1
                          className="font-semibold text-lg"
                          style={{ fontFamily: "Paytone One" }}
                        >
                          {isi.title}
                        </h1>

                        <span className="font-light text-sm block mt-1">
                          {isi.text}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Nature */}
      <div className="popularNatureSection">
        <div
          className="upperSection text-[20px]"
          style={{ fontFamily: "Platypi" }}
        >
          <ol className="flex justify-between px-6 mt-12">
            <li>Popular Nature</li>

            <li>
              <button className="cursor-pointer hover:text-gray-500 transition-colors">
                See All
              </button>
            </li>
          </ol>
        </div>

        <div className="px-6 py-10 overflow-hidden">
          <div className={`${styles.scrollContainer} flex`}>
            <div className="flex gap-x-10 min-w-min px-10">
              {popularNatureSection.map((isi, index) => (
                <motion.div
                  key={index}
                  className="imageContainer relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "keyframes ", stiffness: 100 }}
                >
                  <Link href={`/home/${isi.slug}`} passHref>
                    <Image
                      src={isi.image}
                      width={300}
                      alt={isi.title}
                      className="rounded-4xl drop-shadow-2xl shadow-black"
                    />
                  </Link>

                  <div
                    className="absolute top-4 left-4 cursor-pointer bookmarkContainer"
                    onClick={() => setFilledSvg(!filledSvg)}
                  >
                    {filledSvg ? (
                      <FaBookmark className="text-black" size={35} />
                    ) : (
                      <CiBookmark className="text-black" size={35} />
                    )}
                  </div>

                  <div className="textContainer ms-2 mt-1 hover:text-zinc-500 transition-colors duration-200">
                    <Link href={`/home/${isi.slug}`} passHref>
                      <h1 className="text-2xl font-bold">{isi.title}</h1>

                      <p className="flex">
                        <FaLocationCrosshairs size={25} className="me-2" />
                        {isi.location}
                      </p>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

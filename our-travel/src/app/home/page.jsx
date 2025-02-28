"use client";

import React, { useState } from "react";
import styles from "./home.module.css";
import { IoMdAirplane } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MotionContext, motion } from "framer-motion";

// Popular destination assets
import HerengrachtDestination from "../../../public/assets/popularPlaces/Herengracht/Herengracht.jpeg";
import NegeriDiAtasAwanDestination from "../../../public/assets/popularPlaces/Negeri di atas awan/Negeri di atas awan.jpeg";
import EffielTowerDestination from "../../../public/assets/popularPlaces/Paris/paris.jpeg";
import IguazuFallDestination from "../../../public/assets/popularPlaces/Iguazu Falls/Iguazu Falls.jpeg";
import KuilKinKakoDestination from "../../../public/assets/popularPlaces/Kuil kinkako/Kuil kinkako.jpeg";

// Popular nature asstes
import HerengrachtNature from "../../../public/assets/popularNature/Herengracht/Herengracht.jpeg";

export default function Home() {
  const listPlace = [
    {
      placeName: "All",
    },
    {
      placeName: "America",
    },
    {
      placeName: "Europe",
    },
    {
      placeName: "Asia",
    },
    {
      placeName: "Africa",
    },
    {
      placeName: "Middle East",
    },
  ];

  const popularDestinationSection = [
    {
      image: HerengrachtDestination,
      title: "Herengracht",
      text: "Amsterdam, Netherlands",
      link: "/home/herengracht",
    },
    {
      image: NegeriDiAtasAwanDestination,
      title: "Negeri di atas awan",
      text: "Toraja, Indonesia",
      link: "/home/negeri-di-atas-awan",
    },
    {
      image: EffielTowerDestination,
      title: "Eifell tower",
      text: "Paris, France",
      link: "/home/eifell-tower",
    },
    {
      image: IguazuFallDestination,
      title: "Iguazu Falls",
      text: "Argentina Brazil",
      link: "/home/iguazu-falls",
    },
    {
      image: KuilKinKakoDestination,
      title: " kinkako",
      text: "Kyoto, Japan",
      link: "/home/kuil-kinkako",
    },
  ];

  const popularNatureSection = [
    {
      image: HerengrachtNature,
      title: "Herengracht",
      location: "Amsterdam, Netherlands",
      link: "/home/herengracht",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col mb-24 lg:mt-20 md:mb-0">
      {/* Header section */}
      <div className="header flex flex-col mb-8 mt-10">
        <div
          className="logoPart flex text-2xl w-full justify-center mb-10"
          style={{ fontFamily: "Julius Sans One" }}
        >
          <IoMdAirplane className="mt-1 border-2 border-black rounded-full " />{" "}
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
      <div className="searchbar w-full justify-center items-center flex">
        <SearchBar />
      </div>

      {/* Place List */}
      <div
        className={`${styles.scrollContainer} mt-9 px-4 w-full `}
        id={styles.placeListContainer}
      >
        <ol className="flex gap-x-8 min-w-full w-full justify-center">
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
      <div className="placeContent pb-10">
        <div
          className="popularDestinationSection mt-7 text-[20px]"
          style={{ fontFamily: "Platypi" }}
        >
          <ol className="flex justify-between px-6 mt-12">
            <li>Popular Destination</li>

            <li>
              <button className="cursor-pointer hover:text-gray-500 transition-colors">
                See All
              </button>
            </li>
          </ol>
        </div>

        <div className={`${styles.scrollContainer} px-6 mt-5 flex`}>
          <div className="flex gap-x-10 min-w-min">
            {popularDestinationSection.map((isi, index) => (
              <div
                className="imageDestinationPlace relative w-[280px]"
                key={index}
              >
                <Link href={isi.link} passHref>
                  <Image
                    className="rounded-2xl object-cover"
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Nature */}
      <div className="popularNatureSection pb-10">
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

        <div className="popularNatureSection flex gap-x-10 mx-5 mt-5">
          {popularNatureSection.map((isi, index) => (
            <div key={index} className="imageContainer relative">
              <Link href={isi.link} passHref>
                <Image
                  src={isi.image}
                  width={300}
                  alt={isi.title}
                  className="rounded-4xl drop-shadow-2xl shadow-black"
                />
              </Link>

              <div className="absolute top-4 left-4 bookmarkContainer">
                <button className="cursor-pointer bg-white/75 p-2 rounded-full hover:bg-gray-500 transition-colors">
                  <CiBookmark className="text-black" size={25} />
                </button>
              </div>

              <div className="textContainer ms-2 mt-1">
                <Link href={isi.link} passHref>
                  <h1 className="text-2xl font-bold">{isi.title}</h1>

                  <p className="flex">
                    <FaLocationCrosshairs size={25} className="me-2" />
                    {isi.location}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Search bar components */
const SearchBar = ({ placeholder = "Discover your next destination" }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="rounded-full bg-gray-200 flex items-center w-100 px-4 py-4 mt-5">
        <button type="button" className="mr-2 text-gray-500">
          <IoSearchSharp size={20} />
        </button>

        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent border-none outline-none flex-grow text-gray-700 placeholder-gray-500"
        />

        <button type="submit" className="hidden">
          Search
        </button>
      </div>
    </form>
  );
};

"use client";

import React, { useState } from "react";
import styles from "./home.module.css";
import { IoMdAirplane } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

import Herengracht from "../../../public/assets/Places/Herengracht/Herengracht.jpeg";
import NegeriDiAtasAwan from "../../../public/assets/Places/Negeri di atas awan/Negeri di atas awan.jpeg";

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

const place = [
  {
    Image: Herengracht,
    title: "Herengracht",
    text: "Amsterdam, Netherlands",
  },
  {
    Image: NegeriDiAtasAwan,
    title: "Negeri di atas awan",
    text: "Toraja, Indonesia",
  },
];

const SearchBar = ({ placeholder = "Discover your next destination" }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="relative ">
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="searchbar w-full justify-center flex">
        <SearchBar />
      </div>

      <div className={`${styles.placeList} mt-9 ms-4 overflow-auto`}>
        <ol className="flex justify-center overflow-auto gap-x-15">
          {listPlace.map((isi, isiIndex) => (
            <li key={isiIndex}>
              <button className="cursor-pointer">{isi.placeName} </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Popular Destination Section */}
      <div className="placeContent">
        <div className="popularDestinationSection mt-7">
          <ol className="flex justify-between ms-15 me-15 mt-12">
            <li>Popular Destination</li>
            <li>
              <button className="cursor-pointer">See All</button>
            </li>
          </ol>

          <div className="imageContainer flex justify-center gap-x-8 mt-5 overflow-auto">
            {place.map((isi, index) => (
              <div
                className="imageDestinationPlace relative w-[280px]"
                key={index}
              >
                <Image
                  className="rounded-2xl object-cover"
                  src={isi.Image}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer"></div>
    </div>
  );
}

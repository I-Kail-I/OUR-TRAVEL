"use client";

import BackButton from "@/components/backButton/backbutton.jsx";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Destinations from "../../../data/exploreData/explore.js";
import { IoSearch, IoHeartOutline, IoPersonOutline } from "react-icons/io5";

const MOBILE_BREAKPOINT = 768;

const MobileLayout = () => (
  <div className="max-w-md mx-auto pb-20">
    <div className="flex items-center justify-between mb-6">
      <BackButton />
      <h1 className="text-xl font-semibold hover:text-gray-200">Explore</h1>
      <div className="w-5"></div>
    </div>

    <DestinationGrid mobile />
  </div>
);

const DesktopLayout = () => (
  <div className="max-w-7xl mx-auto">
    <div className="mb-12">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-3xl font-bold">Popular Destinations</h2>
      </div>

      <DestinationGrid />
    </div>
  </div>
);

const AccountButton = () => (
  <button className="flex items-center space-x-1 text-gray-700">
    <IoPersonOutline className="w-5 h-5" />
    <span>Account</span>
  </button>
);

const DestinationGrid = ({ mobile }) => {
  const gridClassName = mobile
    ? "grid grid-cols-2 gap-4"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6";

  return (
    <div className={gridClassName}>
      {Destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          mobile={mobile}
        />
      ))}
    </div>
  );
};

const DestinationCard = ({ destination, mobile }) => {
  const imageHeight = mobile ? "180px" : "260px";
  const imageUrl = `https://source.unsplash.com/random/${
    mobile ? "300x400" : "600x400"
  }?${destination.name.toLowerCase().replace(/ /g, "-")}`;

  return mobile ? (
    <div className="relative rounded-xl overflow-hidden shadow-md mb-2">
      <div className="aspect-w-3 aspect-h-4 w-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})`, height: imageHeight }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-90 rounded-lg m-2">
        <p className="text-sm font-semibold">{destination.name}</p>
        <p className="text-xs text-gray-600">{destination.location}</p>
      </div>
      <div className="absolute top-2 right-2 bg-white p-1 rounded-md">
        <span className="text-xs font-semibold text-gray-700">
          {destination.rating}
        </span>
      </div>
    </div>
  ) : (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, height: imageHeight }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white">{destination.name}</h3>

        <p className="text-sm text-gray-200">{destination.location}</p>
      </div>

      <div className="absolute top-4 right-4 bg-white p-1 rounded-md">
        <span className="text-sm font-semibold text-gray-700">
          {destination.rating}
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="absolute top-4 right-16 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      >
        <IoHeartOutline className="w-4 h-4 text-gray-700" />
      </motion.button>
    </div>
  );
};

export default function ExplorePage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </main>
  );
}

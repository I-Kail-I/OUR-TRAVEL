"use client";
import React, { useState } from "react";
import { IoLocationOutline, IoHeartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "../backButton/backbutton";
import { ImAirplane as Airplane } from "react-icons/im";

export default function TravelListingCardComponents({
  title,
  location,
  price,
  description,
  mainImage,
  thumbnailImage,
}) {
  const [airplaneHover, setAirplaneHover] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg shadow-gray-800 overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer hover:text-gray-400 duration-100">
          <BackButton />
        </div>

        <div className="detailText">
          <span className="font-medium text-lg">Details</span>
        </div>

        <IoHeartOutline className="text-gray-500 text-xl" />
      </div>

      {/* Main Image */}
      <div className="relative h-120 w-full">
        {mainImage && (
          <Image
            src={typeof mainImage === "string" ? mainImage : mainImage.src}
            alt={`${title} view`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            objectPosition="bottom"
            quality={100}
            className="w-full h-full object-cover"
          />
        )}

        {/* Thumbnail Image */}
        <div className="absolute top-4 right-4 w-16 h-12 rounded-md overflow-hidden">
          {thumbnailImage && (
            <Image
              src={
                typeof thumbnailImage === "string"
                  ? thumbnailImage
                  : thumbnailImage.src
              }
              alt={`${title} thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Location */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "Paytone One" }}
          >
            {title}
          </h2>
        </div>

        <div className="flex items-center text-gray-500 mb-5">
          <IoLocationOutline className="me-1" />
          <span>{location}</span>
        </div>

        {/* Tabs */}
        <div className="border-b mb-8">
          <div className="flex">
            <div className="mr-4 pb-2 border-b-2 font-medium cursor-pointer">
              Detail
            </div>

            <div className="mr-4 pb-2 text-gray-500 cursor-pointer">Review</div>
            <div className="mr-4 pb-2 text-gray-500 cursor-pointer">Maps</div>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700 text-lg max-h-32 mb-40">
          <p>{description}</p>
        </div>

        {/* Price and Booking */}
        <div className="flex justify-between items-center mt-6">
          <div className="mb-5">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-gray-500 text-lg">/person</span>
          </div>

          <div className="relative">
            {airplaneHover && (
              <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: -90, y: -70 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute z-10"
                style={{ left: "30%", top: "50%" }}
              >
                <Airplane className="text-2xl text-black" />
              </motion.div>
            )}

            <motion.button
              onMouseEnter={() => setAirplaneHover(true)}
              onMouseLeave={() => setAirplaneHover(false)}
              whileHover={{ translateY: -10, translateX: 10, rotate: 10 }}
              transition={{ type: "spring", stiffness: 1000 }}
              className="relative bg-cyan-400 text-white h-15 w-60 px-4 py-2 rounded-md cursor-pointer hover:bg-cyan-900 duration-300"
            >
              Booking Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

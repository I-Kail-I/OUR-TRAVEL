import React from "react";
import {
  IoChevronBackOutline,
  IoLocationOutline,
  IoHeartOutline,
} from "react-icons/io5";

export default function TravelListingCardComponents({
  title,
  location,
  price,
  description,
  mainImage,
  thumbnailImage,
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-20">
      {/* Header with back button and details text */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <IoChevronBackOutline className="text-black text-xl mr-3" />
          <span className="font-medium text-lg">Details</span>
        </div>
        <IoHeartOutline className="text-gray-500 text-xl" />
      </div>

      {/* Main image */}
      <div className="relative">
        <img
          src={mainImage}
          alt={`${title} view`}
          className="w-full h-64 object-cover"
        />

        {/* Thumbnail overlay */}
        <div className="absolute top-4 right-4">
          <div className="w-16 h-12 rounded-md overflow-hidden">
            <img
              src={thumbnailImage}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center text-gray-500 mb-3">
          <IoLocationOutline className="mr-1" />
          <span>{location}</span>
        </div>

        {/* Tabs */}
        <div className="border-b mb-4">
          <div className="flex">
            <div className="mr-4 pb-2 border-b-2 border-blue-500 text-blue-500 font-medium">
              Detail
            </div>
            <div className="mr-4 pb-2 text-gray-500">Review</div>
            <div className="mr-4 pb-2 text-gray-500">Maps</div>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700 mb-4 text-sm max-h-32 overflow-y-auto">
          <p>{description}</p>
        </div>

        {/* Price and booking */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-gray-500 text-sm">/person</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
}

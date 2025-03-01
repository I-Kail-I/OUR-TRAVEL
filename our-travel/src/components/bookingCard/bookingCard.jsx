import React from "react";
import { ChevronLeft, Plane } from "lucide-react";

export default function FlightSearch() {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <ChevronLeft size={24} className="text-black" />
      </div>

      <div className="relative mx-4 mt-4 rounded-xl overflow-hidden">
        <div className="bg-gray-200 rounded-xl p-6 relative z-10 h-36">
          <div className="relative z-20 max-w-[60%]">
            <h1 className="text-xl font-bold">Discover a new place</h1>
            <p className="text-sm text-gray-700">
              Explore, journey, discover, adventure
            </p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 z-10 w-[50%]">
            <img
              src="/api/placeholder/200/136"
              alt="Airplane in the sky"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Booking section */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Let's book your flight</h2>

        {/* From section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Plane size={16} className="text-gray-500 mr-2" />
            <span className="text-sm">Indonesia</span>
          </div>
        </div>

        {/* To section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Plane size={16} className="text-gray-500 mr-2" />
            <span className="text-sm">Netherlands</span>
          </div>
        </div>

        {/* Date fields */}
        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Depature
            </label>
            <div className="border border-gray-300 rounded-full px-4 py-2">
              <span className="text-sm">Jan 07, 2025</span>
            </div>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return
            </label>
            <div className="border border-gray-300 rounded-full px-4 py-2">
              <span className="text-sm">Jan 07, 2025</span>
            </div>
          </div>
        </div>

        {/* Search button */}
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-full font-medium mt-2">
          Search flights
        </button>
      </div>
    </div>
  );
}

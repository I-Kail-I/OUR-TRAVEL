"use client";

import React from "react";
import { useParams } from "next/navigation";
import { destinations } from "../../../data/detailsInfo/destinations";
import TravelListingCardComponents from "../../../components/travelListCard/travelListCard";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

export default function TravelListingCardPage() {
  const params = useParams();
  const slug = params?.slug;

  console.log("Current slug:", slug);
  console.log(
    "Available destinations:",
    destinations.map((d) => d.slug)
  );

  // Find the destination that matches the slug
  const destination = destinations.find((item) => item.slug === slug);

  console.log("Your destinatination is found;", destination);

  if (!destination) {
    return (
      <div className="container mx-auto px-4 pb-24 h-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 mt-40">
          Destination not found!
        </h1>

        <p className="mb-4">Could not find destination with slug: {slug}</p>

        <Link href="/home" className="text-blue-500 flex items-center">
          <IoChevronBackOutline className="mr-2" /> Back to home
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto pb-20 md:pb-5 md:50 lg:pt-10">
      <TravelListingCardComponents
        title={destination.title}
        location={destination.location}
        price={destination.price}
        description={destination.description}
        mainImage={destination.image}
        thumbnailImage={destination.thumbnailImage}
      />
    </main>
  );
}

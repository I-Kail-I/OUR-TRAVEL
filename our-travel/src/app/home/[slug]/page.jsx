"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { destinations } from "../../data/detailsInfo/destinations";
import TravelListingCardComponents from "../../../components/travelListCard/travelListCard";

export default function TravelListingCardPage() {
  const router = useRouter();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setSlug(router.query.slug);
    }
  }, [router.isReady, router.query]);

  if (!router.isReady) return null;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) return <p>Destination not found!</p>;

  return <TravelListingCardComponents {...destination} />;
}

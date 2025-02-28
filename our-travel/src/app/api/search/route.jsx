import { NextResponse } from "next/server";

const places = [
  { id: 1, name: "Herengracht", location: "Amsterdam, Netherlands" },
  { id: 2, name: "Eiffel Tower", location: "Paris, France" },
  { id: 3, name: "Iguazu Falls", location: "Argentina, Brazil" },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = places.filter((place) =>
    place.name.toLowerCase().includes(query)
  );

  return NextResponse.json(results);
}

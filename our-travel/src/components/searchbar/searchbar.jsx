"use client";

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

export default function SearchBar({
  placeholder = "Discover your next destination",
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError("Failed to search places");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 2) {
      handleSearch(e);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-md flex items-center justify-center z-0">
      <form onSubmit={handleSearch} className="relative">
        <div className="rounded-full bg-gray-200 flex items-center w-100 px-4 py-4 mt-5 border-1 border-transparent hover:border-gray-500 transition-colors duration-500 focus-within:border-gray-500">
          <button type="submit" className="mr-2 text-gray-500">
            <IoSearchSharp size={20} />
          </button>

          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={handleInputChange}
            className="bg-transparent border-none outline-none flex-grow text-gray-700 placeholder-gray-500 "
          />

          {loading && (
            <div className="animate-spin text-gray-500 ml-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </form>

      {/* Results dropdown */}
      {results.length > 0 && (
        <div className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {results.map((place) => (
            <Link
              key={place.id}
              href={`/home/${place.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              <div className="font-medium">{place.name}</div>
              <div className="text-sm text-gray-500">{place.location}</div>
            </Link>
          ))}
        </div>
      )}

      {error && (
        <div className="absolute w-full text-red-500 text-sm mt-1 px-4">
          {error}
        </div>
      )}
    </div>
  );
}
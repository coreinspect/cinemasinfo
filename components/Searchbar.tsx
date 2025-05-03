"use client";
import React, { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <input
        className="w-full sm:w-64 md:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default Searchbar;

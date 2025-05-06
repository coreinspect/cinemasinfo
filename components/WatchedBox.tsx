"use client";

import React, { ReactNode, useState } from "react";

const WatchedBox = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          My Watchlist
        </h2>
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close watchlist" : "Open watchlist"}
        >
          <span className="text-lg">{isOpen ? "–" : "+"}</span>
        </button>
      </div>

      {isOpen && children}
    </div>
  );
};

export default WatchedBox;

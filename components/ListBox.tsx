"use client";

import React, { ReactNode, useState } from "react";

const ListBox = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Movies
        </h2>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close movie list" : "Open movie list"}
        >
          <span className="text-slate-700 dark:text-slate-200 text-xl">
            {isOpen ? "–" : "+"}
          </span>
        </button>
      </div>

      {isOpen && children}
    </div>
  );
};

export default ListBox;

"use client";

import { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md">
      {children}
    </nav>
  );
};

export default Navbar;

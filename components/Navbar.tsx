"use client";

import Searchbar from "./Searchbar";
import NavResult from "./NavResult";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md">
      <Logo />
      <Searchbar />
      <NavResult />
    </nav>
  );
};

export default Navbar;

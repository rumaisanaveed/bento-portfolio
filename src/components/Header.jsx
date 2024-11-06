import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link className="logo text-3xl koulen-regular" to="/">
        RN
      </Link>
      <a href="mailto:rumaisanaved@gmail.com">
        <button className="flex px-5 py-2 lg:px-8 lg:py-3 bg-[#282828] rounded-3xl">
          <p className="text-sm lg:text-xl text-white">Contact</p>
        </button>
      </a>
    </div>
  );
};

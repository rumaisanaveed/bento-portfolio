import React from "react";
import { Link } from "react-router-dom";
import UpArrow from "../../assets/icons/upArrow.svg";

export const CustomLink = ({ path }) => {
  return (
    <Link
      to={path}
      className="flex items-center justify-center bg-white backdrop-blur-md rounded-full absolute bottom-3 left-3 shadow-md h-10 w-10"
    >
      <img src={UpArrow} alt="arrow" />
    </Link>
  );
};

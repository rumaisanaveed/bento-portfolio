import React from "react";
import UpArrow from "../../assets/icons/upArrow.svg";
import DownloadIcon from "../../assets/icons/downloadArrow.svg";

export const Button = ({ onClick, icon = false }) => {
  return (
    <button
      className="flex items-center justify-center bg-white backdrop-blur-md rounded-full absolute bottom-3 left-3 shadow-md h-10 w-10"
      onClick={onClick}
    >
      {icon ? (
        <img src={DownloadIcon} alt="download" />
      ) : (
        <img src={UpArrow} alt="arrow" />
      )}
    </button>
  );
};

import React from "react";
import UpArrow from "../../assets/icons/upArrow.svg";
import DownloadIcon from "../../assets/icons/downloadArrow.svg";
import { Link } from "react-router-dom";

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

const ProjectButton = ({ projectId }) => {
  return (
    <Link
      to={
        projectId === 1
          ? "https://emoji-vault.vercel.app/"
          : "https://resume-maker-kit.netlify.app/"
      }
      target="_blank"
      className="flex items-center justify-center bg-white backdrop-blur-md rounded-full absolute bottom-3 left-3 shadow-md h-10 w-10"
    >
      <img src={UpArrow} alt="arrow" />
    </Link>
  );
};

export default ProjectButton;

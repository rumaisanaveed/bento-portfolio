import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../constants";
import { MainLayout } from "../layouts/MainLayout";
import RightArrow from "../assets/icons/rightArrow.svg";
import EmojiVaultOne from "../assets/images/emojiVaultOne.png";
import EmojiVaultEmoji from "../assets/images/emojiVaultEmoji.png";
import EmojiVaultThree from "../assets/images/emojiVaultThree.png";
import ResumakerOne from "../assets/images/resumakerOne.png";
import ResumakerThree from "../assets/images/resumakerThree.png";
import ResumakerFour from "../assets/images/resumakerFour.png";

export const Project = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const projectData = projectsData.find(
    (projectData) => projectData.id === projectId
  );

  return (
    <MainLayout>
      <div className="flex flex-col w-full md:flex-row items-center justify-center md:items-start md:justify-start gap-8 px-5 md:px-0 sm:w-[85%] mx-auto">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h1 className="text-black text-3xl lg:text-4xl koulen-regular font-medium">
              {projectData.title}
            </h1>
            {projectId === 1 && (
              <DemoButton to="https://emoji-vault.vercel.app/" />
            )}
            {projectId === 2 && (
              <DemoButton to="https://resume-maker-kit.netlify.app/" />
            )}
          </div>
          <p className="text-black font-medium text-xl max-w-md">
            {projectData.description}
          </p>
          <div className="flex items-center flex-wrap gap-2 md:max-w-md w-full">
            {projectData.techStack.map((skill, index) => (
              <div
                key={index}
                className="bg-black text-white font-normal text-sm rounded-full px-4 py-2 border-none"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-base font-normal w-full md:max-w-lg">
          <p>{projectData.projectDetails.overview}</p>
          <ul className="list-decimal flex flex-col gap-3 pl-5">
            {projectData.projectDetails.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      {projectId === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:w-[85%] md:mx-auto md:grid-rows-2 gap-3">
          <div className="bg-custom-orange overflow-hidden relative md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-4 rounded-3xl">
            <div className="mt-[30%]"></div>
            <img
              src={EmojiVaultOne}
              alt="emoji"
              className="absolute shadow-2xl rounded-2xl top-[20%] origin-top-left md:origin-top left-[80%] md:left-[50%] scale-125 transform -translate-x-1/2"
            />
          </div>
          <div className="bg-custom-orange relative overflow-hidden md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-2 rounded-3xl">
            <div className="mt-[100%]"></div>
            <img
              src={EmojiVaultThree}
              alt="emoji"
              className="absolute rounded-2xl scale-100 transform -translate-x-1/2 origin-top left-[50%] top-[15%] shadow-2xl"
            />
          </div>
          <div className="bg-custom-orange flex items-center justify-center rounded-3xl md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
            <img src={EmojiVaultEmoji} alt="emoji" />
          </div>
          <div className="bg-custom-orange overflow-hidden relative rounded-3xl md:row-start-2 md:row-end-3 md:col-start-3 md:col-end-4">
            <div className="mt-[100%]"></div>
            <img
              src={EmojiVaultThree}
              alt="emoji"
              className="absolute shadow-2xl transform rounded-2xl rotate-45 scale-100 origin-top-right top-[60%] md:top-[50%] right-[10%]"
            />
          </div>
        </div>
      )}
      {projectId === 2 && (
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:w-[85%] md:mx-auto md:grid-rows-2 gap-3">
          <div className="bg-custom-purple overflow-hidden relative md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2 rounded-3xl">
            <img
              src={ResumakerOne}
              className="absolute top-[15%] left-[25%] origin-top-left scale-[4]"
              alt="resumaker"
            />
          </div>
          <div className="bg-custom-purple relative md:row-start-1 overflow-hidden md:row-end-2 md:col-start-2 md:col-end-4 rounded-3xl">
            <img
              src={ResumakerOne}
              className="absolute transform -translate-x-1/2 top-[25%] scale-75 left-[50%] origin-top"
              alt="resumaker"
            />
          </div>
          <div className="bg-custom-purple relative rounded-3xl overflow-hidden md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
            <div className="mt-[100%]"></div>
            <img
              src={ResumakerThree}
              className="absolute transform -translate-x-1/2 scale-50 origin-top left-[50%] top-[20%]"
              alt="resumaker"
            />
          </div>
          <div className="bg-custom-purple relative rounded-3xl md:row-start-2 md:row-end-3 overflow-hidden md:col-start-3 md:col-end-4">
            <div className="mt-[100%]"></div>
            <img
              src={ResumakerFour}
              className="absolute transform -translate-y-1/2 scale-100 origin-left left-[20%] top-[50%]"
              alt="resumaker"
            />
          </div>
        </div>
      )}
    </MainLayout>
  );
};

const DemoButton = ({ to }) => {
  return (
    <Link
      to={to}
      target="_blank"
      className="text-base w-36 md:max-w-36 font-medium flex items-center justify-center gap-2 text-custom-black border-2 border-custom-black rounded-full px-2 md:px-4 py-1"
    >
      <p>Live Demo</p>
      <img src={RightArrow} alt="arrow" />
    </Link>
  );
};

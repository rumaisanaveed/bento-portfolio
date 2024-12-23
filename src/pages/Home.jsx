import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import EmojiVaultBg from "../assets/images/emojiProjectBg.png";
import ProjectButton, { Button } from "../components/Buttons/Button";
import GithubIcon from "../assets/icons/github.svg";
import InstaIcon from "../assets/icons/instagram.svg";
import ResuMakerBg from "../assets/images/resumakerProjectBg.png";
import { experience, skills } from "../constants";
import Resume from "../assets/icons/resume.svg";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "../components/Buttons/CustomLink";
import resume from "../resume.pdf";

export const Home = () => {
  const navigate = useNavigate();
  const handleProjectOneClick = () => {
    navigate("/project/1");
  };
  const handleProjectTwoClick = () => {
    navigate("/project/2");
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-2 md:w-[80%] md:mx-auto grid-rows-[repeat(13,auto)] lg:grid-rows-[repeat(4,auto)] lg:grid-cols-4 gap-3">
        <About />
        <Social
          iconImage={LinkedInIcon}
          className="border bg-dark-blue row-start-3 row-end-4 col-start-1 col-end-2 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
          path="https://www.linkedin.com/in/rumaisa-naved-a6b96a230/"
        />
        <Project
          className="row-start-5 row-end-6 col-start-1 col-end-3 bg-[#FF8B25] lg:row-start-1 lg:row-end-3 lg:col-start-4 lg:col-end-5"
          image={EmojiVaultBg}
          onButtonClick={handleProjectOneClick}
          projectId={1}
        />
        <Social
          className="border border-black justify-center relative bg-dark-black row-start-4 row-end-5 col-start-1 col-end-2 lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2"
          iconImage={GithubIcon}
          path="https://github.com/rumaisanaveed"
        />
        <Social
          className="border-none row-start-4 row-end-5 col-start-2 col-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 bg-custom-gradient"
          iconImage={InstaIcon}
          path="https://www.instagram.com/techgirl_guide/profilecard/?igsh=MXc5Z2Rtd21nYTdqdg=="
        />
        <Project
          className="row-start-6 row-end-7 col-start-1 col-end-3 bg-[#A133FF] lg:row-start-2 lg:row-end-4 lg:col-start-3 lg:col-end-4"
          image={ResuMakerBg}
          onButtonClick={handleProjectTwoClick}
          projectId={2}
        />
        <Skills />
        <ResumeDownload />
        <Experience />
      </div>
    </MainLayout>
  );
};

const About = () => {
  return (
    <div className="flex flex-col gap-5 lg:py-0 p-10 place-content-center bg-white border border-[#B3B3B3] rounded-3xl row-start-1 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-2">
      <h1 className="text-5xl font-semibold uppercase text-black">Hey 👋🏻</h1>
      <p className="text-[#0D1117] text-xl">
        I’m Rumaisa, a design engineer who loves building pixel-perfect
        interfaces with seamless functionality.
      </p>
    </div>
  );
};

const Social = ({ iconImage, className, path }) => {
  return (
    <div
      className={`flex relative items-center justify-center rounded-3xl ${className}`}
    >
      <div className="mt-[100%]"></div>
      <img src={iconImage} alt="linkedin" />
      <CustomLink path={path} />
    </div>
  );
};

const Project = ({ image, className, projectId }) => {
  return (
    <div
      className={`border border-[#B3B3B3] relative rounded-3xl ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mt-[50%]"></div>
      <ProjectButton projectId={projectId} />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-4 p-10 xl:py-6 justify-center bg-white border border-[#B3B3B3] rounded-3xl row-start-7 row-end-9 col-start-1 col-end-3 w-full lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3">
      <h1 className="text-[#0D1117] text-2xl font-semibold">
        Building pixel-perfect, responsive interfaces with these &nbsp;
        <span className="text-[#FC63F9]">frontend technologies</span> ✨
      </h1>
      <div className="w-full">
        {skills.map((skill, index) => (
          <div
            className="bg-dark-black group relative mr-1 p-4 h-16 w-16 inline-block rounded-2xl"
            key={index}
          >
            <img src={skill.img} alt="skill" />
            <div className="absolute left-[50%] opacity-0 group-hover:opacity-100 top-[115%] origin-top -translate-x-1/2 z-40 bg-[#444444] text-sm text-white whitespace-nowrap rounded px-3 py-1">
              <span>{skill.tooltipText}</span>
              <div className="absolute w-3 h-3 bg-[#444444] transform -translate-x-1/2 rotate-45 origin-top top-[-15%] left-[50%]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResumeDownload = () => {
  return (
    <div className="flex items-center justify-center relative bg-custom-black rounded-3xl border-none row-start-3 row-end-4 col-start-2 col-end-3 lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5">
      <div className="mt-[100%]"></div>
      <img src={Resume} alt="resume" />
      <a href={resume} download="RumaisaResume-Frontend Developer">
        <Button icon={true} />
      </a>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="bg-white py-10 border border-[#B3B3B3] px-10 flex flex-col gap-4 rounded-3xl row-start-9 row-end-13 col-start-1 col-end-3 lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-5">
      <h1 className="text-black font-bold text-3xl lg:text-5xl uppercase koulen-regular">
        Work Experience
      </h1>
      {experience.map((experience, index) => (
        <div key={index}>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:items-center justify-between">
            <h2 className="font-medium text-xl">
              {experience.title} - {experience.companyName}
            </h2>
            <p className="font-medium text-lg">{experience.duration}</p>
          </div>
          <ol className="list-decimal px-4 text-lg">
            {experience.description.map((item, index) => (
              <li className="text-[#0D1117] pt-2" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

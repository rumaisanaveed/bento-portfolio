import React from "../assets/icons/react.svg";
import Tailwind from "../assets/icons/tailwind.svg";
import Next from "../assets/icons/next.svg";
import Firebase from "../assets/icons/firebase.svg";
import Typescript from "../assets/icons/typescript.svg";
import Framer from "../assets/icons/framerMotion.svg";
import EmojiVault1 from "../assets/images/emojiVaultOne.png";
import EmojiVault2 from "../assets/images/emojiVaultTwo.png";
import EmojiVaultEmoji from "../assets/images/emojiVaultEmoji.png";
import EmojiVault3 from "../assets/images/emojiVaultThree.png";
import ResumakerOne from "../assets/images/resumakerOne.png";
import ResumakerTwo from "../assets/images/resumakerTwo.png";
import ResumakerThree from "../assets/images/resumakerThree.png";
import ResumakerFour from "../assets/images/resumakerFour.png";

export const skills = [
  {
    img: React,
    tooltipText: "React.js",
  },
  {
    img: Tailwind,
    tooltipText: "Tailwind CSS",
  },
  {
    img: Next,
    tooltipText: "Next.js",
  },
  {
    img: Firebase,
    tooltipText: "Firebase",
  },
  {
    img: Typescript,
    tooltipText: "TypeScript",
  },
  {
    img: Framer,
    tooltipText: "Framer Motion",
  },
];

export const experience = [
  {
    point:
      "Translated wireframes into functional and responsive front-end code, contributing to a seamless user experience and efficient project development.",
  },
  {
    point:
      "Collaborated closely with backend developers and designers, ensuring smooth integration of design elements and APIs to meet project requirements and deadlines.",
  },
  {
    point:
      "Followed best coding practices, including clean and maintainable code, and integrated RESTful APIs and services, which enhanced the overall project performance and scalability.",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Emoji Vault",
    description:
      "Emoji Vault is a dynamic web application that lets users quickly search for and access their favorite emojis to use anywhere.",
    liveLink: "https://emoji-vault.vercel.app/",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Ant design",
      "Context Api",
      "Axios",
    ],
    projectDetails: {
      overview:
        "Designed to prioritize user experience, it is built with React.js and Tailwind CSS to ensure a sleek, high-performing, and responsive design across all devices.",
      details: [
        "Developed a user-friendly interface with React.js and Tailwind CSS, emphasizing minimalistic design and optimal performance.",
        "Created reusable React components, promoting clean, efficient code and best practices.",
        "Leveraged Ant Design to accelerate development, ensuring faster turnaround.",
        "Integrated a free emoji API using Axios to enhance API efficiency and performance.",
        "Managed application data effectively with Context API.",
        "Used Sonner for toast notifications, improving overall user experience.",
        "Added skeleton loaders to enhance loading performance and provide smooth user interactions.",
        "Thoroughly handled edge cases, delivering a seamless search bar experience.",
        "Successfully deployed on Vercel for easy access and reliability.",
      ],
    },
    projectImages: [
      { img: EmojiVault1 },
      { img: EmojiVault2 },
      { img: EmojiVaultEmoji },
      { img: EmojiVault3 },
    ],
  },
  {
    id: 2,
    title: "Resumaker",
    description:
      "ResuMaker is a versatile web application designed to make resume creation simple and efficient for users preparing for their next roles.",
    liveLink: "https://resume-maker-kit.netlify.app/",
    techStack: [
      "Next.js",
      "React.js",
      "Firebase",
      "Clerk",
      "Ant design",
      "Tailwind CSS",
    ],
    projectDetails: {
      overview:
        "Built with Next.js and Firebase, it offers a data-driven and responsive experience.",
      details: [
        "Developed a fully responsive web application using Next.js, Firebase, Clerk, and Tailwind CSS, ensuring consistent performance across all devices.",
        "Implemented secure user authentication with Clerk to prioritize data privacy and security.",
        "Utilized Firebase for data storage, enabling full-stack functionality without requiring a dedicated backend.",
        "Designed a clean user interface with Ant Design components, reducing development time and effort.",
        "Streamlined complex state management with Context API.",
        "Created a reusable component library to accelerate development.",
        "Leveraged Next.js to optimize SEO and enhance application speed.",
        "Integrated loaders to ensure responsive, seamless interactions.",
        "Used Ant Design to manage form validation, reducing errors in form submissions.",
        "Successfully deployed the application on Netlify for reliability and ease of access.",
      ],
    },
    projectImages: [
      { img: ResumakerOne },
      { img: ResumakerTwo },
      { img: ResumakerThree },
      { img: ResumakerFour },
    ],
  },
];

import { SlBadge } from "react-icons/sl";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";

export const socialMedia = [
  {
    id: 1,
    icon: <CiInstagram />,
    linkPath: "https://www.instagram.com",
  },
  {
    id: 2,
    icon: <CiFacebook />,
    linkPath: "https://www.facebook.com",
  },
  {
    id: 3,
    icon: <RiGithubLine />,
    linkPath: "https://www.github.com/pradeepkhanal23",
  },
];

export const cards = [
  {
    id: 1,
    icon: <SlBadge />,
    title: "Experience",
    info: "2+ Years",
  },
  {
    id: 2,
    icon: <AiOutlineFileDone />,
    title: "Completed",
    info: "20+ Projects",
  },
  {
    id: 3,
    icon: <BiSupport />,
    title: "Support",
    info: "Online 24/7",
  },
];

export const frontendSkills = [
  {
    id: 1,
    name: "HTML",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "CSS",
    level: "Advanced",
  },
  {
    id: 3,
    name: "JavaScript",
    level: "Advanced",
  },
  {
    id: 4,
    name: "Bootstrap",
    level: "Intermediate",
  },
  {
    id: 5,
    name: "Git",
    level: "Intermediate",
  },
  {
    id: 6,
    name: "React",
    level: "Intermediate",
  },
];
export const backendSkills = [
  {
    id: 1,
    name: "Node",
    level: "Basic",
  },
  {
    id: 2,
    name: "Express",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "PostgreSQL",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    id: 5,
    name: "GraphQL",
    level: "Intermediate",
  },
  {
    id: 6,
    name: "JWT",
    level: "Basic",
  },
];

import { SlBadge } from "react-icons/sl";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaRegFileCode } from "react-icons/fa6";
import { GoStack } from "react-icons/go";

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

export const services = [
  {
    id: 1,
    logo: <CgWebsite />,
    tag: "Webite Development",
    details:
      "Services with more than 2years of experience. Providing quality work to clients and companies",
    taskList: [
      "I develop user interface",
      "Web page development",
      "I create ux element interaction",
      "I create designs from wireframes and mockups",
      "Transforming ideas to pixel perfect design",
    ],
  },
  {
    id: 2,
    logo: <FaRegFileCode />,
    tag: "Frontend Development",
    details:
      "Experienced in building responsive and interactive user interfaces.",
    taskList: [
      "Develop responsive web pages",
      "Implement interactive elements",
      "Optimize performance for web applications",
      "Ensure cross-browser compatibility",
      "Utilize modern front-end frameworks like React.js",
    ],
  },
  {
    id: 3,
    logo: <GoStack />,
    tag: "FullStack Development",
    details:
      "Proficient in both frontend and backend development for comprehensive web solutions.",
    taskList: [
      "Develop and maintain full-stack applications",
      "Design RESTful APIs",
      "Implement server-side logic",
      "Integrate front-end with backend services",
    ],
  },
];

export const qualifications = {
  experience: [
    {
      id: 1,
      title: "Frontend Developer (Freelance)",
      date: "2022 - Current",
      description:
        "Developed and maintained web applications, improved user interfaces, and implemented new features using modern web technologies.",
    },
    {
      id: 2,
      title: "Junior Web Developer (G & D Developers) | Remote",
      date: "Jan 2023 - August 2023",
      description:
        "Worked on building responsive web pages, collaborated with designers and backend developers.",
    },
  ],
  education: [
    {
      id: 1,
      title: "Certification in Full Stack Web Development Course",
      institution: "University of Sydney (Australia)",
      date: "Feb 2024- Aug 2024 (expected)",
      description:
        "Studied intensive full stack web development course alongside 20+ hands-on and real world projects. Comprehensive practice with both frontend and backend technologies",
      person: null,
    },
    {
      id: 2,
      title: "Bachelor's Degree in Computer Engineering",
      institution: "Tribhuvan University (Kathmandu,Nepal)",
      date: "2013 - 2017",
      description:
        "Relevant course work DSA, Operating system, Database management system(DBMS), Programming, Computer networks, Human-computer iteraction",
      person: null,
    },
  ],
};

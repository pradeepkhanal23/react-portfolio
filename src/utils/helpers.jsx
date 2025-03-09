import AquaPro from "../assets/screenshots/aqua-pro.png";
import Qilo from "../assets/screenshots/qilo.png";
import Splitter from "../assets/screenshots/splitter.png";
import ExpenseTracker from "../assets/screenshots/expense-tracker.png";
import Reelscape from "../assets/screenshots/reelscape.png";
import Luxehome from "../assets/screenshots/luxehome.png";
import WeatherApp from "../assets/screenshots/weatherapp.png";
import Ptezilla from "../assets/screenshots/ptezilla.png";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCalendarCheck,
  FaAward,
  FaProjectDiagram,
  FaLaptopCode,
  FaCode,
  FaLayerGroup,
  FaEnvelope,
} from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

export const socialMedia = [
  {
    id: 1,
    icon: <FaLinkedin />,
    linkPath: "https://www.linkedin.com/in/pradeepk10",
  },
  {
    id: 2,
    icon: <FaGithub />,
    linkPath: "https://www.github.com/pradeepkhanal23",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    linkPath: "https://www.instagram.com/khanal.pradeep",
  },
];

export const cards = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Experience",
    info: "3+ Years",
  },
  {
    id: 2,
    icon: <FaProjectDiagram />,
    title: "Completed",
    info: "30+ Projects",
  },
  {
    id: 3,
    icon: <FaCalendarCheck />,
    title: "Availability",
    info: "Open to work",
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
    logo: <FaLaptopCode />,
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
    logo: <FaCode />,
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
    logo: <FaLayerGroup />,
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
      title: "Fullstack Web Developer (Freelance)",
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
      date: "Feb 2024- Aug 2024",
      description:
        "Studied intensive full stack web development course alongside 20+ hands-on and real world projects. Comprehensive practice with both frontend and backend technologies",
    },
    {
      id: 2,
      title: "Bachelor's Degree in Computer Engineering",
      institution: "Tribhuvan University (Kathmandu,Nepal)",
      date: "2013 - 2017",
      description:
        "Relevant course work DSA, Operating system, Database management system(DBMS), Programming, Computer networks, Human-computer iteraction",
    },
  ],
};

export const projects = [
  {
    title: "PTEZilla Ebook Store",
    category: ["Web", "Desktop", "All", "React"],
    techStack: [
      "Nextjs",
      "Typescript",
      "Shadcn",
      "JotForm",
      "Zod",
      "React-Hook-Form",
    ],
    imageUrl: Ptezilla,
    demoLink: "https://ptezilla.org/",
    githubLink: "https://github.com/pradeepkhanal23/ptezilla",
    projectDescription:
      "This application is my first freelance project for a client who is a PTE instructor. This is his ultimate PTE guide ebook store.",
  },
  {
    title: "Expense Tracker",
    category: ["React", "All", "Web", "Desktop"],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "Tailwind CSS",
      "Shadcn",
      "JWT",
    ],
    imageUrl: ExpenseTracker,
    demoLink: "https://expensetrac.com/",
    githubLink: "https://github.com/pradeepkhanal23/expense-tracker",
    projectDescription:
      "A user-friendly web application built with the MERN stack and GraphQL to track your expenses and gain insights into your spending habits.",
  },
  {
    title: "Luxehome Ecommerce",
    category: ["React", "All", "Web", "Desktop"],
    techStack: ["React", "Netlify Serverless", "Tailwind CSS", "Context API"],
    imageUrl: Luxehome,
    demoLink: "https://luxehome-ecommerce.netlify.app/",
    githubLink: "https://github.com/pradeepkhanal23/luxehome-ecommerce",
    projectDescription:
      "LuxeHome Furniture is an ambitious ecommerce website project designed to offer a luxurious and seamless online shopping experience for furniture enthusiasts.",
  },
  {
    title: "Reelscape",
    category: ["React", "All", "Web"],
    techStack: ["NextJS app route", "Tailwind CSS", "React", "Swiper JS"],
    imageUrl: Reelscape,
    demoLink: "https://reelscapev2.vercel.app/",
    githubLink: "https://github.com/pradeepkhanal23/reelscape-v2-next",
    projectDescription:
      "A movie description website made using Tailwind CSS and latest Next JS features. It uses the movie DB API to fetch the movies and TV shows.",
  },

  {
    title: "Aqua Pro",
    category: ["Web", "All"],
    techStack: ["Bootstrap5", "HTML", "CSS"],
    imageUrl: AquaPro,
    demoLink: "https://aqua-pro.netlify.app/",
    githubLink: "https://github.com/pradeepkhanal23/landing-page-project",
    projectDescription:
      "Landing page for a plumbing service company.This project is part of my take home assignment.",
  },
  {
    title: "Qilo",
    category: ["Web", "All"],
    techStack: ["OOP", "HTML", "JavaScript", "Bootstrap5"],
    imageUrl: Qilo,
    demoLink: "https://qilo.netlify.app/",
    githubLink: "https://github.com/pradeepkhanal23/caltrack-oop-project",
    projectDescription:
      "This application is designed to help users track their daily calorie intake and maintain a healthy lifestyle.",
  },
  {
    title: "Splitter",
    category: ["React", "All"],
    techStack: ["React", "CSS"],
    imageUrl: Splitter,
    demoLink: "https://splitter-pradeep-frontendmentor.netlify.app/",
    githubLink: "https://github.com/pradeepkhanal23/Splitter",
    projectDescription:
      "React app from frontend mentor challenge for splitting the bill and calculating the tips amoung the friends",
  },
  {
    title: "Weather Dashboard",
    category: ["Web", "Desktop", "All"],
    techStack: ["Bootstrap5", "HTML", "CSS"],
    imageUrl: WeatherApp,
    demoLink: "https://pradeepkhanal23.github.io/weather-dashboard/",
    githubLink: "https://github.com/pradeepkhanal23/weather-dashboard",
    projectDescription:
      "This application allows you to check the current weather and 5-day forecast for any city around the world.",
  },
];

export const portfolioTags = ["All", "React", "Web", "Desktop"];

export const contactCards = [
  {
    id: 1,
    icon: <FaEnvelope />,
    platform: "Email",
    contactInfo: "pradeepkhanal642@gmail.com",
    contactLink: "mailto:pradeepkhanal642@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    platform: "LinkedIn",
    contactInfo: "www.linkedin.com/in/pradeepk10",
    contactLink: "http://www.linkedin.com/in/pradeepk10",
  },
];

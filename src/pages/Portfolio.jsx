import { useState } from "react";
import { projects, portfolioTags } from "../utils/helpers";
import { Header } from "../components/index";
import { FaTv, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category.includes(category))
      );
    }
  };

  return (
    <>
      <section id="portfolio" className="p-5">
        <div className=" mx-auto w-full max-w-5xl">
          <Header title="Portfolio" subtitle="My Recent Work" />
          <div className="flex space-x-4 my-8  items-center justify-center">
            {portfolioTags.map((tag, i) => {
              return (
                <button
                  key={i}
                  className={`font-medium px-4 py-1 transition-all ${
                    activeCategory === tag
                      ? "bg-black text-white "
                      : " text-black"
                  } rounded-md`}
                  onClick={() => filterProjects(tag)}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 p-3 "
              >
                <div className="h-60 w-full border border-gray-200 rounded-xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full rounded-xl object-cover "
                  />
                </div>

                <div className="p-4 ">
                  <h4 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {project.projectDescription}
                  </p>
                  <div className="flex w-full items-center justify-center gap-x-5 md:gap-x-10 mt-4">
                    <a href={project.demoLink} target="_blank">
                      <button className=" flex items-center gap-x-2  cursor-pointer px-4 py-2 bg-gray-200 rounded-md  text-sm  font-['DynaPuff'] hover:bg-black hover:text-white">
                        Demo
                        <FaTv />
                      </button>
                    </a>
                    <a href={project.githubLink} target="_blank">
                      <button className=" flex items-center gap-x-2  cursor-pointer px-4 py-2 bg-gray-200 rounded-md  text-sm  font-['DynaPuff'] hover:bg-black hover:text-white">
                        Github
                        <FaGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;

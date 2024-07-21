import { useState } from "react";
import { projects, portfolioTags } from "../utils/helpers";
import { FaArrowRightLong } from "react-icons/fa6";

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
          <h2 className="title text-center">Portfolio</h2>
          <h3 className="subtitle text-center mb-10">Most Recent Work</h3>
          <div className="flex space-x-4 mb-8  items-center justify-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 p-3"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-50 rounded-xl drop-shadow-sm border border-gray-200 object-cover"
                />

                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {project.projectDescription}
                  </p>
                  <a
                    href={project.demoLink}
                    className="subtle inline-flex items-center gap-x-2 mt-3 "
                    target="_blank"
                  >
                    Demo
                    <FaArrowRightLong className="animate-bounceRight " />
                  </a>
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

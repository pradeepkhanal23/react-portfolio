import { useState } from "react";
import { projects, portfolioTags } from "../utils/helpers";
import { Header } from "../components/index";
import { ProjectCard } from "../components/index";
import { FaShapes, FaReact, FaGlobe, FaDesktop } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("All");

  // function to filter the project
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

  // Helper function to get the icon based on the active category
  const getIconForCategory = (category) => {
    switch (category) {
      case "All":
        return <FaShapes className="mr-2 h-5 w-5" />;
      case "React":
        return <FaReact className="mr-2 h-5 w-5" />;
      case "Web":
        return <FaGlobe className="mr-2 h-5 w-5" />;
      case "Desktop":
        return <FaDesktop className="mr-2 h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <>
      <section id="portfolio" className="p-5 scroll-mt-20">
        <div className=" mx-auto w-full max-w-7xl">
          <Header title="Portfolio" subtitle="My Recent Work" />
          <div className="flex items-center justify-center">
            <div className="switch-container">
              {portfolioTags.map((tag, i) => {
                return (
                  <button
                    key={i}
                    className={`switch ${
                      activeCategory === tag
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 "
                    }`}
                    onClick={() => filterProjects(tag)}
                  >
                    {getIconForCategory(tag)}
                    {/* Conditionally rendering the icon */}
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
            {filteredProjects.map((project) => (
              <article key={uuidv4()}>
                <ProjectCard {...project} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;

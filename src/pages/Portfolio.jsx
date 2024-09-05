import { useState } from "react";
import { projects, portfolioTags } from "../utils/helpers";
import { Header } from "../components/index";
import { ProjectCard } from "../components/index";

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
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
            {filteredProjects.map((project) => (
              <article key={project.id}>
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

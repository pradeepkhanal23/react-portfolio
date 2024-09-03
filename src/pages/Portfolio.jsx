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

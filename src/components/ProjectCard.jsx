import { FaGithub, FaTv } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = ({
  title,
  imageUrl,
  techStack,
  demoLink,
  githubLink,
  projectDescription,
}) => {
  return (
    <div className="mx-auto max-w-sm h-full flex flex-col border bg-white shadow-lg">
      {/* Image */}
      <div className="h-64 w-full p-2">
        <img
          className="h-full w-full object-cover border border-gray-100"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 flex flex-col">
        <h5 className="text-2xl font-bold mb-2">{title}</h5>

        {/* Description with min height */}
        <p className="mb-4 text-sm text-gray-600 min-h-[60px]">
          {projectDescription}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack?.map((stack, i) => (
            <span
              key={i}
              className="rounded-full bg-black text-white px-4 py-2 text-xs font-semibold"
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <hr />
          {/* Buttons */}
          <div className="flex items-center justify-between p-2">
            <a
              href={githubLink}
              target="_blank"
              className="rounded-lg bg-white flex items-center gap-x-2 px-4 py-2 text-[.9rem] font-semibold text-black transition hover:bg-gray-200"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href={demoLink}
              target="_blank"
              className="rounded-lg bg-white flex items-center gap-x-2 px-4 py-2 text-[.9rem] font-semibold text-black transition hover:bg-gray-200"
            >
              <FaTv />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

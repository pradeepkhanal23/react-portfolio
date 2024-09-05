import { FaGithub, FaTv } from "react-icons/fa";

const ProjectCard = ({
  title,
  imageUrl,
  techStack,
  demoLink,
  githubLink,
  projectDescription,
}) => {
  return (
    <>
      <div className="mx-auto max-w-sm   border bg-white shadow-lg">
        <div className="h-64 w-full p-2">
          <img
            className="h-full w-full object-cover   border border-gray-100"
            src={imageUrl}
            alt={title}
          />
        </div>

        <div className=" px-6">
          <h5 className="text-2xl font-bold mb-2">{title}</h5>
          <p className="mb-4 text-sm text-gray-600 ">{projectDescription}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack &&
              techStack.map((stack, i) => {
                return (
                  <span
                    key={i}
                    className="rounded-full bg-black text-white px-4 py-2 text-xs font-semibold"
                  >
                    {stack}
                  </span>
                );
              })}
          </div>
          <hr />
          <div className="flex items-center justify-between  p-2">
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
    </>
  );
};
export default ProjectCard;

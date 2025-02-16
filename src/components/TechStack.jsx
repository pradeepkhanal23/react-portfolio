import {
  html,
  css,
  express,
  graphql,
  js,
  mongo,
  node,
  pgsql,
  react,
  tailwind,
  nextjs,
  typescript,
  shadcnUi,
} from "../assets/icons/index";

const technologies = {
  frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Nextjs", icon: nextjs },
    { name: "Typescript", icon: typescript },
  ],
  ui: [
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Shadcn UI", icon: shadcnUi },
  ],
  backend: [
    { name: "Node.js", icon: node },
    { name: "Express", icon: express },
    { name: "MongoDB", icon: mongo },
    { name: "PostgreSQL", icon: pgsql },
    { name: "GraphQL", icon: graphql },
  ],
};

const TechLogo = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-10 h-10 md:w-12 md:h-12" />
);

const TechGroup = ({ tech }) => (
  <div className="flex flex-wrap items-center justify-center my-3 gap-6 md:gap-4">
    {tech.map((t) => (
      <TechLogo key={t.name} src={t.icon} alt={`${t.name} logo`} />
    ))}
  </div>
);

const TechStack = () => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row md:p-8 mx-auto container lg:mt-10">
      <h2 className="text-xl font-semibold decoration-gray-300 text-nowrap decoration-2 underline underline-offset-8 md:no-underline md:border-r-2 border-gray-300 md:pr-5 md:mr-8">
        Tech Stack
      </h2>
      <div className="mt-5 md:mt-0 md:flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {Object.entries(technologies).map(([key, value]) => (
          <TechGroup key={key} tech={value} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;

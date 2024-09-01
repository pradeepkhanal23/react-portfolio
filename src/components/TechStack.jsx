import {
  html,
  css,
  express,
  graphql,
  js,
  material,
  mongo,
  node,
  pgsql,
  react,
  redux,
  sass,
  tailwind,
} from "../assets/icons/index";

const TechStack = () => {
  return (
    <section className="flex md:px-10 justify-center flex-col items-center  md:mt-5 md:flex-row max-w-7xl mx-auto mb-10 md:mb-0">
      <span className="text-xl  md:mb-0 font-bold decoration-gray-300 text-nowrap decoration-2 underline underline-offset-8 md:no-underline md:border-r-2 border-gray-300 md:pr-5  md:mr-8">
        Tech Stack
      </span>
      <div className="mt-5 md:mt-0 md:flex items-center justify-start gap-x-10 ">
        {/* HTML, CSS, JS, React */}
        <div className="flex items-center justify-center my-3  gap-x-4 md:gap-x-1 ">
          <img src={html} alt="html logo" className="h-10 w-10 " />
          <img src={css} alt="css logo" className="w-10 h-10 " />
          <img src={js} alt="js logo" className="w-10 h-10 " />
          <img src={react} alt="React logo" className="h-10 w-10 " />
        </div>

        {/* Tailwind, Material-UI, Sass */}
        <div className="flex items-center justify-center my-3 gap-x-4 md:gap-x-1  ">
          <img src={tailwind} alt="Tailwind CSS logo" className="h-10 w-10 " />
          <img src={material} alt="Material-UI logo" className="h-10 w-10 " />
          <img src={sass} alt="Sass logo" className="h-10 w-10 " />
        </div>
        {/* Node, Express, MongoDB, GraphQL, PostgreSQL */}
        <div className="flex items-center justify-center my-3 gap-x-4 md:gap-x-1  ">
          <img src={node} alt="Node.js logo" className="h-10 w-10 " />
          <img src={redux} alt="Redux logo" className="h-10 w-10 " />
          <img src={express} alt="Express logo" className="h-10 w-10 " />
          <img src={mongo} alt="MongoDB logo" className="h-10 w-10 " />
          <img src={pgsql} alt="PostgreSQL logo" className="h-10 w-10 " />
          <img src={graphql} alt="GraphQL logo" className="h-10 w-10 " />
        </div>
      </div>
    </section>
  );
};
export default TechStack;

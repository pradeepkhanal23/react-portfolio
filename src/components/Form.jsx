import { PiPaperPlaneTiltBold } from "react-icons/pi";

const Form = () => {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            required
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="project"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Project
          </label>
          <textarea
            id="project"
            rows="4"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Write your project idea here..."
            required
          ></textarea>
        </div>
        <button className="btn">
          Send Message <PiPaperPlaneTiltBold />
        </button>
      </form>
    </>
  );
};
export default Form;

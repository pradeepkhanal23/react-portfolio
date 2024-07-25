import { useState } from "react";
import { qualifications } from "../utils/helpers";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

const Qualifications = () => {
  const [view, setView] = useState("education");

  const handleToggle = (viewType) => {
    setView(viewType);
  };

  return (
    <>
      <section className="p-5 w-full max-w-5xl mx-auto">
        <div className="mb-5 text-center">
          <h2 className="title">Qualification</h2>
          <p className="subtitle">My personal journey</p>
        </div>

        <div className="text-center mb-10">
          <button
            onClick={() => handleToggle("education")}
            className={`mx-2 inline-flex items-center gap-x-2 ${
              view === "education"
                ? "font-bold  transition-all"
                : "font-lighter"
            }`}
          >
            <FaUniversity className="text-xl" /> Education
          </button>
          <button
            onClick={() => handleToggle("experience")}
            className={`px-4 py-2 mx-2 inline-flex items-center gap-x-2 ${
              view === "experience"
                ? "font-bold  transition-all"
                : "font-lighter"
            }`}
          >
            <FaBriefcase className="text-xl" /> Experience
          </button>
        </div>

        <div>
          {qualifications[view].map((item) => (
            <div key={item.id} className="relative mb-8">
              <div className="flex gap-x-3">
                <div className="relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-gray-400 ">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-700 "></div>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 ">
                  <h3 className="font-semibold text-gray-800  mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-sm text-gray-500  mb-1">{item.date}</h4>
                  <h4 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
                    {item.institution}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Qualifications;

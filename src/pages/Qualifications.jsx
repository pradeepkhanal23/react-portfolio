import { useState } from "react";
import { qualifications } from "../utils/helpers";
import { ToggleSwitch, Header } from "../components/index";

const Qualifications = () => {
  const [view, setView] = useState("education");

  const handleToggle = (viewType) => {
    setView(viewType);
  };

  return (
    <>
      <section className="p-5 w-full max-w-5xl mx-auto">
        <div className="mb-5 text-center">
          <Header title="Qualification" subtitle="My Personal Journey" />
        </div>

        <div className="text-center mb-10">
          <ToggleSwitch options={view} onToggle={handleToggle} />
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
                  <h3 className="font-semibold text-gray-800  mb-1 text-xl">
                    {item.title}
                  </h3>
                  <h4 className="text-sm text-gray-500  mb-1">{item.date}</h4>
                  <h4 className="text-sm text-gray-600 font-bold  mb-1">
                    {item.institution}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 ">
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

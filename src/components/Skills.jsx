import { RiCheckboxCircleFill } from "react-icons/ri";
import { backendSkills, frontendSkills } from "../utils/helpers";

const Skills = () => {
  return (
    <>
      <section className="p-5 max-w-5xl mx-auto flex flex-col gap-y-5 mt-5">
        <div>
          <h2 className="title text-center">Skills</h2>
          <p className="subtitle text-center">My technical level</p>
        </div>
        <div className="skill-container">
          <div className="skill-frontend">
            <article className="skill-card">
              <h4 className="skill-card-header">Frontend Skills</h4>
              <div className="skill-card-body">
                <div className="skill-col-one">
                  {/* First Col */}

                  {frontendSkills.slice(0, 3).map((fskill) => {
                    const { id, name, level } = fskill;
                    return (
                      <div className="mb-3" key={id}>
                        <div className="flex items-center gap-x-1">
                          <RiCheckboxCircleFill />
                          <h4 className="font-bold">{name}</h4>
                        </div>
                        <p className="subtle">{level}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="col-two">
                  {/* Second Col */}
                  {frontendSkills.slice(3).map((fskill) => {
                    const { id, name, level } = fskill;
                    return (
                      <div className="mb-3" key={id}>
                        <div className="flex items-center gap-x-1">
                          <RiCheckboxCircleFill />
                          <h4 className="font-bold">{name}</h4>
                        </div>
                        <p className="subtle">{level}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
          <div className="skill-backend">
            <article className="skill-card">
              <h4 className="skill-card-header">Backend Skills</h4>
              <div className="skill-card-body">
                <div className="skill-col-one">
                  {/* First Col */}

                  {backendSkills.slice(0, 3).map((bskill) => {
                    const { id, name, level } = bskill;
                    return (
                      <div className="mb-3" key={id}>
                        <div className="flex items-center gap-x-1">
                          <RiCheckboxCircleFill />
                          <h4 className="font-bold">{name}</h4>
                        </div>
                        <p className="subtle">{level}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="col-two">
                  {/* Second Col */}
                  {backendSkills.slice(3).map((bskill) => {
                    const { id, name, level } = bskill;
                    return (
                      <div className="mb-3" key={id}>
                        <div className="flex items-center gap-x-1">
                          <RiCheckboxCircleFill />
                          <h4 className="font-bold">{name}</h4>
                        </div>
                        <p className="subtle">{level}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;

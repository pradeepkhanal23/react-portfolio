import DisplayImage from "../assets/developer.svg";
import { SlDocs } from "react-icons/sl";
import { cards } from "../utils/helpers";
import resume from "../data/resume.pdf";

const About = () => {
  return (
    <>
      <section
        className="p-5 mx-auto container flex flex-col items-center justi gap-y-4 "
        id="about"
      >
        <h2 className="title text-center">About Me</h2>
        <p className="subtitle text-center">My introduction</p>
        <div className="about-container">
          <div className="about-image-wrapper">
            <img
              src={DisplayImage}
              alt="profile picture"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <div className="about-cards">
              {cards.map((card) => {
                const { id, icon, title, info } = card;
                return (
                  <article className="about-card" key={id}>
                    <span className="text-2xl">{icon}</span>
                    <h4 className="para font-semibold">{title}</h4>
                    <p className="subtle">{info}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-5">
              <p className="para">
                As a driven and tech-savvy web developer, I have always had a
                strong gravitational pull toward technology. I am currently
                pursuing an intensive full stack web development coding
                certificate at the University of Sydney.
              </p>
            </div>
            <div className="about-resume-button-wrapper">
              <a href={resume} download="Pradeep_Khanal_Frontend_Resume">
                <button className="btn">
                  Download CV
                  <SlDocs className="text-xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

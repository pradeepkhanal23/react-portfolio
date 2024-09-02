import DisplayImage from "../assets/developer.svg";
import { SlDocs } from "react-icons/sl";
import { cards } from "../utils/helpers";
import resume from "../data/resume.pdf";
import { Header } from "../components/index";

const About = () => {
  return (
    <>
      <section
        className="p-5 mx-auto max-w-5xl flex flex-col items-center justi gap-y-5 "
        id="about"
      >
        <Header title="About Me" subtitle="My Introduction" />
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
                Front-end/Full stack web developer with a background in Computer
                Engineering to blend the artistic mind with creativity. As a
                driven and tech-savvy web developer, I have always had a strong
                gravitational pull toward technology.
              </p>
              <br />
              <p className="para">
                My main stack currently is React/Tailwind CSS in combination
                with Node js, Express and Mongo DB.
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

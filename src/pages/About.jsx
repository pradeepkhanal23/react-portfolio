import DisplayImage from "../assets/icons/developer.svg";
import { SlDocs } from "react-icons/sl";
import { cards } from "../utils/helpers";

import { Header } from "../components/index";

const About = () => {
  return (
    <>
      <section
        className="p-5 mx-auto max-w-5xl flex flex-col items-center justi gap-y-5 scroll-mt-20"
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
                Engineering to blend the artistic mind with creativity.
                Strengths in innovation, problem solving, teamwork, and building
                projects from ideation to execution with a pixel perfect
                mindset.
              </p>
              <br />
            </div>
            <div className="about-resume-button-wrapper">
              <a
                href="https://docs.google.com/document/d/1hPsn2hJV382Cb0s8_QokRjoUmLm_NOyhrRuqHN3VXw0/edit?usp=sharing"
                target="_blank"
              >
                <button className="btn">
                  View Resume
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

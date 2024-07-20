import ProfileImage from "../assets/profile-picture.png";
import { SlDocs } from "react-icons/sl";
import { cards } from "../utils/helpers";

const About = () => {
  return (
    <>
      <section className="about-section">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">My introduction</p>
        <div className="about-container">
          <div className="about-image-wrapper">
            <img
              src={ProfileImage}
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
                    {icon}
                    <h4 className="about-card-title">{title}</h4>
                    <p className="about-card-info">{info}</p>
                  </article>
                );
              })}
            </div>
            <div className="about-info">
              <p className="about-description">
                As a driven and tech-savvy web developer, I have always had a
                strong gravitational pull toward technology. I am currently
                pursuing an intensive full stack web development coding
                certificate at the University of Sydney.
              </p>
            </div>
            <div className="about-resume-button-wrapper">
              <button className="about-resume-button">
                Download CV
                <SlDocs className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

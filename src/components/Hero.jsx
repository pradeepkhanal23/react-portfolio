import { CiInstagram, CiFacebook } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import ProfileImage from "../assets/profile-picture.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="flex items-center space-x-5">
          {/* Social Icons */}
          <div className="hero-social-icons ">
            <a href="#">
              <CiInstagram className="text-3xl" />
            </a>
            <a href="#">
              <CiFacebook className="text-3xl" />
            </a>
            <a href="#">
              <RiGithubLine className="text-3xl" />
            </a>
          </div>

          {/* Hero Image Section */}
          <img
            className="hero-image "
            src={ProfileImage}
            alt="Pradeep Khanal Profile Image"
          />
        </div>

        {/* Hero Text Section */}
        <div className="hero-text  mt-5 ">
          <h1 className="text-4xl font-bold font-['Figtree']">
            Pradeep Khanal
          </h1>
          <div className="flex items-center space-x-4">
            <hr className="w-10 h-[.12rem] bg-gray-400" />
            <h2 className="text-xl ">Frontend Developer</h2>
          </div>
          <p className="text-lg">
            Front-end web developer with a background in Computer Engineering to
            blend the artistic mind with creativity.
          </p>
          <button className="hero-button">Say Hello</button>
          <a href="#next-section" className="scroll-button">
            Scroll Down
          </a>
        </div>
      </section>
    </>
  );
};
export default Hero;

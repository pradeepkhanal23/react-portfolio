import { CiInstagram, CiFacebook } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { PiPaperPlaneTiltBold, PiMouseSimpleLight } from "react-icons/pi";
import { FiArrowDown } from "react-icons/fi";
import ProfileImage from "../assets/profile-picture.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section mt-5 ">
        {/* Social Icons */}
        <div className="hero-social-icons ">
          <a href="#">
            <CiInstagram className="text-3xl lg:text-4xl" />
          </a>
          <a href="#">
            <CiFacebook className="text-3xl lg:text-4xl" />
          </a>
          <a href="#">
            <RiGithubLine className="text-3xl lg:text-4xl" />
          </a>
        </div>

        {/* Hero Image Section */}
        <img
          className="hero-image bubble-image"
          src={ProfileImage}
          alt="Pradeep Khanal Profile Image"
        />

        {/* Hero Text Section */}
        <div className="hero-text  mt-5 ">
          <h1 className="text-4xl font-bold ">Pradeep Khanal</h1>
          <div className="flex items-center space-x-4">
            <hr className="w-10 h-[.12rem] bg-gray-400" />
            <h2 className="text-xl">Frontend Developer</h2>
          </div>
          <p className="text-md">
            Front-end web developer with a background in Computer Engineering to
            blend the artistic mind with creativity. Strengths in innovation,
            problem solving, teamwork, and building projects from ideation to
            execution with a pixel perfect mindset.
          </p>
          <button className="hero-button">
            Say Hello <PiPaperPlaneTiltBold />
          </button>
          <div className="scroll-button pt-10">
            <PiMouseSimpleLight className="text-3xl" />
            Scroll Down
            <FiArrowDown className="animate-bounce text-xl" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;

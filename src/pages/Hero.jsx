import { PiMouseSimpleLight } from "react-icons/pi";
import { FiArrowDown } from "react-icons/fi";
import ProfileImage from "../assets/profile-picture.png";
import { socialMedia } from "../utils/helpers";
import { html } from "../assets/icons/index";

const Hero = () => {
  return (
    <>
      <section className="hero-section min-h-screen ">
        {/* Hero Image Section */}
        <img
          className="hero-image bubble-image "
          src={ProfileImage}
          alt="Pradeep Khanal Profile Image"
        />

        {/* Hero Text Section */}
        <div className="hero-text mt-5">
          <h1 className="title text-center md:text-left">
            Pradeep Khanal
            <span> 👋</span>
          </h1>
          <div className="flex items-center  space-x-4">
            <hr className="w-10 h-[.15rem] bg-gray-500" />
            <h2 className="font-semibold text-lg">Full-Stack Web Developer </h2>
          </div>
          <p className="para text-center md:text-left">
            Hi, I'm Pradeep. A passionate full-stack web developer with a
            background in Computer Engineering to blend the artistic mind with
            creativity. I am based in Sydney, NSW, Australia. 📍
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-x-5 ">
            {socialMedia.map((social) => {
              const { id, icon, linkPath } = social;
              return (
                <a key={id} href={linkPath} target="_blank">
                  <span className="text-3xl lg:text-4xl">{icon}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-10 ">
            <h2 className="text-lg mb-5 font-semibold underline underline-offset-4 md:no-underline md:border-r-2 border-gray-500 md:pr-5">
              Tech Stack
            </h2>
            <div>
              <img src={html} alt="html logo" className="h-14 w-14" />
            </div>
          </div>
          <div className="scroll-button pt-10">
            <PiMouseSimpleLight className="h-6 w-6" />
            Scroll Down
            <FiArrowDown className="animate-bounce h-5 w-5" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;

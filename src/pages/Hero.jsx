import ProfileImage from "../assets/profile-picture.png";
import { PiMouseSimpleLight } from "react-icons/pi";
import { FiArrowDown } from "react-icons/fi";
import { socialMedia } from "../utils/helpers";
import { TechStack } from "../components";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center md:gap-x-8 md:justify-center h-full md:flex-row p-5 md:p-10 mx-auto max-w-7xl">
        {/* Hero Image Section */}
        <img
          className="hero-image bubble-image rounded-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mb-5 md:mb-0 animate-bubble"
          src={ProfileImage}
          alt="Pradeep Khanal Profile Image"
        />

        {/* Hero Text Section */}
        <div className="hero-text flex flex-col items-center md:items-start mt-5 md:mt-0 text-center md:text-left space-y-4">
          <h1 className="title text-3xl md:text-4xl font-semibold">
            Pradeep Khanal <span> 👋</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <hr className="w-10 h-[.15rem] bg-gray-500" />
            <h2 className="font-semibold text-lg uppercase">
              FullStack Web Developer
            </h2>
          </div>
          <p className="para text-base md:text-lg p-5 md:p-0">
            Hi, I'm Pradeep. A passionate full-stack web developer based in
            Sydney, NSW, Australia <span>📍</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-x-5 pb-5">
            {socialMedia.map((social) => {
              const { id, icon, linkPath } = social;
              return (
                <a
                  key={id}
                  href={linkPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-3xl lg:text-4xl">{icon}</span>
                </a>
              );
            })}
          </div>

          {/* Scroll Down Button */}
          <div className="scroll-button py-5">
            <PiMouseSimpleLight className="h-6 w-6" />
            <span className="text-lg"> Scroll Down</span>
            <FiArrowDown className="animate-bounce h-6 w-6" />
          </div>
        </div>
      </section>

      <TechStack />
    </>
  );
};

export default Hero;

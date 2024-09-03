import ProfileImage from "../assets/profile-picture.png";
import { PiMouseSimpleLight } from "react-icons/pi";
import { FiArrowDown } from "react-icons/fi";
import { socialMedia } from "../utils/helpers";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        {/* Hero Image Section */}
        <img
          className="hero-image bubble-image"
          src={ProfileImage}
          alt="Pradeep Khanal Profile Image"
        />

        {/* Hero Text Section */}
        <div className="hero-text mt-5">
          <h1 className="title  text-center md:text-left lg:text-nowrap">
            Pradeep Khanal
            <span> 👋</span>
          </h1>
          <div className="flex items-center  space-x-4">
            <hr className="w-10 h-[.15rem] bg-gray-500" />
            <h2 className="font-semibold text-lg">Full-Stack Web Developer </h2>
          </div>
          <p className="para text-center md:text-left p-5 md:p-0">
            Hi, I'm Pradeep. A passionate full-stack web developer based in
            Sydney, NSW, Australia<span>📍</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-x-5 pb-5">
            {socialMedia.map((social) => {
              const { id, icon, linkPath } = social;
              return (
                <a key={id} href={linkPath} target="_blank">
                  <span className="text-3xl lg:text-4xl">{icon}</span>
                </a>
              );
            })}
          </div>

          <div className="scroll-button py-10">
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

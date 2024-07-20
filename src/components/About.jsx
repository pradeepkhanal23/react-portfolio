import ProfileImage from "../assets/profile-picture.png";
import { SlBadge } from "react-icons/sl";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <section className="p-5 mx-auto container flex flex-col ">
      <h2 className="text-center text-3xl font-bold">About Me</h2>
      <p className="text-center text-lg">My introduction</p>
      <div className="w-full flex flex-col items-center gap-4 md:flex-row ">
        <img
          src={ProfileImage}
          alt="profile picture"
          className="mt-10 rounded-2xl shadow-md border-gray-200 border-1 h-80 w-80 object-cover"
        />
        <div className="flex flex-row gap-3 flex-wrap items-center  justify-center md:flex-nowrap">
          {/* card1 */}
          <article className="border-gray-200 bg-white rounded-md border-2 p-3 flex flex-1 flex-col items-center  gap-y-2 text-nowrap">
            <SlBadge className="text-xl" />
            <h4 className="font-bold ">Experience</h4>
            <p className=" text-gray-500 tracking-tight text-sm">2+ Years</p>
          </article>
          {/* card2 */}
          <article className="border-gray-200 bg-white rounded-md border-2 p-3 flex flex-1 flex-col items-center  gap-y-2 text-nowrap">
            <AiOutlineFileDone className="text-xl" />
            <h4 className="font-bold ">Completed</h4>
            <p className=" text-gray-500 tracking-tight text-sm">
              20+ Projects
            </p>
          </article>
          {/* card3 */}
          <article className="border-gray-200 bg-white rounded-md border-2 p-3 flex flex-1 flex-col items-center  gap-y-2 text-nowrap">
            <BiSupport className="text-xl" />
            <h4 className="font-bold ">Support</h4>
            <p className=" text-gray-500 tracking-tight text-sm">Online 24/7</p>
          </article>
          {/* <div>
          <p className="text-lg text-center">
            As a driven and tech-savvy web developer, I have always had a strong
            gravitational pull toward technology. I am currently pursuing an
            intensive full stack web development coding certificate at the
            University of Sydney. I am gaining experience in the foundations of
            web development while honing my skills in HTML5, CSS3, Bootstrap,
            JavaScript, jQuery, Node, Express, React, MongoDB, Postgres as well.
          </p>
        </div> */}
        </div>

        {/* <div className="text-center mt-5">
            <button className="py-2 px-3 bg-black text-white rounded-md">
              Download CV
            </button>
          </div> */}
      </div>
    </section>
  );
};
export default About;

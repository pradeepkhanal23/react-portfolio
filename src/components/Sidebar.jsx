import { IoMdClose } from "react-icons/io";

import { FaRegUser, FaHome, FaImage, FaPaperPlane } from "react-icons/fa";

const navlinksWithIcon = [
  { name: "home", icon: FaHome },
  { name: "about", icon: FaRegUser },
  { name: "portfolio", icon: FaImage },
  { name: "contact", icon: FaPaperPlane },
];

const Sidebar = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <>
      <aside className={`${isNavOpen ? "sidebar show-sidebar " : "sidebar"}`}>
        <div className="absolute h-full w-full opacity-10 bg-sidebar-pattern -z-20 bg-center bg-fill bg-no-repeat "></div>
        <div className="flex-shrink-0 pt-3 ">
          <a
            href="#"
            className="flex text-3xl uppercase font-semibold brand-name"
          >
            Pradeep
          </a>
        </div>
        <div className="absolute right-0 top-0 ">
          <IoMdClose
            className="cursor-pointer hover:text-blue-600 h-7 w-7 m-5"
            onClick={() => {
              setIsNavOpen(false);
            }}
          />
        </div>
        <ul className="flex flex-col items-center justify-center text-xl gap-y-10 w-full h-full ">
          {navlinksWithIcon.map((link, i) => {
            const Icon = link.icon;
            return (
              <li key={i} className=" flex items-center gap-x-5 ">
                <Icon />
                <a
                  href={`#${link.name}`}
                  className={`capitalize font-semibold hover:text-blue-600`}
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;

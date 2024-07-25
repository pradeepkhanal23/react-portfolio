import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const Drawer = ({ setIsNavOpen }) => {
  return (
    <>
      <aside
        className={` bg-white border rounded-t-xl border-gray-200 rounded-md overflow-y-hidden shadow-xl sm:hidden  fixed bottom-0 right-0 left-0 z-30 transition-transform duration-300 ease-in-out ${
          setIsNavOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="absolute right-0 bottom-0 p-3 text-xl ">
          <IoMdClose
            className="cursor-pointer"
            onClick={() => {
              setIsNavOpen(false);
            }}
          />
        </div>
        <ul className="grid grid-cols-3 w-full p-5">
          <li className="drawer-ul-li-a">
            <a
              href="#hero"
              className="flex flex-col items-center gap-y-2 "
              onClick={() => setIsNavOpen(false)}
            >
              <IoHomeOutline className="drawer-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="drawer-ul-li-a">
            <a
              href="#about"
              className="flex flex-col items-center gap-y-2 "
              onClick={() => setIsNavOpen(false)}
            >
              <FaRegUser className="drawer-icon" />
              <span>About</span>
            </a>
          </li>
          <li className="drawer-ul-li-a">
            <a
              href="#skills"
              className="flex flex-col items-center gap-y-2 "
              onClick={() => setIsNavOpen(false)}
            >
              <SlDocs className="drawer-icon" />
              <span>Skills</span>
            </a>
          </li>
          <li className="drawer-ul-li-a">
            <a
              href="#services"
              className="flex flex-col items-center gap-y-2 "
              onClick={() => setIsNavOpen(false)}
            >
              <PiShoppingBagOpenLight className="drawer-icon" />
              <span>Services</span>
            </a>
          </li>
          <li className="drawer-ul-li-a">
            <a
              href="#portfolio"
              className="flex flex-col items-center gap-y-2 "
              onClick={() => setIsNavOpen(false)}
            >
              <AiOutlinePicture className="drawer-icon" />
              <span>Portfolio</span>
            </a>
          </li>
          <li className="drawer-ul-li-a">
            <a
              href="#contact"
              className="flex flex-col items-center gap-y-2 "
              onClick={() => setIsNavOpen(false)}
            >
              <PiPaperPlaneTiltBold className="drawer-icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default Drawer;

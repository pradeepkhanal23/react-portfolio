import { useState } from "react";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { RiMenu3Fill } from "react-icons/ri";
import { Drawer } from "../components/index";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="pb-6 lg:pb-0 text-lg" id="home">
        <div>
          {/* Top Navbar for Large Screen*/}
          <nav className="flex items-center backdrop-blur-lg justify-between py-4 bg-white/60  drop-shadow-md w-full fixed top-0 z-10 px-6 lg:px-10  ">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex text-2xl uppercase font-semibold brand-name"
              >
                Pradeep
              </a>
            </div>

            {/* Navlinks for the small and above screen */}
            <ul className="hidden sm:flex gap-x-8 ">
              {["home", "about", "portfolio", "contact"].map((link, i) => {
                return (
                  <li key={i}>
                    <a
                      href={`#${link}`}
                      className={`capitalize font-semibold hover:text-blue-600`}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* hamburger menu for smaller screen */}
            <RiMenu3Fill
              className="cursor-pointer h-6 w-6 sm:hidden hover:text-blue-600"
              onClick={handleNavToggle}
            />
          </nav>
        </div>
        {/* Rendering the drawer based on the toggle value */}
        {isNavOpen && (
          <Drawer
            setIsNavOpen={setIsNavOpen}
            handleNavToggle={handleNavToggle}
          />
        )}
      </div>
    </>
  );
};
export default Navbar;

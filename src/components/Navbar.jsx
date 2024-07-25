import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

import { TfiLayoutGrid2 } from "react-icons/tfi";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavToggle = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="pb-6 lg:pb-0 ">
        <div className="px-4 mx-auto  sm:px-6 lg:px-8">
          <nav className="hidden sm:flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex text-2xl uppercase font-semibold brand-name"
              >
                Pradeep
              </a>
            </div>

            {/* Top Navbar for Large Screen*/}
            <ul className="flex gap-x-2">
              {[
                "home",
                "about",
                "skills",
                "services",
                "portfolio",
                "contact",
              ].map((link, i) => {
                return (
                  <li key={i}>
                    <a
                      href={`#${link}`}
                      className={`navlinks capitalize ${
                        activeLink === link ? "active  " : ""
                      }`}
                      onClick={() => setActiveLink(link)}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav>
            {/* Bottom Navbar for small and medium */}
            <div className="fixed bottom-0 right-0 left-0 w-full sm:hidden z-20">
              <div className="flex items-center justify-between py-3 px-8 bg-white shadow-lg  border-t-2 border-gray-200">
                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="flex text-2xl uppercase font-semibold brand-name"
                  >
                    Pradeep
                  </a>
                </div>
                <TfiLayoutGrid2
                  className="cursor-pointer text-xl"
                  onClick={handleNavToggle}
                />
              </div>
            </div>
          </nav>
        </div>
        {/* Rendering the drawer based on the toggle value */}
        {isNavOpen && (
          <Drawer
            setIsNavOpen={setIsNavOpen}
            handleNavToggle={handleNavToggle}
          />
        )}
      </header>
    </>
  );
};
export default Navbar;

import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="pb-6  lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex text-2xl uppercase font-semibold brand-name"
              >
                Pradeep
              </a>
            </div>

            <ul className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              {[
                "Home",
                "About",
                "Skills",
                "Services",
                "Portfolio",
                "Contact",
              ].map((link, i) => {
                return (
                  <li key={i}>
                    <a href={link} className="navlinks">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
            <RiMenu3Fill
              className="text-2xl cursor-pointer lg:hidden"
              onClick={handleNavToggle}
            />
          </nav>

          {isNavOpen && (
            <>
              <nav className=" p-3 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                <div className="flex items-start justify-between">
                  <ul className=" flex-col px-6 -my-2 space-y-3">
                    {[
                      "Home",
                      "About",
                      "Skills",
                      "Services",
                      "Portfolio",
                      "Contact",
                    ].map((link, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={link}
                            className="navlinks inline-flex py-2"
                            onClick={handleNavToggle}
                          >
                            {link}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <IoMdClose
                    className="text-2xl cursor-pointer"
                    onClick={handleNavToggle}
                  />
                </div>
              </nav>
            </>
          )}
        </div>
      </header>
    </>
  );
};
export default Navbar;

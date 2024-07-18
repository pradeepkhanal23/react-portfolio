const Navbar = () => {
  return (
    <>
      <header className="pb-6  lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* lg+ */}
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex text-2xl uppercase font-semibold brand-name"
              >
                Pradeep
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

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
          </nav>

          {/* xs to lg */}
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <ul className="flex flex-col px-6 -my-2 space-y-3">
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
                      <a href={link} className="navlinks inline-flex py-2">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;

import { Link } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="bg-gray-900 text-white flex flex-row justify-center text-base sticky top-0 z-50 px-8">
        <div className="flex justify-between items-center h-16 w-full max-w-screen-2xl">
          <Link
            to="/"
            className=" text-yellow-300 text-xl flex gap-2 items-center"
            onClick={() => {
              closeMobileMenu();
              setActive("home");
            }}
          >
            FitGIFs <i className="fab fa-typo3" />
          </Link>
          <div className="cursor-pointer text-2xl" onClick={handleClick}>
            <i
              className={
                click ? "md:hidden fas fa-times" : "md:hidden fas fa-bars"
              }
            />
          </div>
          <ul
            className={`md:flex md:flex-row md:gap-20 md:bg-inherit md:relative md:h-auto md:opacity-100 md:top-0 md: left-0 md:justify-end md:items-center ${
              click
                ? "flex flex-col justify-start fixed  w-full h-screen top-16 py-8 bg-gray-950 left-0 opacity-100 z-10 transition-all items-center gap-10"
                : "flex flex-col justify-start w-0 h-screen fixed top-16 py-8 -left-full opacity-0 transition-all items-center gap-10"
            }`}
          >
            <li className="nav-item">
              <Link
                to="/"
                className={`${
                  active === "home"
                    ? "border-b-solid border-b-yellow-300 border-b-4"
                    : ""
                } h-20 p-1 hover:border-b-solid hover:border-b-yellow-300 hover:border-b-4`}
                onClick={() => {
                  closeMobileMenu();
                  setActive("home");
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`${
                  active === "about"
                    ? "border-b-solid border-b-yellow-300 border-b-4"
                    : ""
                } h-20 p-1 hover:border-b-solid hover:border-b-yellow-300 hover:border-b-4`}
                onClick={() => {
                  closeMobileMenu();
                  setActive("about");
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

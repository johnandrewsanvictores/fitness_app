import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="bg-gray-900 text-white h-20 flex flex-row justify-center text-lg sticky top-0 z-50 px-8">
        <div className="flex justify-between items-center h-20 w-full max-w-screen-2xl">
          <Link
            to="/"
            className=" text-yellow-300 text-3xl flex gap-2 items-center"
            onClick={() => {
              closeMobileMenu();
              setActive("home");
            }}
          >
            Gym <i className="fab fa-typo3" />
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
                ? "flex flex-col justify-start fixed  w-full h-screen top-20 py-8 bg-gray-950 left-0 opacity-100 z-10 transition-all items-center gap-10"
                : "flex flex-col justify-start w-0 h-screen fixed top-20 py-8 -left-full opacity-0 transition-all items-center gap-10"
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

    // <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
    //     <Link to="/">
    //         <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px'}} />
    //     </Link>
    //     <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
    //         <Link to="/" style={{textDecoration: "none", color: "#3A1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
    //         <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
    //     </Stack>
    // </Stack>
  );
};

export default Navbar;

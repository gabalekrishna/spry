import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '../styles/Navbar.scss'
import { Link } from "@mui/material";
import Switch from "@mui/material/Switch";


function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));
  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>sprypt</span>
          <span className="dot">.</span>
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
         
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
            <Switch
                checked={currentTheme === "dark"}
                onChange={changeTheme}
                color="primary"
              />
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li>
                <Link href="#"> Home</Link>
              </li>
              <li>
                <Link href="#"> Features</Link>
              </li>
              <li>
                <Link href="#"> Pricing</Link>
              </li>
              <li>
                <Link href="#"> Blogs</Link>
              </li>
              <li>
                <Link href="#"> About</Link>
              </li>
              <Switch
                  checked={currentTheme === "dark"}
                  onChange={changeTheme}
                  color="primary"
                />
             
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
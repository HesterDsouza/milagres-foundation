import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768); // FIX: only below 768px is mobile
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleDropdown = (name, isDblClick = false) => {
    if (isMobile) {
      if (isDblClick) setOpenDropdown(openDropdown === name ? null : name);
    } else setOpenDropdown(name);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src="https://res.cloudinary.com/dujtfd2fz/image/upload/v1756179431/ChatGPT_Image_Aug_26_2025_09_06_43_AM_a7sdqi.png"
            alt="Milagres Foundation Logo"
          />
          <NavLink to="/">Milagres Foundation</NavLink>
        </div>

        {/* Hamburger only for <768px */}
        {isMobile && (
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon id="icon" icon={menuOpen ? faTimes : faBars} />
          </button>
        )}

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* About */}
          <div
            className={`nav-link-drop-down ${
              openDropdown === "about" ? "open" : ""
            }`}
            onMouseEnter={() => !isMobile && toggleDropdown("about")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <div className="dropdown-toggle">
              <NavLink to="/about-us">About</NavLink>
              {/* Chevron only toggles dropdown in mobile */}
              <FontAwesomeIcon
                className="icon"
                icon={faChevronDown}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault(); // prevent NavLink navigation
                    toggleDropdown("about", true);
                  }
                }}
              />
            </div>
            <div className="dropdown-menu">
              <HashLink smooth to="/about-us#foundersMessage">
                Founder&apos;s Message
              </HashLink>
              <HashLink smooth to="/about-us#volunteers">
                Volunteers Team
              </HashLink>
            </div>
          </div>

          {/* Events */}
          <div
            className={`nav-link-drop-down ${
              openDropdown === "events" ? "open" : ""
            }`}
            onMouseEnter={() => !isMobile && toggleDropdown("events")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <div className="dropdown-toggle">
              <NavLink to="/events">Events</NavLink>
              <FontAwesomeIcon
                className="icon"
                icon={faChevronDown}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    toggleDropdown("events", true);
                  }
                }}
              />
            </div>
            <div className="dropdown-menu">
              <HashLink smooth to="/events#programs">
                Programs
              </HashLink>
              <HashLink smooth to="/events#gallery">
                Gallery
              </HashLink>
            </div>
          </div>

          {/* Join Us */}
          <div
            className={`nav-link-drop-down ${
              openDropdown === "join" ? "open" : ""
            }`}
            onMouseEnter={() => !isMobile && toggleDropdown("join")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <div className="dropdown-toggle">
              <NavLink to="/join-us">Join Us</NavLink>
              <FontAwesomeIcon
                className="icon"
                icon={faChevronDown}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    toggleDropdown("join", true);
                  }
                }}
              />
            </div>
            <div className="dropdown-menu">
              <HashLink smooth to="/join-us#volunteer">
                Volunteer
              </HashLink>
              <HashLink smooth to="/join-us#donate-item">
                Donate Commodity
              </HashLink>
            </div>
          </div>

          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/corporate-social-responsibility">CSR</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

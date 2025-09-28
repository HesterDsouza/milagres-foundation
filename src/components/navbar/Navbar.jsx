import { NavLink } from "react-router-dom"
import "./navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { HashLink } from "react-router-hash-link"

const Navbar = () => {
  // const base = import.meta.env.BASE_URL; 
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768)
    checkScreen()

    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const toggleDropdown = (name, isDblClick = false) => {
    if(isMobile){
      if(isDblClick) setOpenDropdown(openDropdown === name ? null : name)
    } else setOpenDropdown(name)
  }

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          {/* Without background */}
          {/* <img
            src="https://res.cloudinary.com/dujtfd2fz/image/upload/v1756179435/ChatGPT_Image_Aug_26_2025_09_06_45_AM_qrvnza.png"
            alt="Milagres Foundation Logo"
          /> */}
          {/* With background */}
          <img
            src="https://res.cloudinary.com/dujtfd2fz/image/upload/v1756179431/ChatGPT_Image_Aug_26_2025_09_06_43_AM_a7sdqi.png"
            alt="Milagres Foundation Logo"
          />
          <NavLink to="/">Milagres Foundation</NavLink>
        </div>

        <div className="nav-links">
          <div 
            className={`nav-link-drop-down ${openDropdown === "about" ? "open" : ""}`}
            onDoubleClick={() => toggleDropdown("about", true)}
            onMouseEnter={() => !isMobile && toggleDropdown("about")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <NavLink to="/about-us" className="dropdown-toggle">
              About <FontAwesomeIcon className="icon" icon={faChevronDown}/>
            </NavLink>
            <div className="dropdown-menu">
              <HashLink
               scroll={elm => elm.scrollIntoView({behavior: "smooth", block: "end"})}
               smooth to="/about-us#foundersMessage">Founder&apos;s Message
              </HashLink>
              <HashLink
               scroll={elm => elm.scrollIntoView({behavior: "smooth", block: "end"})}
               smooth to="/about-us#volunteers">Volunteers Team
              </HashLink>
            </div>
          </div>
          <div 
            className={`nav-link-drop-down ${openDropdown === "events" ? "open" : ""}`}
            onDoubleClick={() => toggleDropdown("events", true)}
            onMouseEnter={() => !isMobile && toggleDropdown("events")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <NavLink to="/events" className="dropdown-toggle">
              Events <FontAwesomeIcon className="icon" icon={faChevronDown} />
            </NavLink>
            <div className="dropdown-menu">
              <HashLink
               scroll={elm => elm.scrollIntoView({behavior: "smooth", block: "end"})}
               smooth to="/events#programs">Programs
              </HashLink>
              <HashLink
               scroll={elm => elm.scrollIntoView({behavior: "smooth", block: "end"})}
               smooth to="/events#gallery">Gallery
              </HashLink>
            </div>
          </div>

          <div 
            className={`nav-link-drop-down ${openDropdown === "join" ? "open" : ""}`}
            onDoubleClick={() => toggleDropdown("join", true)}
            onMouseEnter={() => !isMobile && toggleDropdown("join")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}            
          >
            <NavLink to="/join-us" className="dropdown-toggle">
              Join Us <FontAwesomeIcon className="icon" icon={faChevronDown} />
            </NavLink>
            <div className="dropdown-menu">
              <HashLink
               scroll={elm => elm.scrollIntoView({behavior: "smooth", block: "end"})}
               smooth to="/join-us#volunteer">Volunteer
              </HashLink>
              <HashLink
               scroll={elm => elm.scrollIntoView({behavior: "smooth", block: "end"})}
               smooth to="/join-us#donate-item">Donate Commodity
              </HashLink>
            </div>
          </div>

          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/corporate-social-responsibility">CSR</NavLink>

          {/* <button className="translate-btn">Translate</button> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faIndianRupeeSign, faTimes} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Navbar = () => {
  const base = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
          <img loading="lazy" src={`${base}logo.jpg`} alt="Milagres Foundation Logo" onClick={() => navigate("/")} />
      </div>
      <div className="links-group">
        <nav className={`links ${menuOpen ? "open" : ""}`}>
          {/* <NavLink className="link" to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink> */}
          <NavLink className="link" to="/our-work" onClick={() => setMenuOpen(false)}>Our Work</NavLink>
          <NavLink className="link" to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          {/* <NavLink className="link" to="/corporate-social-responsibility" onClick={() => setMenuOpen(false)}>CSR</NavLink> */}
          <NavLink className="link" to="/join-us" onClick={() => setMenuOpen(false)}>Join Our Team</NavLink>
          <NavLink className="link" to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </nav>
        <NavLink className="donate" to="/donate">Donate <FontAwesomeIcon className="icon" icon={faIndianRupeeSign} /></NavLink>
        <FontAwesomeIcon className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          icon={menuOpen ? faTimes : faBars} />
      </div>
    </div>
  )
}

export default Navbar
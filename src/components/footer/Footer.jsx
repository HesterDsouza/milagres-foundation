import { Link } from "react-router-dom"
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="footer">
      <div className="logo-links">
        <div className="logo">
          <img src={`${base}logo1.jpg`} alt="" />
        </div>
        <div className="links">
          <div className="quick-links">
            <Link className="link" to="/our-work">Our Work</Link>
            <Link className="link" to="/about-us">About Us</Link>
            {/* <Link className="link" to="/corporate-social-responsibility">CSR</Link> */}
            <Link className="link" to="/join-us">Join Our Team</Link>
            <Link className="link" to="/contact-us">Contact Us</Link>
            <Link className="link" to="/donate">Donate</Link>
          </div>
          <div className="social-links">
            <p>Follow Us: </p>
            <a href="" 
              target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/milagresfoundation?igsh=MWlnM2FhMm50emRwMg==" 
              target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </a>
            <a href="" 
              target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faXTwitter} />
            </a>
            <a href="http://www.youtube.com/@milagresfoundationngo9687" 
            target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faYoutube} />
            </a>
          </div>
          <div className="email">
            <p>
              <FontAwesomeIcon className="icon" icon={faEnvelope}/>
              <a tabIndex={0} href="mailto:Milagresfoundation3@gmail.com" className="email-link">
                Milagresfoundation3@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 All Rights Reserved. <Link to="/">Milagres Foundation</Link></p>
      </div>
    </div>
  )
}

export default Footer
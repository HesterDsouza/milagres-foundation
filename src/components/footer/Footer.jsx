import { Link } from "react-router-dom"
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faLinkedin, faThreads, faYoutube} from "@fortawesome/free-brands-svg-icons"
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
            <a href="https://www.facebook.com/share/1AQbgLzkhr/" 
              target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/milagresfoundation?igsh=MWlnM2FhMm50emRwMg==" 
              target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </a>
            <a href="https://www.threads.net/@milagresfoundation?xmt=AQGzjVZUE0V8cWfcxqXqffPvPuR6L2zJpyndewuJjSRN8Sw" 
              target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faThreads} />
            </a>
            <a href="http://www.youtube.com/@milagresfoundationngo9687" 
            target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faYoutube} />
            </a>
            <a href="https://www.linkedin.com/in/milagres-foundation-bbb847250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
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
          <div className="address-phone">
            <address>
              <div className="group">
                <p>Milagres Foundation,</p>
                <p>C/O Anand Corner Apartment,</p>
              </div>
              <div className="group">
                <p>Office No. 10, First Floor,</p>
                <p>Near Anand Park,</p>
              </div>
              <div className="group">
                <p>Wadgoasheri, Pune - 411014</p>
              </div>
            </address>
            <div className="phone">
              <p>Contact No: +91 9422026832</p>
            </div>
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
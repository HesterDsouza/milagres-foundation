import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faThreads, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img
            src="https://res.cloudinary.com/dujtfd2fz/image/upload/v1756179431/ChatGPT_Image_Aug_26_2025_09_06_43_AM_a7sdqi.png"
            alt="Milagres Foundation Logo"
          />
          <h3>Milagres Foundation</h3>
          <div className="social-links">
            <p>Follow Us:</p>
            <a id="facebook" href="https://www.facebook.com/share/1AQbgLzkhr/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
            </a>
            <a id="instagram"
              href="https://www.instagram.com/milagresfoundation?igsh=MWlnM2FhMm50emRwMg=="
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </a>
            <a id="threads"
              href="https://www.threads.net/@milagresfoundation?xmt=AQGzjVZUE0V8cWfcxqXqffPvPuR6L2zJpyndewuJjSRN8Sw"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="social-icon" icon={faThreads} />
            </a>
            <a id="youtube" href="http://www.youtube.com/@milagresfoundationngo9687" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faYoutube} />
            </a>
            <a id="linkedin"
              href="https://www.linkedin.com/in/milagres-foundation-bbb847250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Contact + Address */}
        <div className="footer-contact">
          <h4>Stay in Touch</h4>
          <p>
            <FontAwesomeIcon id="loc" icon={faMapMarkerAlt} /> 
            <span>
              Milagres Foundation, Anand Corner Apartment, Office No. 10,
              First Floor, Near Anand Park, Wadgoasheri, Pune - 411014
            </span>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> <span>+91 9422026832</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:Milagresfoundation3@gmail.com" className="email-link">
              Milagresfoundation3@gmail.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <span>Mon-Sat: 9:00am - 6:00pm</span>
          </p>
        </div>

        {/* Map */}
        <div className="footer-map">
          <iframe
            title="Milagres Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230099.67690495736!2d73.61827409453122!3d18.5532691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c168b1555555%3A0xc3ba3f77e3c41a3a!2sMilagres%20Foundation!5e1!3m2!1sen!2sin!4v1758126980639!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230099.67690495736!2d73.61827409453122!3d18.5532691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c168b1555555%3A0xc3ba3f77e3c41a3a!2sMilagres%20Foundation!5e1!3m2!1sen!2sin!4v1758126980639!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <NavLink to="/privacy-policy" className="policy-link">
          Privacy Policy
        </NavLink>
        <p>
          © {new Date().getFullYear()} All Rights Reserved.{" "}
          <Link to="/">Milagres Foundation</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
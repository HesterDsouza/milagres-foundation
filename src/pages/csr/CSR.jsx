import { Link } from "react-router-dom"
import HeroSection from "../../components/heroSection/HeroSection"
import "./csr.css"
import SEO from "../../components/SEO/SEO"

const CSR = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="csr">
      <SEO 
        title="Corporate-Social-Responsibility | Milagres Foundation"
        description="Discover how Milagres Foundation partners with organizations to drive impactful CSR initiatives, fostering community development and positive social change."
      />
      <HeroSection 
        title={"Corporate Social Responsibility (CSR)"} 
        subTitle={"Partner with Milagres Foundation to create a lasting social impact."} 
        image={`${base}csr-hero.jpg`} image_alt={"Corporate Social Responsibility"}
        attribution_text={"Designed by Freepik"}
        attribution_link={"https://www.freepik.com/"}
      />

      <section className="csr-title">
        <h2>
          CSR Initiative: Empowering Futures through Sports and Education
        </h2>
        <p>Location: Pune, Maharashtra</p>
        <p>
          Focus Areas: Education, Sports, Child Development, 
          Community Upliftment
        </p>
      </section>
        
      <section className="csr-intro">
        <h2>Overview</h2>
        <p>
          As part of our commitment to inclusive and sustainable 
          development, Milagres Foundation is proud to launch a 
          comprehensive CSR initiative aimed at empowering children 
          from underprivileged urban communities in Pune. This program 
          integrates quality education with structured sports training, 
          fostering holistic growth and creating equal opportunities for 
          all children to thrive.
        </p>
      </section>

      <section className="csr-objectives">
        <h2>Objectives</h2>
        <ul>
          <li>
            Bridge the education gap through access to academic resources, 
            digital learning tools, and mentorship.
          </li>
          <li>
            Promote physical well-being and teamwork through organized 
            sports activities including football, athletics, kabaddi, and 
            more.
          </li>
          <li>
            Identify and nurture talent in both academics and sports, 
            guiding children toward potential scholarships and career paths.
          </li>
          <li>
            Encourage community participation to create a sustainable 
            support system around each child.
          </li>
        </ul>
      </section>

      <section className="csr-program">
        <h2>Program Components</h2>
        <div className="csr-options">
          <div className="csr-card">
            <h3>After-school Learning Centers</h3>
            <p>
              Equipped with trained educators, study materials, and 
              digital tools to support formal education.
            </p>
          </div>
          <div className="csr-card">
            <h3>Sports Coaching Camps</h3>
            <p>
              Weekly sessions led by certified coaches with access to 
              grounds and equipment.
            </p>
          </div>
          <div className="csr-card">
            <h3>Health and Nutrition Support</h3>
            <p>
              Regular health checkups and nutritional guidance to ensure 
              overall well-being.
            </p>
          </div>
          <div className="csr-card">
            <h3>Life Skills and Mentorship</h3>
            <p>
              Workshops on communication, leadership, time management, 
              and career awareness.
            </p>
          </div>
          <div className="csr-card">
            <h3>Community Engagement Events</h3>
            <p>
              Sports tournaments, parent-teacher meets, and talent 
              showcases to foster local pride and involvement.
            </p>
          </div>
        </div>
      </section>

      <section className="csr-impact">
        <h2>Expected Impact</h2>
        <ul>
          <li>Improved academic performance and school retention rates.</li>
          <li>Enhanced physical fitness and mental well-being.</li>
          <li>Discovery of young talents in sports and academics.</li>
          <li>Strengthened community networks for child development.</li>
        </ul>
      </section>

      <section className="csr-cta">
        <h2>Join Us</h2>
        <p>
          Together, we can create a future where every child, regardless 
          of background, has the opportunity to learn, grow, and play. 
          Through this initiative, we aim not just to support—but to 
          empower. 
          <Link to="/contact-us" className="contact-link">
            Get in Touch
          </Link>
        </p>
      </section>
    </div>
  )
}

export default CSR
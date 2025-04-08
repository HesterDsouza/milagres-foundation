import { Link } from "react-router-dom"
import HeroSection from "../../components/heroSection/HeroSection"
import "./csr.css"
import SEO from "../../components/SEO/SEO"

const CSR = () => {
  return (
    <div className="csr">
      <SEO 
        title="Corporate-Social-Responsibility | Milagres Foundation"
        description="Discover how Milagres Foundation partners with organizations to drive impactful CSR initiatives, fostering community development and positive social change."
      />
      <HeroSection 
        title={"Corporate Social Responsibility (CSR)"} 
        subTitle={"Partner with Milagres Foundation to create a lasting social impact."} 
        image={"/csr-hero.jpg"} image_alt={"Corporate Social Responsibility"}
        attribution_text={"Designed by Freepik"}
        attribution_link={"https://www.freepik.com/"}/>
      <section className="csr-intro">
        <h2>Why Corporate Social Responsibility Matters</h2>
        <p>Corporate Social Responsibility (CSR) is more than a legal obligation; it&apos;s a commitment to making a meaningful difference in society. By collaborating with Milagres Foundation, your business can support education, healthcare, and community development initiatives.</p>
      </section>
      <section className="csr-ways">
        <h2>How Your Company Can Contribute</h2>
        <div className="csr-options">
          <div className="csr-card">
            <h3>Financial Contributions</h3>
            <p>Support our initiatives through donations and sponsorships.</p>
          </div>
          <div className="csr-card">
            <h3>Employee Volunteering</h3>
            <p>Encourage your employees to volunteer for our social programs.</p>
          </div>
          <div className="csr-card">
            <h3>Donation of Resources</h3>
            <p>Provide essential resources like school supplies, medical aid, and infrastructure support.</p>
          </div>
          <div className="csr-card">
            <h3>Skill-Based Volunteering</h3>
            <p>Offer your expertise in education, healthcare, or technology to empower communities.</p>
          </div>
        </div>
      </section>
      <section className="csr-impact">
        <h2>Our CSR Collaborations</h2>
        <p>Several companies have partnered with us to drive meaningful change. Here are some of the organizations we&apos;ve worked with:</p>
        <ul>
          <li><strong>XYZ Corporation</strong> - Sponsored 200 students with scholarships.</li>
          <li><strong>ABC Tech</strong> - Conducted digital literacy training for rural youth.</li>
          <li><strong>Green Energy Ltd.</strong> - Installed solar panels in underserved villages.</li>
        </ul>
      </section>
      <section className="csr-testimonials">
        <h2>What Our Partners Say</h2>
        <blockquote>
          &apos;&apos;Partnering with Milagres Foundation has been a fulfilling experience. Their commitment to social good aligns perfectly with our CSR goals.&apos;&apos;
          <cite>- John Smith, CEO of XYZ Corporation</cite>
        </blockquote>
      </section>
      <section className="csr-cta">
        <h2>Join Us in Making a Difference</h2>
        <p>Looking for meaningful CSR opportunities? Partner with us to create a better future.<Link to="/contact-us" className="contact-link">Get in Touch</Link></p>
      </section>
    </div>
  )
}

export default CSR
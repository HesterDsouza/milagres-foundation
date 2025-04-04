import { useState } from "react"
import HeroSection from "../../components/heroSection/HeroSection"
import "./aboutUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO/SEO";

const AboutUs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const compliance_reports = [
    {name: "CSR Approval Letter", file: "/reports/Approval Letter for form CSR1-4.pdf"},
    {name: "Certificate of Registration", file: "/reports/Document (MF).pdf"},
    {name: "Audit Report 21-22", file: "/reports/MF AUDIT REPORT 21-22.pdf"},
    {name: "Audit Report 22-23", file: "/reports/MF AUDIT REPORT 22-23.pdf"},
    {name: "Statement of Accounts 20-21", file: "/reports/MF STATMENT OF ACCOUNTS 20-21.pdf"},
    {name: "Milagres Foundation 80G", file: "/reports/MILAGRES FOUNDATION 80G.pdf"},
    {name: "Milagres Foundation 12A", file: "/reports/MILAGRES FOUNDATION 12A.pdf"},
  ]

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="aboutUs">
      <SEO 
        title="About Us | Milagres Foundation - Committed to Social Change"
        description="Learn more about Milagres Foundation's passionate team that put in efforts to bring lasting change to underserved communities."
      />
      <HeroSection 
        title = "About Milagres Foundation"
        subTitle = "Empowering marginalized communities through education, healthcare, and support since 2014."
        image = "/images/blood-donation-camp (7).jpg"
        image_alt = "Milagres Foundation Team"
      />

      <section className="about-content">
        <div className="text-content">
          <h2>Who We Are</h2>
          <p>
            MILAGRES FOUNDATION was formed by founder John Fernandes in 
            2014 and officially registered in 2020 as a social & 
            non-profit organization with an integrated approach to the 
            development of rural and urban areas. 
            The Milagres Foundation works towards the development of 
            marginalized communities or individuals in Indian society. 
            We work on the ground in sustainable and complete interventions
            in health, livelihood, education, and disaster relief to 
            provide innovative solutions to deep-rooted development problems.
          </p>
        </div>
        <img src="/images/food-clothes-distribution (3).jpg" alt="Community Work" className="about-image"/>
      </section>

      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
        The Milagres Foundation&apos;s aim is to work towards the rights 
        and empowerment of economically weaker communities. Our overall 
        goal is to defeat poverty and save lives through development and a
        rights-based approach by means of providing education, medical 
        facilities, and employment. We work in weaker sectors of society, 
        like providing books, education, medical facilities, grocery 
        distribution, nature care (tree plantations), serving orphanages, 
        old age homes, providing financial support to farmers, and many 
        others.
        </p>
        <div className="grid-container">
          <div className="grid-item">
            <img src="/images/food-distribution (2).jpg" alt="Food Distribution"/>
            <h3>Our Mission</h3>
            <p>
              We strive to uplift economically weaker sections of society by ensuring access to education, medical 
              facilities, employment, and livelihood support.
            </p>
          </div>
          <div className="grid-item">
            <img src="/images/drawing-competion-christmas-day (2).jpg" alt="Community Support"/>
            <h3>Our Vision</h3>
            <p>
              A future where every individual has equal opportunities, access to basic necessities, and the right to 
              live with dignity.
            </p>
          </div>
        </div>
      </section>
      <section className="reports">
        <h2>Reports</h2>
        <p>View our reports and compliance documents</p>
        <div className="compliance-reports">
          <h3>Compliance Reports</h3>
          <div className="accordion-container">
            {compliance_reports.map((report, index) => (
              <div key={index} className="accordion-item">
                <button className={`accordion-title ${openAccordion === 
                  index ? "active" : ""}`} onClick={() => toggleAccordion(index)}>
                  <span className="icon">
                    {openAccordion === index ? 
                    <FontAwesomeIcon className="icon-direction" 
                    icon={faChevronDown} /> : 
                    <FontAwesomeIcon className="icon-direction" 
                    icon={faChevronRight} />}
                  </span>
                  <span className="report-name">{report.name}</span>
                </button>
                <div className={`accordion-content ${openAccordion === index ? "open" : ""}`}>
                  <iframe src={report.file} title={report.name} className="pdf-viewer"></iframe>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="compliance-reports-container">
            {compliance_reports.map((report, index) => (
              <div key={index} className="compliance-report-card">
                <iframe src={`${report.file}`} title={report.name} className="pdf-viewer" />
                <h4>{report.name}</h4>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default AboutUs
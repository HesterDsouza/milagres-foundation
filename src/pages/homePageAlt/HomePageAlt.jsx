// import { Link } from "react-router-dom";
import FAQ from "../../components/faq/FAQ";
import "./homePageAlt.css"
import { useState } from "react";

const HomePageAlt = () => {
  const base = import.meta.env.BASE_URL;
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="homePage">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Empowering Communities, Defeating Poverty</h1>
          <p>
            Working tirelessly to provide education, healthcare and employment
            opportunities to economically weaker sections of society.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setShowQR(true)}>
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {showQR && (
        <div className="qr-modal">
          <div className="qr-content">
            <button className="qr-close" onClick={() => setShowQR(false)}>
              {/* <span><FontAwesomeIcon icon={faClose}/></span> */} ✕
            </button>
            <h3>Scan to Donate</h3>
            <p>Use any UPI app to scan the QR code and donate.</p>
            <img loading="lazy" src={`${base}QrCode.jpg`} alt="Donation QR Code" />
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="about-us">
        <h2>About Milagres Foundation</h2>
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2576dcf-fc93-4031-a9f9-ef6441079ac2.png"
              alt="Community members at a Milagres Foundation event"
            />
          </div>
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              The Milagres Foundation aims to work towards the rights and
              empowerment of economically weaker communities. Our overall goal
              is to defeat poverty and save lives through development and a
              rights-based approach.
            </p>
            <h3>Our Approach</h3>
            <p>
              We believe in sustainable change through education, medical
              support, and employment opportunities. Our work spans across
              multiple sectors to create holistic development.
            </p>
            <div className="about-stats">
              <div>
                <span>5+</span>
                <p>Years of Service</p>
              </div>
              <div>
                <span>200+</span>
                <p>Lives Impacted</p>
              </div>
              <div>
                <span>10+</span>
                <p>Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <h2>Our Programs</h2>
        <div className="programs-container">
          {[
            {
              title: "Education for All",
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cf274ee-33dc-478c-9079-6aa8f21fef30.png",
              desc: "Providing books, school supplies and scholarships to underprivileged children."
            },
            {
              title: "Healthcare Initiative",
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fec7f29f-3622-4f6d-8720-2836e8e19142.png",
              desc: "Medical camps, medicines, and preventive healthcare in rural areas."
            },
            {
              title: "Nutrition Support",
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e49f6aea-2dc9-49cb-a24e-8743efd23e70.png",
              desc: "Nutrition kits and grocery distribution to families."
            },
            {
              title: "Environment Care",
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/178db6bf-f490-437b-a34a-f08f251c4768.png",
              desc: "Tree plantation drives and awareness programs."
            }
          ].map((program) => (
            <div key={program.title} className="program-card">
              <img src={program.img} alt={program.title} />
              <div className="program-text">
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
                <button>Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery / Impact Section */}
      <section id="gallery" className="gallery-section">
        <h2>Our Impact</h2>
        <div className="gallery-grid">
          {[
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cf274ee-33dc-478c-9079-6aa8f21fef30.png",
              title: "Education Drive",
              desc: "Books & scholarships for children"
            },
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fec7f29f-3622-4f6d-8720-2836e8e19142.png",
              title: "Healthcare Camps",
              desc: "Free medical checkups in villages"
            },
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e49f6aea-2dc9-49cb-a24e-8743efd23e70.png",
              title: "Nutrition Support",
              desc: "Food & nutrition kits for families"
            },
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/178db6bf-f490-437b-a34a-f08f251c4768.png",
              title: "Tree Plantation",
              desc: "Environment care & awareness"
            }
          ].map((item, i) => (
            <div key={i} className="gallery-card">
              <img src={item.img} alt={item.title} />
              <div className="gallery-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-button">
          <button className="btn-primary">View More Photos</button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2>Our Members</h2>
        <div className="team-grid">
          {[
            { name: "John Fernandes", role: "Founder", img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/178db6bf-f490-437b-a34a-f08f251c4768.png" },
            { name: "Justin D'Souza", role: "Volunteer", img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/178db6bf-f490-437b-a34a-f08f251c4768.png" },
          ].map((m, i) => (
            <div key={i} className="team-card" onClick={() => window.location.href="/about-us"}>
              <img src={m.img} alt={m.name}/>
              <div className="overlay">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />

      {/* Donate Section */}
      <section className="donate-section">
        <h2>Support Our Cause</h2>
        <p>
          Scan the QR code below to make a quick donation through Razorpay.
          Every contribution makes a difference!
        </p>
        
        <div className="alt-qr">
          <div className="altDonate">
            <p className="alt-contribute">
              Not able to donate money? You can still make an impact by contributing:
            </p>
            <ul className="alt-list">
              <li>📚 Books for children&apos;s education</li>
              <li>🥫 Groceries or food items</li>
              <li>👕 Clothes and blankets</li>
              <li>🤝 Volunteering your time & skills</li>
            </ul>
          </div>

          <div className="qr-container">
            <img src={`${base}QrCode.jpg`} alt="Donate via Razorpay QR" className="qr-code" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <p>Contact form or footer goes here.</p>
      </section> */}
    </div>
  )
}

export default HomePageAlt

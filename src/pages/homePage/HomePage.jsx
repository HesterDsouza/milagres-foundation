import { Link, useNavigate } from "react-router-dom"
import "./homePage.css"
import Slider from "../../components/slider/Slider"
import InfoCard from "../../components/infoCard/InfoCard";
import SEO from "../../components/SEO/SEO";

const HomePage = () => {

  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;
  // console.log("Base URL: ", base);

  const slides = [
    `${base}images/blood-donation-camp (7).jpg`, 
    `${base}slider3.jpg`, `${base}slider4.jpg`
  ];

  const slideTexts = [
    <p key={"join"}>
      “Your support can change lives.
      <Link to="/join-us" className="slider-link">Join Us</Link>
      and help build a stronger, caring community!”
    </p>,
    <p key={"contact"}>
      “Want to make a difference?  
  <Link to="/contact-us" className="slider-link">Get in touch</Link>  
  and join us in our mission!”
    </p>,
    <p key={"donate"}>
      “Your generosity fuels our mission.
      <Link to="/donate" className="slider-link">Make a contribution</Link> and uplift communities!”
    </p>
  ]

  const activities = [
    {
      images: [
        `${base}images/blood-donation-camp (4).jpg`,
        `${base}images/blood-donation-camp (5).jpg`,
        `${base}images/blood-donation-camp (6).jpg`
      ],
      title: "Blood Donation Camps"
    },
    {
      images: [
        `${base}images/plantation (7).jpg`,
        `${base}images/plantation (9).jpg`,
        `${base}images/tree-plantation (1).jpg`,
        `${base}images/tree-plantation (8).jpg`
      ],
      title: "Tree Plantations"
    },
    {
      images: [
        `${base}images/food-clothes-distribution (2).jpg`,
        `${base}images/food-clothes-distribution (3).jpg`,
        `${base}images/food-distribution (2).jpg`,
        `${base}images/food-distribution (4).jpg`
      ],
      title: "Food & Grocery Distributions"
    },
    
  ]

  return (
    <div className="homePage">
      <SEO 
        title="Milagres Foundation | Empowering Communities"
        description="Milagres Foundation is a non-profit organization dedicated to education, healthcare, and uplifting marginalized communities."
      />
      <Slider images={slides} texts={slideTexts} class_name="home"/>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Committed to uplifting marginalized communities and individuals across various communities.</p>
      </section>
      <div className="imapct-mission-vision">
        <section className="impact">
          <h2>Our Impact</h2>
          <p>
            From blood donation drives to tree plantations, food distribution 
            to community celebrations, we create lasting change where it&apos;s 
            needed most.We also nurture young minds through creative activities 
            like drawing competitions and Children&apos;s Day events.
          </p>
        </section>
        <section className="mission-vision">
          <h2>Our Mission & Vision</h2>
          <p>
            The Milagres Foundation&apos;s aim is to work towards the rights 
            and empowerment of economically weaker communities. Our overall 
            goal is to defeat poverty and save lives through development and 
            a rights-based approach by means of providing education, medical 
            facilities, and employment. We work in weaker sectors of society, 
            like providing books, education, medical facilities, grocery 
            distribution, nature care (tree plantations), serving orphanages, 
            old age homes, providing financial support to farmers, and many 
            others.
          </p>
        </section>
      </div>
      <section className="activities-section">
        <h2>A glimpse of our Activities</h2>
        <div className="activities-container">
          {activities.map((activity, index) => (
            <InfoCard 
              key={index}
              images={activity.images}
              title={activity.title}
              class_name="activity-card"
              onClick={() => navigate("/our-work")}
              onKeyDown={() => navigate("/our-work")}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
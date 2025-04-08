import { useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import "./joinUs.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SEO from "../../components/SEO/SEO";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", reason: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    } else if (formData.name.length > 50) {
      toast.error("Name is too long");
      return false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      toast.error("Name can only contain letters, spaces, apostrophes, and hyphens");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email address");
      return false;
    }

    if (!formData.phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    } else if (!/^\d{6,15}$/.test(formData.phone.replace(/[^\d]/g, ""))) {
      toast.error("Invalid phone number");
      return false;
    }

    if(!formData.reason.trim()){
      toast.error("Message is required.");
      return false;
    } else if (formData.reason.length > 500){
      toast.error("Message is too long. Please limit the content to 500 characters.");
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) return;

    emailjs.send(
      "service_5ditff7",
      "template_q4b447j",
      formData,
      "eBdLZLFGC7lIFNpPr"
    )
    .then((response) => {
      console.log("Success!", response.status, response.text, formData)
      toast.success("Thank you for joining us! We will get back to you soon.")
      setFormData({name:"", email:"", phone:""}) // Reset form after successful submission
    })
    .catch((error) => {
      toast.error("Oops! Something went wrong. Please try again.")
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <div className="joinUs">
      <SEO 
        title="Join Us | Become a Volunteer or Partner with Milagres Foundation"
        description="Ready to make a difference? Join Milagres Foundation as a volunteer, donor, or partner and help bring hope and opportunities to those in need."
      />
      <HeroSection
        title={"Join Us"}
        subTitle={"Be a part of Milagres Foundation and make a difference in the community."}
        image={"/join-us-hero.jpg"}
        image_alt={"Join Us"}
        attribution_text={"Designed by Freepik"}
        attribution_link={"https://www.freepik.com/"}
      />

      <section className="join-us-intro">
        <h2>Why Join Milagres Foundation?</h2>
        <p>We believe that collective efforts can bring meaningful change. Whether you&apos;re looking to volunteer, donate, or collaborate, we welcome your support in our mission to uplift marginalized communities.</p>
      </section>

      <section className="join-us-form">
        <h2>Become a Volunteer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text" id="name" autoComplete="on"
              placeholder="Enter your full name" required
              value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" id="email" autoComplete="on"
              placeholder="Enter your email" required 
              value={formData.email} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input name="phone" type="tel" id="phone" autoComplete="on"
              placeholder="Enter your phone number" required 
              value={formData.phone} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Please state your reason for joining the foundation</label>
            <input name="reason" type="text" id="reason" 
              placeholder="Enter your reason" required
              value={formData.reason} onChange={handleChange}/>            
          </div>
          <button type="submit" className="join-submit">Join Us</button>
        </form>
      </section>
    </div>
  );
};

export default JoinUs;
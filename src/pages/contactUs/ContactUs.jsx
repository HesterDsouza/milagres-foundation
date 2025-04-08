import { useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import "./contactUs.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"
import SEO from "../../components/SEO/SEO";

const ContactUs = () => {
  const base = import.meta.env.BASE_URL;

  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
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

    if(!formData.message.trim()){
      toast.error("Message is required.");
      return false;
    } else if (formData.message.length > 500){
      toast.error("Message is too long. Please limit the content to 500 characters.");
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) return;

    emailjs.send(
      "service_5ditff7",
      "template_pplj0dl",
      formData,
      "eBdLZLFGC7lIFNpPr"
    )
    .then((response) => {
      console.log("Success!", response.status, response.text, formData)
      toast.success("Thank you for contacting us! We will get back to you soon.")
      setFormData({name:"", email:"", phone:""}) // Reset form after successful submission
    })
    .catch((error) => {
      toast.error("Oops! Something went wrong. Please try again.")
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <div className="contactUs">
      <SEO 
        title="Contact Us | Get in Touch with Milagres Foundation"
        description="Have questions or want to connect? Reach out to Milagres Foundation for support, collaboration, or general inquiries. We're here to help."
      />
      <HeroSection
        title={"Contact Us"}
        subTitle={"Get in touch with Milagres Foundation for inquiries, partnerships, and support."}
        image={`${base}contact-us-hero.jpg`}
        image_alt={"Contact Us"}
        attribution_text={"Designed by Freepik"}
        attribution_link={"https://www.freepik.com/"}
      />

      <section className="contact-us-intro">
        <h2>We&apos;d Love to Hear from You</h2>
        <p>Have questions or want to collaborate? Reach out to us, and we&apos;ll get back to you as soon as possible.</p>
      </section>

      <section className="contact-us-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text" id="name" autoComplete="on"
            placeholder="Enter your full name" required 
            value={formData.name} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" id="email" autoComplete="on"
            placeholder="Enter your email" required 
            value={formData.email} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" 
            placeholder="Write your message" rows="4" required
            value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
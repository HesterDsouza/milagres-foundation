// import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSection from "../../components/heroSection/HeroSection";
import "./donate.css";
import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO/SEO";

const Donate = () => {
  const base = import.meta.env.BASE_URL;
  
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     console.log("Razorpay script loaded successfully");
  //   };

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, [])

  // const handlePayment = () => {
  //   if (!window.Razorpay) {
  //     toast.error("Payment system is loading. Please try again in a few seconds.");
  //     return;
  //   }

  //   const options = {
  //     key: "rzp_test_awD7rjFzeGYBeI",
  //     amount: 500,
  //     currency: "INR",
  //     name: "Milagres Foundation",
  //     description: "Donation",
  //     order_id: "order_QBgsN1NPF2VaUq",
  //     image: "/logo1.jpg",
  //     method: {
  //       upi: true
  //     },
  //     handler: function (response) {
  //       toast.success("Payment Successful!")
  //       alert("Payment Successful: " + response.razorpay_payment_id);
  //       console.log("Payment ID:", response.razorpay_payment_id);
  //       console.log("Order ID:", response.razorpay_order_id);
  //       console.log("Signature:", response.razorpay_signature);
  //     },
  //     prefill: {
  //       name: "Donor Name",
  //       email: "donor@example.com",
  //     },
  //     notes: {
  //       address: "Milagres Foundation Office",
  //     },
  //     theme: {
  //       color: "#003f7f",
  //     }
  //   };

  //   const rzp = new window.Razorpay(options);

  //   rzp.on("payment.failed", function (response) {
  //     toast.error("Payment Failed! Please try again.");
  //     console.error("Error Code:", response.error.code);
  //     console.error("Description:", response.error.description);
  //     console.error("Reason:", response.error.reason);
  //     console.error("Order ID:", response.error.metadata.order_id);
  //     console.error("Payment ID:", response.error.metadata.payment_id);
  //   });

  //   rzp.open();
  // };
  
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="donate">
      <SEO 
        title="Donate | Support Milagres Foundation's Mission of Compassion"
        description="Your donation empowers children, families, and communities. Support Milagres Foundation’s mission to provide education, healthcare, and hope."
      />
      <HeroSection
        title="Support Our Cause"
        subTitle="Your generosity helps us continue our mission of uplifting communities in need."
        image={`${base}images/donations (2).jpg`}
        image_alt="Donation Event"
      />

      <section className="donate-content">
        <div className="text-content">
          <h2>Why Donate?</h2>
          <p>
            Milagres Foundation is dedicated to transforming lives by providing education, 
            medical assistance, and social support to marginalized communities. Your donation enables 
            us to continue making a meaningful impact.
          </p>
          <button onClick={() => setShowQR(true)} className="donate-btn">Donate Now</button>
        </div>
        <img loading="lazy" src={`${base}images/donation-joyful-preschool (3).jpg`} alt="Helping Hands" className="donate-image"/>
      </section>

      {showQR && (
        <div className="qr-modal">
          <div className="qr-content">
            <h3>Scan to Donate <span><FontAwesomeIcon onClick={() => setShowQR(false)} className="close-icon" icon={faClose}/></span></h3>
            <p>Use any UPI app to scan the QR code and donate.</p>
            <img loading="lazy" src={`${base}QRCode.jpg`} alt="Donation QR Code" />
          </div>
        </div>
      )}

      <section className="donation-impact">
        <h2>How Your Donation Helps</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img loading="lazy" src={`${base}images/drawing-competion-christmas-day (2).jpg`} alt="Education Support"/>
            <h3>Education</h3>
            <p>Providing books, school supplies, and scholarships for underprivileged children.</p>
          </div>
          <div className="grid-item">
            <img loading="lazy" src={`${base}images/blood-donation-camp (1).jpg`} alt="Medical Assistance"/>
            <h3>Healthcare</h3>
            <p>Funding medical treatments, health checkups, and emergency care for those in need.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
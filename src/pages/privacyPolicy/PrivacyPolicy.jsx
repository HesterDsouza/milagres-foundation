import SEO from "../../components/SEO/SEO"
import "./privacyPolicy.css"

const PrivacyPolicy = () => {
  return (
    <div className="privacyPolicy">
      <SEO 
        title="Privacy Policy | Milagres Foundation"
        description="Read the Milagres Foundation's privacy policy to learn how we handle user data, cookies, and tracking technologies like Meta Pixel."
        url="https://www.milagresfoundation.org/#/privacy-policy"
      />
      <h1>Privacy Policy</h1>
      <h2>1. Introduction</h2>
      <p>
        Milagres Foundation is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you visit our website.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Contact details submitted via forms (e.g., name, email)</li>
        <li>Non-personal data via analytics and tracking pixels</li>
        <li>Device/browser information</li>
      </ul>

      <h2>3. Use of Meta Pixel</h2>
      <p>
        We use Meta (Facebook) Pixel to track visitor behavior and improve our campaigns. This may include data such as pages visited and interactions with content. Meta may use this data according to their own <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Our website uses cookies to enhance your experience and track usage through services like Meta Pixel.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We may use services like Google Fonts, EmailJS, or Facebook that collect limited data. These are governed by their respective privacy policies.
      </p>

      <h2>6. Your Consent</h2>
      <p>
        By using our website, you consent to our Privacy Policy and the use of cookies and tracking technologies.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this policy, you can <a href="https://www.milagresfoundation.org/#/contact-us">contact us here</a>.
      </p>
    </div>
  )
}

export default PrivacyPolicy

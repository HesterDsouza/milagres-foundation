// src/components/FAQ.jsx
import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    q: "What is Milagres Foundation?",
    a: "We are a non-profit working to empower communities through education, healthcare, nutrition, and employment opportunities."
  },
  {
    q: "How can I contribute?",
    a: "You can donate via Razorpay QR, provide books, groceries, clothes, or volunteer your time."
  },
  {
    q: "Are donations tax exempt?",
    a: "Yes, donations to the foundation are eligible for tax benefits under relevant government provisions."
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
            <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
              {f.q}
              <span>{open === i ? "-" : "+"}</span>
            </button>
            {open === i && <p className="faq-answer">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
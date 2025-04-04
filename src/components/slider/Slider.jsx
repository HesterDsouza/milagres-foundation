import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slider.css";
import PropTypes from "prop-types";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Slider = ({ images, texts = [], class_name = "" }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
          setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
    
        return () => clearInterval(intervalRef.current);
      }, [images.length]);

    const changeSlide = (n) => {
        setSlideIndex((prevIndex) =>
          (prevIndex + n + images.length) % images.length);
      }
  return (
    <section className={`slider-container ${class_name}`}>
        {images.map((src, index) => (
          <div key={index} className={`slide ${index === slideIndex ? "active" : ""}`}>
            <img src={src} alt={`Slide ${index + 1}`} />
            {texts[index] && (
              <div className="slider-text">
                {texts[index]}
              </div>
            )}
          </div>
        ))}
        {/* <header className="hero">
          <div className="hero-overlay">
            <h1>Welcome to Milagres Foundation</h1>
            <p>Empowering communities, one step at a time.</p>
          </div>
        </header> */}
        <FontAwesomeIcon tabIndex={0} className="slide-arrow prev" icon={faChevronLeft} onKeyDown={(e) => e.key === "Enter" && changeSlide(-1)} onClick={() => changeSlide(-1)} aria-label="Previous Slide" role="button"/>
        <FontAwesomeIcon tabIndex={0} className="slide-arrow next" icon={faChevronRight} onKeyDown={(e) => e.key === "Enter" && changeSlide(1)} onClick={() => changeSlide(1)} aria-label="Next Slide" role="button"/>
      </section>
  )
}

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    texts: PropTypes.arrayOf(PropTypes.node),
    class_name: PropTypes.string
}

export default Slider
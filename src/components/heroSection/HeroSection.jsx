import PropTypes from "prop-types"
import "./heroSection.css"

const HeroSection = ({title, subTitle, image, image_alt, attribution_link, attribution_text}) => {
  return (
    <section className="hero-section">
      <img loading="lazy" tabIndex={0} src={image} alt={image_alt} className="hero-image"/>
      <div className="hero-content">
        <div className="hero-group">
          <h1 tabIndex={0}>{title}</h1>
          <p tabIndex={0}>{subTitle}</p>
        </div>
      </div>
      {(attribution_text || attribution_link) && (
        <div className="hero-attribution">
          <a href={attribution_link} target="_blank" rel="noopener noreferrer">
            {attribution_text}
          </a>
        </div>
      )}
    </section>
  )
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string,
  attribution_link: PropTypes.string,
  attribution_text: PropTypes.string
}

export default HeroSection
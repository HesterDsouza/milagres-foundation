import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"

const SEO = ({title, description, keywords, image, url}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Milagres Foundation"/>
    </Helmet>
  )
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
}

SEO.defaultProps = {
    keywords: "milagres, ngo, social work, donation, charity, education, healthcare",
    image: "",
    url: ""
}

export default SEO
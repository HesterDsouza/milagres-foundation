import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"

const SEO = ({title, description, keywords, image, url}) => {
  const fullUrl = url?.startsWith("http") ? url : "https://www.milagresfoundation.org";
  const fullImg = image?.startsWith("http") ? image : `https://www.milagresfoundation.org/${image}`;
  
  return (
    <Helmet >
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Milagres Foundation"/>

      <link rel="canonical" href={fullUrl}/>

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl}/>
      <meta property="og:image" content={fullImg}/>
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
    image: "https://www.milagresfoundation.org/logo.jpg",
    url: "https://www.milagresfoundation.org"
}

export default SEO
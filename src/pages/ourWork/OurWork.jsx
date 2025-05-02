import "./ourWork.css"
import InfoCard from "../../components/infoCard/InfoCard"
import HeroSection from "../../components/heroSection/HeroSection"
import SEO from "../../components/SEO/SEO";
// import LatestEvents from "../../components/latestEvents/LatestEvents";

const OurWork = () => {
  const base = import.meta.env.BASE_URL;

  const works = [
    {
      images: [`${base}images/pp-kit (1).jpg`, `${base}images/pp-kit (2).jpg`],
      title: "PPE Kit donation during COVID-19 pandemic to the Wadgoansheri Christan Cemetery",
    },
    {
      images: [`${base}images/food-distribution (1).jpg`, `${base}images/food-clothes-distribution (2).jpg`, `${base}images/food-clothes-distribution (3).jpg`, `${base}images/food-clothes-distribution (18).jpg`],
      title: "Snacks distribution for street children",
    },
    {
      images: [`${base}images/food-distribution (2).jpg`, `${base}images/food-distribution (3).jpg`, `${base}images/food-distribution (4).jpg`],
      title: "Food distribution for flood infected communities at Satara District - Moregoan & Pesalwadi",
    },
    {
      images: [
        `${base}images/plantation.jpg`, `${base}images/plantation (1).jpg`, `${base}images/plantation (2).jpg`, `${base}images/plantation (3).jpg`, `${base}images/plantation (4).jpg`, `${base}images/plantation (5).jpg`,
        `${base}images/plantation (6).jpg`, `${base}images/plantation (7).jpg`, `${base}images/plantation (8).jpg`, `${base}images/plantation (9).jpg`
      ],
      title: "Tree plantations at Wadgoansheri cemetery",
    },
    {
      images: [
        `${base}images/tree-plantation (1).jpg`, `${base}images/tree-plantation (2).jpg`, `${base}images/tree-plantation (3).jpg`,
        `${base}images/tree-plantation (4).jpg`, `${base}images/tree-plantation (5).jpg`, `${base}images/tree-plantation (6).jpg`,
        `${base}images/tree-plantation (7).jpg`, `${base}images/tree-plantation (8).jpg`, `${base}images/tree-plantation (9).jpg`,
        `${base}images/tree-plantation (10).jpg`, `${base}images/tree-plantation (11).jpg`, `${base}images/tree-plantation (12).jpg`,
        `${base}images/tree-plantation (13).jpg`
      ],
      title: "Tree plantations at river side",
    },
    {
      images: [`${base}images/grocery-distribution (1).jpg`, `${base}images/grocery-distribution (2).jpg`, `${base}images/grocery-distribution (3).jpg`, `${base}images/grocery-distribution (4).jpg`],
      title: "Grocery Distribution",
    },
    {
      images: [`${base}images/food-distribution-stone-quarry (1).jpg`, `${base}images/food-distribution-stone-quarry (2).jpg`, `${base}images/food-distribution-stone-quarry (3).jpg`, `${base}images/food-distribution-stone-quarry (4).jpg`],
      title: "Midday meal service for stone quarry workers",
    },
    {
      images: [
        `${base}images/food-clothes-distribution (1).jpg`, `${base}images/food-clothes-distribution (15).jpg`, `${base}images/food-clothes-distribution (17).jpg`, 
        `${base}images/food-clothes-distribution (20).jpg`, `${base}images/food-clothes-distribution (22).jpg`, `${base}images/food-clothes-distribution (25).jpg`, 
        `${base}images/food-clothes-distribution (26).jpg`, `${base}images/food-clothes-distribution (27).jpg`, `${base}images/food-clothes-distribution (28).jpg`, 
        `${base}images/food-clothes-distribution (29).jpg`, `${base}images/food-clothes-distribution (30).jpg`
      ],
      title: "Food and Clothes distribution at Maher",
    },
    {
      images: [
        `${base}images/blood-donation-camp (1).jpg`, `${base}images/blood-donation-camp (2).jpg`, `${base}images/blood-donation-camp (3).jpg`,
        `${base}images/blood-donation-camp (4).jpg`, `${base}images/blood-donation-camp (5).jpg`, `${base}images/blood-donation-camp (6).jpg`
      ],
      title: "Free medical checkup and blood donation camp at SNBP Law College, Morwadi, Pimpri",
    },
    {
      images: [`${base}images/blood-donation-camp (7).jpg`, `${base}images/blood-donation-camp (8).jpg`, `${base}images/blood-donation-camp (9).jpg`, `${base}images/blood-donation-camp (10).jpg`],
      title: "Blood donation camp at Punyeshwar Orphanage",
    },
    {
      images: [`${base}images/medical-camp-ganesh-festival (1).jpg`, `${base}images/medical-camp-ganesh-festival (2).jpg`, `${base}images/independance-day-medical-camp.jpg`],
      title: "Blood donation and medical camp on Independence Day and Ganesh festival",
    },
    {
      images: [`${base}images/children-day-celebration (1).jpg`, `${base}images/children-day-celebration (2).jpg`, `${base}images/children-day-celebration (3).jpg`, `${base}images/children-day-celebration (4).jpg`],
      title: "Children's Day celebration at labour camp",
    },
    {
      images: [`${base}hockey_tournament/hockey-tournament (1).jpg`,
  `${base}hockey_tournament/hockey-tournament (7).jpg`,
  `${base}hockey_tournament/hockey-tournament (13).jpg`,
  `${base}hockey_tournament/hockey-tournament (19).jpg`,
  `${base}hockey_tournament/hockey-tournament (25).jpg`,
  `${base}hockey_tournament/hockey-tournament (31).jpg`,
  `${base}hockey_tournament/hockey-tournament (37).jpg`,
  `${base}hockey_tournament/hockey-tournament (43).jpg`,
  `${base}hockey_tournament/hockey-tournament (49).jpg`,
  `${base}hockey_tournament/hockey-tournament (55).jpg`,
  `${base}hockey_tournament/hockey-tournament (61).jpg`,
  `${base}hockey_tournament/hockey-tournament (67).jpg`,
  `${base}hockey_tournament/hockey-tournament (73).jpg`,
  `${base}hockey_tournament/hockey-tournament (79).jpg`,
  `${base}hockey_tournament/hockey-tournament (85).jpg`,
  `${base}hockey_tournament/hockey-tournament (91).jpg`,
  `${base}hockey_tournament/hockey-tournament (97).jpg`,
  `${base}hockey_tournament/hockey-tournament (103).jpg`,
  `${base}hockey_tournament/hockey-tournament (109).jpg`,
  `${base}hockey_tournament/hockey-tournament (115).jpg`,
  `${base}hockey_tournament/hockey-tournament (121).jpg`,
  `${base}hockey_tournament/hockey-tournament (127).jpg`],
      title: "Hockey Tournament",
    },
  ];

  return (
    <div className="ourWork">
      <SEO 
        title="Our Work | Milagres Foundation - Empowering Lives through 
        Action"
        description="Discover how Milagres Foundation uplifts communities 
        through education, healthcare, and social support. See the real 
        impact of our initiatives."
        url="https://www.milagresfoundation.org/#/our-work"
      />
      <HeroSection 
        title={"Our Work"} 
        subTitle={"Creating meaningful change, one act of kindness at a time."} 
        image={`${base}images/food-clothes-distribution (23).jpg`} 
        image_alt={"Grocery Distribution"}/>
        {/* <LatestEvents /> */}
      <div className="projects">
        {works.map((work, index) => (
          <InfoCard key={index} title={work.title} images={work.images} class_name="our-work"/>
        ))}
      </div>
    </div>
  )
}

export default OurWork
import {Route, Routes, useNavigate} from "react-router-dom"
import RootLayout from "./layouts/rootLayout/RootLayout";
import HomePage from "./pages/homePage/HomePage";
import OurWork from "./pages/ourWork/OurWork";
import AboutUs from "./pages/aboutUs/AboutUs";
import CSR from "./pages/csr/CSR";
import JoinUs from "./pages/joinUs/JoinUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Donate from "./pages/donate/Donate";
import { useEffect } from "react";
import MetaPixelScript from "./components/MetaPixelScript";
import MetaPixelTracker from "./components/MetaPixelTracker";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

const RedirectHandler = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const path = sessionStorage.getItem("redirect");
    if(path){
      sessionStorage.removeItem("redirect")
      navigate(path);
    }
  },[navigate])

  return children;
}

const App = () => {
  return (
    <RedirectHandler>
      <MetaPixelScript />
      <MetaPixelTracker />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage/>} />
          <Route path = "our-work" element={<OurWork/>} />
          <Route path = "about-us" element={<AboutUs/>} />
          <Route path = "corporate-social-responsibility" element={<CSR/>} />
          <Route path = "join-us" element={<JoinUs/>} />
          <Route path = "contact-us" element={<ContactUs/>} />
          <Route path = "donate" element={<Donate/>} />

          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </RedirectHandler>
  )
}

export default App
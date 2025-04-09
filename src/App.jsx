import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom"
import RootLayout from "./layouts/rootLayout/RootLayout";
import HomePage from "./pages/homePage/HomePage";
import OurWork from "./pages/ourWork/OurWork";
import AboutUs from "./pages/aboutUs/AboutUs";
// import CSR from "./pages/csr/CSR";
import JoinUs from "./pages/joinUs/JoinUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Donate from "./pages/donate/Donate";
import { useEffect } from "react";

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
  const router = createBrowserRouter([
    {
      element: (
        <RedirectHandler>
          <RootLayout/>
        </RedirectHandler>
      ),
      children: [
        { path: "/", element: <HomePage/> },
        { path: "/our-work", element: <OurWork/> },
        { path: "/about-us", element: <AboutUs/> },
        // { path: "/corporate-social-responsibility", element: <CSR/> },
        { path: "/join-us", element: <JoinUs/> },
        { path: "/contact-us", element: <ContactUs/> },
        { path: "/donate", element: <Donate/> },
      ]
    }
  ], 
{
  basename: "/"
})
  return (
    <RouterProvider router={router}/>
  )
}

export default App
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import "./rootLayout.css"
import Footer from "../../components/footer/Footer"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify"

const RootLayout = () => {

  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location])

  return (
    <div className='rootLayout'>
      <ToastContainer 
        position="top-right" autoClose={4000} hideProgressBar={false}
        newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
        draggable pauseOnHover
      />
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
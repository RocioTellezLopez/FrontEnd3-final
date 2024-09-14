import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Layout = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

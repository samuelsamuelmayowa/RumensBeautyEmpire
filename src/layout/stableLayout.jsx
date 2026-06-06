import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BgChange from "../components/bgChange";
import "../styles/home.css";
import { Outlet } from "react-router-dom"
import { PreviousLocationProvider } from "../context/PreviousLocationProvider";


const StableLayout = () => {
  return (
    <PreviousLocationProvider>
      <Navbar />
      <BgChange />
      <Outlet />
      <Footer />
    </PreviousLocationProvider>
  );
};

export default StableLayout;

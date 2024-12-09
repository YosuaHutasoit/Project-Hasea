import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
// import FooterComponent from "./components/FooterComponent"

import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import DetailProduct from "./pages/DetailProduct"
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div>
    <NavbarComponent />
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
      </Routes>

    {/* <FooterComponent/> */}
    </div>
  );
}

export default App;

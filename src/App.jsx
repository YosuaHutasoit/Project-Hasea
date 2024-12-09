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
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/DetailProduct" element={<DetailProduct />} />
      </Routes>

    {/* <FooterComponent/> */}
    </div>
  );
}

export default App;

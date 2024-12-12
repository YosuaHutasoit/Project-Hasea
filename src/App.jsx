import {Routes, Route, useLocation} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import NavbarComponent1 from "./components/NavbarComponent1"
// import FooterComponent from "./components/FooterComponent"

import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products"
import DetailProduct from "./pages/detailproducts/DetailProduct"
import ContactMe from "./pages/ContactMe";

function App() {
  const location = useLocation(); 

  // Logika untuk menampilkan navbar yang sesuai
  let Navbar;
  if (location.pathname === "/") {
    Navbar = <NavbarComponent />;
  } else if (location.pathname === "/aboutus" || location.pathname === "/products" || location.pathname === "/detailproduct" ) {
    Navbar = <NavbarComponent1 />;
  } else {
    Navbar = null;
  }

  return (
    <div>
      {Navbar} {}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/Navbar";
// import FooterComponents from "./components/Footer";

import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import TestiMon from "./pages/TestiMon";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/class" Component={ClassPage} />
        <Route path="/testimon" Component={TestiMon} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syarat" Component={SyaratPage} />
      </Routes>
      {/* <FooterComponents /> */}
    </div>
  );
}

export default App;

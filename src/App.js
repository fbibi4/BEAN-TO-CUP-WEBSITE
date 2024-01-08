import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Repair from "./components/pages/Repair";
import Service from "./components/pages/Service";
import RefurbishedMachines from "./components/pages/RefurbishedMachines";
import Parts from "./components/pages/Parts";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/service" element={<Service />} />
        <Route path="/refurbished" element={<RefurbishedMachines />} />
        <Route path="/parts" element={<Parts />} />
      </Routes>
    </Router>
  );
}

export default App;

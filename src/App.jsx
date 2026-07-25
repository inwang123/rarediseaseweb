import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Climb4Rare from "./pages/Climb4Rare";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/climb4rare" element={<Climb4Rare />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
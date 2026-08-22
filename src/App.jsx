import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Climb4Rare from "./pages/Climb4Rare";
import Donate from "./pages/Donate";
import CheckoutCharity from "./pages/CheckoutCharity";
import Volunteer from "./pages/Volunteer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/climb4rare" element={<Climb4Rare />} />
            <Route path="/checkoutcharity" element={<CheckoutCharity />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
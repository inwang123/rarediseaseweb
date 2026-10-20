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
import News from "./pages/News";
import Team from "./pages/Team";
import Board from "./pages/Board";
import GetInvolved from "./pages/GetInvolved";
import OurStory from "./pages/OurStory";
import ThirtyBy30 from "./pages/ThirtyBy30";

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
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/board" element={<Board />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/climb4rare" element={<Climb4Rare />} />
            <Route path="/checkoutcharity" element={<CheckoutCharity />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/30-by-30" element={<ThirtyBy30 />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
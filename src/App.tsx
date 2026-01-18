
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Background } from './components/Background';
import OurStory from './pages/OurStory';
import About from './pages/About';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import Confirmation from './pages/Confirmation';
import Booking from './pages/Booking';
import Dealer from './pages/Dealer';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ReactLenis root>
        <div className="min-h-screen relative" style={{ backgroundColor: '#fff' }}>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Background />
                  <Footer />
                </>
              } />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-us" element={<Technology />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dealer" element={<Dealer />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
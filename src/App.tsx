import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { Trips } from './pages/Trips';
import { TrekDetail } from './pages/TrekDetail';
import { Booking } from './pages/Booking';
import { TravelGuide } from './pages/TravelGuide';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans antialiased">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/trips/:trekId" element={<TrekDetail />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/:trekId" element={<Booking />} />
              <Route path="/travel-guide" element={<TravelGuide />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

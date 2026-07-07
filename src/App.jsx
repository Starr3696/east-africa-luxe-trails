import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsappButton from './components/WhatsappButton.jsx';
import Home from './pages/Home.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import CorporateMicePage from './pages/CorporateMicePage.jsx';
import InternationalHolidaysPage from './pages/InternationalHolidaysPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes('#')) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/corporate-mice" element={<CorporateMicePage />} />
          <Route path="/international-holidays" element={<InternationalHolidaysPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

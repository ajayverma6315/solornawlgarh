/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Brands from './components/Brands';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Financing from './components/Financing';
import GovScheme from './components/GovScheme';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import PrivacyPolicy from './components/PrivacyPolicy';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Brands />
      <ContactForm />
      <Services />
      <Calculator />
      <Financing />
      <GovScheme />
      <Advantages />
      <Process />
      <Gallery />
      <Testimonials />
      <Certifications />
      <ServiceArea />
      <FAQ />
      <CTA />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 selection:text-emerald-900 pb-16 lg:pb-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <MobileStickyCTA />
      </div>
    </Router>
  );
}

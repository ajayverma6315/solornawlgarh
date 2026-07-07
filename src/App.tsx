/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 selection:text-emerald-900 pb-16 lg:pb-0">
      <Navbar />
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
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

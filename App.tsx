import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuickRegistration } from "./components/QuickRegistration";
import { ScholarshipTest } from "./components/ScholarshipTest";
import { Courses } from "./components/Courses";
import { WhyChoose } from "./components/WhyChoose";
import { TopResults } from "./components/TopResults";
import { Testimonials } from "./components/Testimonials";
import { AcademyAdvantages } from "./components/AcademyAdvantages";
import { Branches } from "./components/Branches";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect } from "react";
import "../styles/custom.css";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <QuickRegistration />
      <ScholarshipTest />
      <Courses />
      <WhyChoose />
      <TopResults />
      <Testimonials />
      <AcademyAdvantages />
      <Branches />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
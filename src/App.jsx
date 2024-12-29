import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import AboutSection from "./components/About"
import ServicesSection from "./components/ServicesSection"
import ITConsultingSection from "./components/ITConsultingSection"
import Consultation from "./components/Consultation";
import Cart from './components/Cart'
import PricingCards from './components/PricingCards'
import Client from "./components/Client";
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="overflow-x-hidden">

      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <ITConsultingSection/>
      <Consultation/>
      <Cart/>
      <PricingCards/>
      <Client/>
      <ContactUs/>
      <BlogSection />
      <Footer/>
    </div>
  );
};

export default App;

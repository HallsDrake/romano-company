import React from 'react';
import NavbarLaura from '../components/laura/NavbarLaura';
import HeroLaura from '../components/laura/HeroLaura';
import PortfolioLaura from '../components/laura/PortfolioLaura';
import ServicosLaura from '../components/laura/ServicosLaura';
import ValuePropLaura from '../components/laura/ValuePropLaura';
import AboutLaura from '../components/laura/AboutLaura';
import FooterLaura from '../components/laura/FooterLaura';
import WhatsAppFloating from '../components/laura/WhatsAppFloating';

const Home = () => {
  return (
    <div className="bg-main selection:bg-accent-primary/20 selection:text-accent-primary">
      <NavbarLaura />
      <main>
        <HeroLaura />
        <PortfolioLaura />
        <ServicosLaura />
        <ValuePropLaura />
        <AboutLaura />
      </main>
      <FooterLaura />
      <WhatsAppFloating />
    </div>
  );
};

export default Home;

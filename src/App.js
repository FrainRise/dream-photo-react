import React from 'react';
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import AboutUsSection from "./components/AboutUsSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <AboutUsSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;

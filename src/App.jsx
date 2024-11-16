import React from "react";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;

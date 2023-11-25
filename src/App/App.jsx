import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import "./App.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutSection from "../components/AboutSection/AboutSection";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div >
  );
};

export default App;

import React from "react";
import Header from "../components/Header/Header";
import AboutSection from "../components/AboutSection/AboutSection";
import FormationSection from "../components/FormationSection/FormationSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <FormationSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </div >
  );
};

export default App;

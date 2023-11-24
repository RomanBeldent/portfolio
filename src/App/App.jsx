import React from "react";
import CardSection from "../components/CardSection/CardSection";
import ContactForm from "../components/ContactForm/ContactForm";
import Nav from "../components/Nav/Nav";
import "./App.scss";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <CardSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

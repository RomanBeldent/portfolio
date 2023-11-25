import React from "react";
import CardSection from "../components/CardSection/CardSection";
import ContactForm from "../components/ContactForm/ContactForm";
import Nav from "../components/Nav/Nav";
import "./App.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

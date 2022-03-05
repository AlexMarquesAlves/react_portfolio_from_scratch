import React from "react";
import "./index.scss";
import {
  Header, // import Header from "./components/Header";
  Nav, // import Nav from "./components/Nav";
  About, // import About from "./components/About";
  Experience, // import Experience from "./components/Experience";
  Services, // import Services from "./components/Services";
  Portfolio, // import Portfolio from "./components/Portfolio";
  Testimonials, // import Testimonials from "./components/Testimonials";
  Contact, // import Contact from "./components/Contact";
  Footer, // import Footer from "./components/Footer";
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

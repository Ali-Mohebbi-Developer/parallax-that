// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import Header from "./components/Header";
import ScrollFixed from "./components/ScrollFixed";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Feature from "./components/Feature";
import SubScribe from "./components/SubScribe";
import Motion from "./components/Motion";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-poppins mt-40 overflow-hidden">
      <div className="px-5 md:px-10 ">
        <Header />
        <div className="relative my-16 ">
          <ScrollFixed />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="work">
          <Work />
        </div>
      </div>
      <div id="benefits">
        <Feature />
      </div>
      <div className="px-5 md:px-10 ">
        <SubScribe />
        <Motion />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Project.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import WorkExperience from "./sections/Experiance.jsx";
import Skills from "./sections/skills.jsx";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Skills />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

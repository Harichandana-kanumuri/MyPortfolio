import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/contact";
import SocialIcons from "./components/SocialIcons";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar />

      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>

      <footer className="mt-12 mb-4 flex justify-center">
        <SocialIcons />
      </footer>
    </div>
  );
};

export default App;

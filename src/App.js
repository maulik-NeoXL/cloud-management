import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import Platform from "./components/Platform";

function App()
{
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Platform />
    </div>
  );
}

export default App;

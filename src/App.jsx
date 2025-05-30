import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ClickSpark from "./components/ClickSpark/ClickSpark";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const currentSparkColor = theme === "light" ? "black" : "white";

  return (
    <ClickSpark
      sparkColor={currentSparkColor}
      sparkSize={10}
      sparkRadius={12}
      sparkCount={8}
      duration={300}
    >
      {" "}
      <div className="app" id={`${theme}`}>
        <main>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <About />
          <Projects />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
};

export default App;

import { useState } from "react";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import About from "./dashboard/about.jsx";
import Certificate from "./dashboard/certificate.jsx";
import Home from "./dashboard/home.jsx";
import Project from "./dashboard/project.jsx";
import AgriculturalCaseStudy from "./dashboard/project/agriculturalcasestudy.jsx";
import Usbordercrossing from "./dashboard/project/usbordercrossing.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      {activeSection === "about" && <About />}
      {activeSection === "project" && <Project onNavigate={handleNavigate} />}
      {activeSection === "agriculturalcasestudy" && (
        <AgriculturalCaseStudy onNavigate={handleNavigate} />
      )}
      {activeSection === "usbordercrossing" && (
        <Usbordercrossing onNavigate={handleNavigate} />
      )}
      {activeSection === "certificate" && <Certificate />}
      {activeSection === "home" && <Home />}
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import ResumeSection from "./components/ResumeSection";
import ProjectDetail from "./components/ProjectDetail";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <HomePage />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ProjectDetail from "./components/ProjectDetail";
import MediaPortfolio from "./components/MediaPortfolio";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <HomePage />
      <AboutSection />
      <WorkSection />
      <MediaPortfolio />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

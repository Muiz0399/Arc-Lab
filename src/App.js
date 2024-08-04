import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import Project from "./components/Project/Project";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ScrollToTop from "./components/ScollToTop/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#FFA500" size={50} />
    </div>
  );
}

function AppRoutes() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    const timer = setTimeout(handleComplete, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      {loading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <AppRoutes />
    </Router>
  );
}

export default App;

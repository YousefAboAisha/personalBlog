import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/home";
import Projects from "./Containers/Projects/projects";
import Contact from "./Containers/Contact/contact";
import Social from "./Components/Socail/Social";
import Spinner from "./Components/UI/Spinner/spinner";
import Checkout from "./Containers/Home/checkout/checkout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="personalBlog/*" element={<Home />} />
        <Route path="personalBlog/checkout" element={<Checkout />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="personalBlog" />} />
      </Routes>

      <div className="App">
        <Social />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;

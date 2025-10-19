import { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import PageNotFound from './pages/NotFound';
import PropContext from './Hooks/PropContext';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme= darkMode
    ?{ backgroundColor: "#1F2937", color: "white", circleBorder: "374151" }
    :{ backgroundColor: "white", color: "black", circleBorder: "E5E7EB" };

  return (
    <PropContext.Provider value={{ darkMode, setDarkMode, theme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </PropContext.Provider>
  );
}

export default App;
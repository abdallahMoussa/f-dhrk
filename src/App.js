import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ThemeContext from "./context/ThemeContext";
import bgDark from "./assets/images/texture_dark.png";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className="App dark:bg-slate-800 bg-white">
      <Router>
        <div
          style={{
            backgroundImage: "url(" + bgDark + ")",
          }}
        >
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <About />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

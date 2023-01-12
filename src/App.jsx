import "./App.css";

import NavBar from "./component/NavBar/NavBar";
import PokeAPI from "./routes/PokeAPI/PokeAPI";

//Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//Contexts
// import ExampleContext from "./component/content/ExampleContext";

//Routes
import LandingPage from "./routes/LandingPage";
import AboutPage from "./routes/About/About";
import ContactPage from "./routes/Contact/ContactPage";
import PortfolioPage from "./routes/PorfolioPage/PortfolioPage";
import Qualifications from "./routes/Qualifications/QualificationsPage";
import ProjectPage from "./routes/Projects/ProjectPage";
import TestPage from "./routes/TestPage";
import TestPage2 from "./routes/TestPage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Qualifications" element={<Qualifications />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/PokeAPI" element={<PokeAPI />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/TestPage" element={<TestPage />} />
        <Route path="/TestPage2" element={<TestPage2 />} />
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <div className=" w-full h-full bg-black">
                <img className="mt-20" src="https://http.cat/404" />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

function doesNothing() {}

// const ColorMode = () => {
//   const [ColorMode, setColorMode] = useState("dark");
// };

// <Button
//   idAndClass=""
//   text=""
//   onClick={() => (setToggle("dark") ? setToggle("light") : setToggle("dark"))}
// />;

export default App;

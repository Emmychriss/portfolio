import "./App.css";

import Sidebar from "../src/Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Testimonial />
      <Contact />

      <ScrollToTop
        smooth="true"
        height="20"
        width="20"
        color="white"
        style={{ backgroundColor: "#282828" }}
      />
    </div>
  );
}

export default App;

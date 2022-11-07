import "./App.css";

import Sidebar from "../src/Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";

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
    </div>
  );
}

export default App;

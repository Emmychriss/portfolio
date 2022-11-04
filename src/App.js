import "./App.css";

import Sidebar from "../src/Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
    </div>
  );
}

export default App;

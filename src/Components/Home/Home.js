import "./Home.css";
import Typewritter from "typewriter-effect";
import myCV from "../../assets/CV/Emmanuel_Nduka_CV.pdf";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi, I'm a </h1>
        <h2>
          <Typewritter
            options={{
              strings: [
                "Software Engineer",
                "Tech Enthusiast",
                "Resourceful Youth",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="action-button">
          <div className="hire-me-btn">Hire Me</div>
          <div className="getResume-btn">
            <a href={myCV} download="Nduka_Emma_CV">
              Get My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

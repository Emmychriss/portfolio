import "./Home.css";
import Typewritter from "typewriter-effect";

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
      </div>
    </div>
  );
};

export default Home;

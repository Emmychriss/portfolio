import "./About.css";

import profilePic from "../../assets/Images/emmy.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={profilePic} alt="profile pic"></img>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Text about me should all be contained here. Text about me should
              all be contained here.Text about me should all be contained here.
              Text about me should all be contained here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

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
              I'm a software engineer with fresh experience in developing web
              applications for specific use cases and a few months of training
              in a variety of domains and tech-stacks. I have significant
              experience working with Javascript and frameworks like ReactJS,
              jQuery, signalR framework and other languages. I'm a developer who
              aspire to build the necessary skillset for the mastery of MERN
              stack in my development career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

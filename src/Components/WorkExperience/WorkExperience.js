import "./WorkExperience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  const data = [
    {
      orgName: "Google",
      position: "Full stack developer",
      description:
        "I wrote a lot of code and data manipulations for several use-cases",
      techSkills: [
        {
          techName: "Node JS",
        },
        {
          techName: "Express JS",
        },
        {
          techName: "UI/UX",
        },
      ],
      year: "2019-2020",
    },

    {
      orgName: "Amazon",
      position: "Front end developer",
      description:
        "I was actively involved with building the e-commerce website for users and good UX",
      techSkills: [
        {
          techName: "React JS",
        },
        {
          techName: "Express JS",
        },
        {
          techName: "QA Testing",
        },
      ],
      year: "2016-2018",
    },

    {
      orgName: "Instagram",
      position: "back end developer",
      description:
        "We designed and implemented new variety of instagram interfaces",
      techSkills: [
        {
          techName: "Firebase",
        },
        {
          techName: "Angular JS",
        },
        {
          techName: "UI/UX",
        },
      ],
      year: "2014-2016",
    },
  ];

  return (
    <div className="container workExperience-section">
      <div className="workExperience-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default WorkExperience;

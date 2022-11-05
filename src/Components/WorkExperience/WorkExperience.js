import "./WorkExperience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

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
      color: "#EB984E",
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
      color: "#717D7E",
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
      color: "#9B59B6",
    },
  ];

  return (
    <div className="container workExperience-section">
      <div className="workExperience-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline>
        {data.map((item, index, arr) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: item.color, color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: item.color, color: "#fff" }}
              icon={<MdGroupWork />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;

import "./ProjectList.css";
import { FcCollapse, FcExpand } from "react-icons/fc";

const ProjectList = (props) => {
  return (
    <div className="projectList">
      <div className="title-and-CollapseBtn">
        <h5>{props.name}</h5>
        <p>
          <FcExpand size={20} />
        </p>
      </div>

      <div className="description">
        <p>{props.description}</p>
      </div>

      <div className="row">
        {props.techUsed &&
          props.techUsed.map((techObj, index, arr) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p>{techObj.techName}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="liveDemo-btn">
        <a target="_" href={props.projectLink}>
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;

import "./SidebarList.css";
import profilePic from "../../assets/Images/emmy.jpg";

import {
  FcHome,
  FcAbout,
  FcAcceptDatabase,
  FcBiotech,
  FcGraduationCap,
  FcIdea,
  FcBarChart,
  FcContacts,
} from "react-icons/fc";

const SidebarList = (props) => {
  return (
    <div className="nav-items">
      {props.expandSidebar ? (
        <>
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="Profile Pic"></img>
          </div>

          <ul>
            <li className="nav-item">
              <FcHome size={25} /> Home
            </li>
            <li className="nav-item">
              <FcAbout size={25} /> About
            </li>
            <li className="nav-item">
              <FcAcceptDatabase size={25} /> Work Experience
            </li>
            <li className="nav-item">
              <FcBiotech size={25} /> Tech Stack
            </li>
            <li className="nav-item">
              <FcGraduationCap size={25} /> Education
            </li>
            <li className="nav-item">
              <FcIdea size={25} /> Projects
            </li>
            <li className="nav-item">
              <FcBarChart size={25} /> Testimonial
            </li>
            <li className="nav-item">
              <FcContacts size={25} /> Contact
            </li>
          </ul>
        </>
      ) : (
        <div className="navItems-iconsOnly">
          <ul>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcAbout size={25} />
            </li>
            <li className="nav-item">
              <FcAcceptDatabase size={25} />
            </li>
            <li className="nav-item">
              <FcBiotech size={25} />
            </li>
            <li className="nav-item">
              <FcGraduationCap size={25} />
            </li>
            <li className="nav-item">
              <FcIdea size={25} />
            </li>
            <li className="nav-item">
              <FcBarChart size={25} />
            </li>
            <li className="nav-item">
              <FcContacts size={25} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarList;

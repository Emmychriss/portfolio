import "./SidebarList.css";

import profilePic from "../../Images/emmy.jpg";

const SidebarList = (props) => {
  return (
    <>
      <div className="nav-items">
        {props.expandSidebar ? (
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="Profile Pic"></img>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default SidebarList;

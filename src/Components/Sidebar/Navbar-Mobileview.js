import "./Navbar-Mobileview.css";

import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobileView = () => {
  return (
    <header className="navbar-header">
      <p>
        <GiHamburgerMenu size={25} />
      </p>
    </header>
  );
};

export default NavbarMobileView;

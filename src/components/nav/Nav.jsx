import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav">
      {/* Mobile Hamburger Icon */}
      <div className="mobile_menu_icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Content */}
      <div
        className={`nav_content ${
          isMobileMenuOpen ? "mobile_menu_active" : ""
        }`}
      >
        <div className="nav_sec">
          <ul className="nav_ul">
            <li className="nav_li">
              <Link
                to="schedule_container"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                schedule
              </Link>
            </li>
            <li className="nav_li">
              <Link
                to="l_title"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                location & travel info
              </Link>
            </li>
            <li className="nav_li">
              <Link
                to="story"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Story
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_sec">
          <Link
            to="rsvp"
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button className="header_btn">rsvp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

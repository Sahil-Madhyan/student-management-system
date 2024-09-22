import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navbarStyle = {
    backgroundColor: darkMode ? "#343a40" : "#f8f9fa",
    color: darkMode ? "white" : "black",
    padding: "1rem",
  };

  const linkStyle = {
    color: darkMode ? "white" : "black",
    textDecoration: "none",
    fontSize: "1.1rem",
  };

  const buttonStyle = {
    backgroundColor: darkMode ? "#6c757d" : "#007bff",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <Link to={"/"} className="nav-link d-flex align-items-center" style={linkStyle}>
          <PiStudentFill className="me-1" />
          Student Management System
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"/create-student"}
                className="nav-link d-flex align-items-center"
                style={linkStyle}
              >
                <IoMdCreate className="me-1" />
                Create Student
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/student-list"}
                className="nav-link d-flex align-items-center"
                style={linkStyle}
              >
                <FaClipboardList className="me-1" />
                Student List
              </Link>
            </li>
            <li className="nav-item">
              <button className="ms-3" onClick={toggleDarkMode} style={buttonStyle}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

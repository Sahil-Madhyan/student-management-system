import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/"} className="nav-link d-flex align-items-center">
            <PiStudentFill className="me-1" />
            Student Management System
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/create-student"}
                  className="nav-link d-flex align-items-center"
                >
                  <IoMdCreate className="me-1" />
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/student-list"}
                  className="nav-link d-flex align-items-center"
                >
                  <FaClipboardList className="me-1" />
                  Student List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

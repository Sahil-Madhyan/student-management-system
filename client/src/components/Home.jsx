import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoMdCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const homeStyle = {
    backgroundColor: darkMode ? "#121212" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    padding: "2rem",
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#333" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div className="App" style={homeStyle}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1 className="text-center mt-5">Welcome to SMS</h1>
      <div className="container d-flex justify-content-evenly mt-5">
        <div className="card" style={{ ...cardStyle, width: "18rem" }}>
          <img
            src="./students_09.jpg"
            className="card-img-top"
            alt="students-creation"
          />
          <div className="card-body mt-5">
            <h5 className="card-title">Create Student</h5>
            <p className="card-text">
              Add students to the database by clicking below
            </p>
            <Link to={"/create-student"} className="btn btn-primary">
              <IoMdCreate className="me-1 mb-1" />
              Create Student
            </Link>
          </div>
        </div>
        <div className="card" style={{ ...cardStyle, width: "18rem" }}>
          <img
            src="./students_08.jpg"
            className="card-img-top"
            alt="students-list"
          />
          <div className="card-body">
            <h5 className="card-title">Students List</h5>
            <p className="card-text">
              View Students added to the database by clicking below
            </p>
            <Link to={"/student-list"} className="btn btn-primary">
              <FaClipboardList className="me-1 mb-1" />
              View List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

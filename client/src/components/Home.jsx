import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoMdCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center mt-5">Welcome to SMS</h1>
      <div className="container d-flex justify-content-evenly mt-5">
        <div className="card" style={{ width: "18rem" }}>
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
        <div className="card" style={{ width: "18rem" }}>
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

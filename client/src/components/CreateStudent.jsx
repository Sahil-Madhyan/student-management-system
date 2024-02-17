import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaPlus } from "react-icons/fa";

const CreateStudent = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  const [send, setSend] = useState(false);
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setSend(true);
        setUserForm({
          name: "",
          email: "",
          rollno: "",
        });
      });
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">Add a Student</h1>
      <div className="container mt-5">
        <div className="form-wrapper">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={userForm.name}
                onChange={inputsHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={userForm.email}
                onChange={inputsHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Roll no.</label>
              <input
                type="text"
                className="form-control"
                name="rollno"
                id="rollno"
                value={userForm.rollno}
                onChange={inputsHandler}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                <FaPlus className="me-1 mb-1" />
                Add Student
              </button>
              {send && <p className="mt-2">Added Successfully</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;

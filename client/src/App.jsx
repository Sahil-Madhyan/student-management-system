import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/create-student" element={<CreateStudent />} />
          <Route exact path="/edit-student/:id" element={<EditStudent />} />
          <Route exact path="/student-list" element={<StudentList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import StudentCounter from "./components/StudentCounter";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";

/* Parent component. The students array lives here,
   and the child components receive it through props. */
function App() {
  const [students, setStudents] = useState([]);

  // adds a new student at the end of the array
  function addStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  // keeps every student EXCEPT the one with this id
  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className="app">
      <h1>Student Directory</h1>

      {/* Bonus: total number of registered students */}
      <StudentCounter count={students.length} />

      <div className="content">
        <RegistrationForm onAddStudent={addStudent} />
        <StudentList students={students} onDelete={deleteStudent} />
      </div>
    </div>
  );
}

export default App;

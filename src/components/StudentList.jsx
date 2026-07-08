import StudentCard from "./StudentCard";

/* Uses map() to display one StudentCard per student.
   Uses conditional rendering to show a message when the list is empty. */
function StudentList({ students, onDelete }) {
    return (
        <div className="list">
            <h2>Registered Students</h2>

            {students.length === 0 ? (
                <p className="empty">No students registered yet. Use the form to add one.</p>
            ) : (
                students.map((student) => (
                    <StudentCard key={student.id} student={student} onDelete={onDelete} />
                ))
            )}
        </div>
    );
}

export default StudentList;

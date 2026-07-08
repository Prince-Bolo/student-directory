/* Displays one student. Gets the student object and the
   delete function through props. */
function StudentCard({ student, onDelete }) {
    return (
        <div className="card">
            <div>
                <h3>{student.name}</h3>
                <p>{student.course} • {student.year}</p>
            </div>
            <button className="delete-btn" onClick={() => onDelete(student.id)}>
                Delete
            </button>
        </div>
    );
}

export default StudentCard;

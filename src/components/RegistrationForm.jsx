import { useState } from "react";

/* Handles the inputs. Each input is a "controlled component":
   its value lives in state, and onChange updates that state. */
function RegistrationForm({ onAddStudent }) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // stops the page from reloading

        // simple validation
        if (name.trim() === "" || course === "" || year === "") {
            setError("Please fill in all fields.");
            return;
        }

        // send the new student up to App through props
        onAddStudent({
            id: Date.now(), // quick way to get a unique id
            name: name.trim(),
            course: course,
            year: year,
        });

        // clear the form after adding
        setName("");
        setCourse("");
        setYear("");
        setError("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

            <label>Full Name</label>
            <input
                type="text"
                placeholder="e.g. Juan Dela Cruz"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Course</label>
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">-- Select Course --</option>
                <option value="BSIT">BSIT</option>
                <option value="BSCS">BSCS</option>
            </select>

            <label>Year Level</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">-- Select Year --</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
            </select>

            {/* the error only shows when error is not empty */}
            {error && <p className="error">{error}</p>}

            <button type="submit" className="add-btn">Add Student</button>
        </form>
    );
}

export default RegistrationForm;

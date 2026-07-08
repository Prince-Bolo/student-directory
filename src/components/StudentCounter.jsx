/* Small component that receives the count through props
   and displays the total number of registered students. */
function StudentCounter({ count }) {
    return (
        <div className="counter">
            Total Registered Students: <span className="counter-number">{count}</span>
        </div>
    );
}

export default StudentCounter;

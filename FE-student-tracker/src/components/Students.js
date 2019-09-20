import React from "react";
import * as api from "../utils";
import { Link } from "@reach/router";

class Students extends React.Component {
  state = {
    students: [],
    loading: true
  };
  render() {
    const { students, loading } = this.state;
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            <h2>Students</h2>
            <p>{students.length} students</p>
            <Link to="/students/add-student">
              <button>Add Student</button>
            </Link>
            <div className="students">
              {students.map((student, i) => {
                return (
                  <Link
                    to={`/students/${student._id}`}
                    className="studentList"
                    key={i}
                  >
                    {student.name} &nbsp;&nbsp;
                    {student.currentBlock === "grad" ? "🎓" : null}
                    {student.currentBlock === "proj" ? "👷🏽" : null}
                    {student.currentBlock === "fe" ? "🖼️ " : null}
                    {student.currentBlock === "be" ? "📈" : null}
                    {student.currentBlock === "fun" ? "🔴" : null}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { blocks } = this.props;
    if (blocks !== prevProps.blocks) {
      this.fetchStudents(blocks);
    }
  };

  componentDidMount = () => {
    this.fetchStudents();
  };

  fetchStudents = async () => {
    const { blocks } = this.props;
    const students = await api.getStudent(blocks);
    this.setState({ students, loading: false });
  };
}
export default Students;

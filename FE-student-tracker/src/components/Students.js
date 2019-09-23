import React from "react";
import * as api from "../utils";
import { Link } from "@reach/router";

class Students extends React.Component {
  state = {
    students: [],
    loading: true
    // sortby: "name"
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
            {/* <div> */}
            <Link to="/students/add-student">
              <button>Add Student</button>
            </Link>
            {/* <form>
                Sort By:
                <select onChange={this.handleChange}>
                  <option value="name"> Name </option>
                  <option value="startingCohort"> Starting Cohort </option>
                  <option value="currentBlock"> Current Block </option>
                </select>
              </form>
            </div> */}
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
    const { block } = this.props;
    const { sortby } = this.state;
    if (block !== prevProps.block || sortby !== prevState.sortby) {
      this.fetchStudents(block, sortby);
    }
  };

  componentDidMount = () => {
    const { block, sort_by } = this.props;
    this.fetchStudents(block, sort_by);
  };

  fetchStudents = async (block, sort_by) => {
    const students = await api.getStudent(block, sort_by);
    this.setState({ students, loading: false });
  };

  handleChange = event => {
    const { value } = event.target;
    const { block, sort_by } = this.props;
    this.setState({ sortby: value });
    this.fetchStudents(block, sort_by);
  };
}
export default Students;

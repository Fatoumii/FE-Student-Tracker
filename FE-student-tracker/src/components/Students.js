import React from "react";
import * as api from "../utils";
import { Link } from "@reach/router";

class Students extends React.Component {
  state = {
    students: [],
    loading: true,
    sortby: "name"
  };
  render() {
    const { students, loading } = this.state;
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            <h2 className="studentTitle">Students</h2>
            <p>{students.length} students</p>
            <div className="subheadingStyle">
              <Link to="/students/add-student">
                <button className="addStudent">Add Student</button>
              </Link>

              <form>
                Sort By: <br></br>
                <select onChange={this.handleChange}>
                  <option value="name"> Name </option>
                  <option value="startingCohort"> Starting Cohort </option>
                  <option value="currentBlock"> Current Block </option>
                </select>
              </form>
            </div>
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
    const { slug } = this.props;
    const { sortby } = this.state;
    if (slug !== prevProps.slug || sortby !== prevState.sortby) {
      this.fetchStudents(slug, sortby);
    }
  };

  componentDidMount = () => {
    const { slug } = this.props;
    const { sortby } = this.state;

    this.fetchStudents(slug, sortby);
  };

  fetchStudents = async (slug, sortby) => {
    const students = await api.getStudent(slug, sortby);
    this.setState({ students, loading: false });
  };

  handleChange = event => {
    const { value } = event.target;
    const { slug } = this.props;
    const { sortby } = this.state;
    this.setState({ sortby: value });
    this.fetchStudents(slug, sortby);
  };
}
export default Students;

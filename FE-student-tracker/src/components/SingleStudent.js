import React from "react";
import * as api from "../utils";

class SingleStudent extends React.Component {
  state = {
    student: [],
    blockHistory: [],
    deletedSuccessfully: false,
    loading: true,
    blocks: []
  };
  render() {
    const {
      blockHistory,
      student,
      deletedSuccessfully,
      loading,
      blocks
    } = this.state;
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            {deletedSuccessfully === true ? (
              <div>
                <h1>{student.name} has now been deleted</h1>
                <p>
                  Go back to the list of students <a href="/students">here</a>
                </p>
              </div>
            ) : (
              <div>
                <h1>{student.name}</h1>
                <h3>Started with us on Cohort {student.startingCohort}</h3>
                <h4>Block History:</h4>
                {blocks.map((block, i) => (
                  <p key={i}>{block}</p>
                ))}
                <button onClick={this.handleDelete}>Delete</button>
                <button
                  disabled={blockHistory.some(
                    block => block.name === "Graduated"
                  )}
                >
                  Progress Student
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchSingleStudent();
  };
  fetchSingleStudent = async () => {
    const { student_id } = this.props;
    const student = await api.getStudentById(student_id);
    const blocks = student.blockHistory.map(block => block.name);
    this.setState({
      student,
      blockHistory: student.blockHistory,
      loading: false,
      blocks
    });
  };
  handleDelete = () => {
    const { student_id } = this.props;
    api.deleteStudent(student_id);
    this.setState({ deletedSuccessfully: true });
  };
}

export default SingleStudent;

import React from "react";
import * as api from "../utils";

class SingleStudent extends React.Component {
  state = {
    student: [],
    blockHistory: [],
    deletedSuccessfully: false,
    loading: true
  };
  render() {
    const { blockHistory, student, deletedSuccessfully, loading } = this.state;
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            {deletedSuccessfully === true ? (
              <h1>{student.name} has now been deleted</h1>
            ) : (
              <div>
                <h1>{student.name}</h1>
                <h3>Started with us on Cohort {student.startingCohort}</h3>
                <h4>Block History:</h4>
                {blockHistory.map((block, i) => {
                  return (
                    <p key={i}>
                      {block.name} - {block.number}
                    </p>
                  );
                })}
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
    this.setState({
      student,
      blockHistory: student.blockHistory,
      loading: false
    });
  };
  handleDelete = () => {
    const { student_id } = this.props;
    api.deleteStudent(student_id);
    this.setState({ deletedSuccessfully: true });
  };
}

export default SingleStudent;

//single student - how many times a block has been repeated
//when deleted and refreshed, student details are empty with error
//loading
//disable progress button if student has graduated

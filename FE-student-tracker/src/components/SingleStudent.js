import React from "react";
import { navigate } from "@reach/router";

import * as api from "../utils";

class SingleStudent extends React.Component {
  state = {
    student: [],
    blockHistory: [],
    deletedSuccessfully: false,
    loading: true,
    blocks: [],
    progress: false
  };
  render() {
    const {
      blockHistory,
      student,
      deletedSuccessfully,
      loading,
      blocks,
      progress
    } = this.state;
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            {progress === true ? (
              <div>
                <h1>
                  {student.name} has now been progressed to the next block
                </h1>
                <p>
                  Go back to the list of students <a href="/students">here</a>
                </p>
              </div>
            ) : (
              <div>
                {deletedSuccessfully === true ? (
                  <div>
                    <h1>{student.name} has now been deleted</h1>
                    <p>
                      Go back to the list of students{" "}
                      <a href="/students">here</a>
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
                      onClick={this.handleProgress}
                    >
                      Progress Student
                    </button>
                  </div>
                )}
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
    try {
      const { student_id } = this.props;
      const student = await api.getStudentById(student_id);
      const blocks = student.blockHistory.map(block => block.name);
      this.setState({
        student,
        blockHistory: student.blockHistory,
        loading: false,
        blocks
      });
    } catch (err) {
      navigate("/error", {
        state: {
          message: "The student cannot be found"
        },
        replace: true
      });
    }
  };
  handleDelete = () => {
    const { student_id } = this.props;
    api.deleteStudent(student_id);
    this.setState({ deletedSuccessfully: true });
  };
  handleProgress = async () => {
    const { student_id } = this.props;
    const updatedStudent = await api.updateStudentProgress(student_id);
    this.setState({ student: updatedStudent, progress: true });
  };
}

export default SingleStudent;

import React from "react";
import * as api from "../utils";
import _ from "lodash";

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
    console.log(blocks);
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
                {_.uniq(blocks).map((block, i) => {
                  return (
                    <p key={i}>
                      {block} - {block.length}
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
  // handleRepeats = () => {
  //   const { blocks } = this.state;
  //   var count = {};
  //   blocks.forEach(function(i) {
  //     count[i] = (count[i] || 0) + 1;
  //   });
  // };
}

export default SingleStudent;

//single student - how many times a block has been repeated

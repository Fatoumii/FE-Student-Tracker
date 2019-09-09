import React from "react";
import * as api from "../utils";

class SingleStudent extends React.Component {
  state = {
    student: [],
    blockHistory: []
  };
  render() {
    const { blockHistory, student } = this.state;
    return (
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
        <div>
          <button>Delete</button>
          <button>Progress Student</button>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchSingleStudent();
  };
  fetchSingleStudent = async () => {
    const { student_id } = this.props;
    const student = await api.getStudentById(student_id);
    this.setState({ student, blockHistory: student.blockHistory });
  };
}

export default SingleStudent;

//single student - how many times a block has been repeated

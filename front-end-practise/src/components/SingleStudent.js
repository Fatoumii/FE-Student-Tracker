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

        {blockHistory.map(block => {
          return (
            <p key={block.id}>
              {block.name} - {block.number}
            </p>
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchSingleStudent();
  };
  fetchSingleStudent = async () => {
    const student = await api.getStudentById(this.props.student_id);
    this.setState({ student, blockHistory: student.blockHistory });
  };
}

export default SingleStudent;

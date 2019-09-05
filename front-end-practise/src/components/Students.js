import React from "react";
import * as api from "../utils";

class Main extends React.Component {
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
            <div className="students">
              {students.map(student => {
                return (
                  <ul className="studentList" key={student.id}>
                    <li>{student.name}</li>
                  </ul>
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
    console.log(block);
    console.log("update");
    if (block !== prevProps.block) {
      this.fetchStudents(block);
    }
  };

  componentDidMount = () => {
    const { block } = this.props;
    this.fetchStudents(block);
  };

  fetchStudents = async block => {
    const students = await api.getStudent(block);
    this.setState({ students, loading: false });
  };
}
export default Main;

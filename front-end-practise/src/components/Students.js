import React from "react";
import * as api from "../utils";
import { Link } from "@reach/router";

class Main extends React.Component {
  state = {
    students: [],
    loading: true
  };
  render() {
    const { students, loading } = this.state;
    // const { blocks } = this.props;
    // console.log(blocks); need this to be the slug so can use this name to change the students
    //make sure numberof students changes
    //two loadings, here and on nav- choose one
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            <h2>Students</h2>
            <p>{students.length} students</p>
            <div className="students">
              {students.map(student => {
                return (
                  <Link
                    to={`/students/${student._id}`}
                    className="studentList"
                    key={student.id}
                  >
                    {student.name}
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

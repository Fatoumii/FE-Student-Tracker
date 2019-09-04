import React from "react";
import * as api from "../utils";

class Main extends React.Component {
  state = {
    students: [],
    loading: true
  };
  render() {
    const { students, loading } = this.state;
    console.log(students);
    return (
      <div className="content">
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
  componentDidMount = () => {
    api.getStudent().then(data => {
      this.setState({ students: data, loading: false });
    });
  };
}
export default Main;

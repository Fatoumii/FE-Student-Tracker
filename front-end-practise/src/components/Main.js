import React from "react";
import * as api from "../utils";

class Main extends React.Component {
  state = {
    students: []
  };
  render() {
    const { students } = this.state;

    return (
      <div>
        {students.map(student => {
          return (
            <ul className="studentList" key={student.id}>
              <li>
                {student.name.includes(" ") ? student.name.toUpperCase() : null}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    api.getStudent().then(data => {
      this.setState({ students: data });
    });
  };
}

export default Main;

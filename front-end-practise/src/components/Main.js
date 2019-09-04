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
            {students.map(student => {
              return (
                <ul className="studentList" key={student.id}>
                  <li>
                    {student.name.includes(" ")
                      ? student.name.toUpperCase()
                      : null}
                  </li>
                </ul>
              );
            })}
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

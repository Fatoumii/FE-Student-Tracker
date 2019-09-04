import React from "react";
import * as api from "../utils";

class Main extends React.Component {
  state = {
    students: {}
  };
  render() {
    const { students } = this.state;
    console.log(students);
    return (
      <div>
        <p>Main</p>
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

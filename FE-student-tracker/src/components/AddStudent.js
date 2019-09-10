import React from "react";
import * as api from "../utils";

class AddStudent extends React.Component {
  state = {
    name: "",
    startingCohort: "",
    addedSuccessfully: false
  };
  render() {
    const { name, startingCohort, addedSuccessfully } = this.state;
    return (
      <div>
        {addedSuccessfully === true ? (
          <h1> {name} has been added </h1>
        ) : (
          <div>
            <h2>Add a student below:</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">
                Name:
                <input
                  placeholder="Name..."
                  value={name}
                  id="name"
                  onChange={this.handleName}
                />
              </label>
              <br></br>
              <label htmlFor="startingCohort">
                Starting Cohort:
                <input
                  placeholder="Starting Cohort..."
                  value={startingCohort}
                  id="startingCohort"
                  onChange={this.handleCohort}
                />
              </label>
              <br></br>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        )}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, startingCohort } = this.state;
    api.addStudent(name, startingCohort);
    this.setState({ addedSuccessfully: true });
  };

  handleName = event => {
    const { value } = event.target;
    this.setState({
      name: value
    });
  };
  handleCohort = event => {
    const { value } = event.target;
    this.setState({ startingCohort: value });
  };
}
export default AddStudent;

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
          <div>
            {" "}
            <h1> {name} has been added </h1>
            <p>
              Go back to the list of students <a href="/students">here</a>
            </p>
          </div>
        ) : (
          <div>
            <h2>Add a student below:</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:<br></br>
                <input
                  placeholder="Name..."
                  value={name}
                  onChange={this.handleName}
                />
              </label>
              <br></br>
              <label>
                Starting Cohort: <br></br>
                <input
                  placeholder="Enter a number..."
                  value={startingCohort}
                  onChange={this.handleCohort}
                />
              </label>
              <br></br>
              <button
                type="submit"
                disabled={name.length === 0 || startingCohort.length === 0}
              >
                Submit
              </button>
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
    if (value.match(/[^a-z|\s]+/gi)) {
      return;
    }
    this.setState({
      name: value
    });
  };
  handleCohort = event => {
    const { value } = event.target;
    if (value.match(/[^0-9]+$/g)) {
      return;
    }
    this.setState({ startingCohort: value });
  };
}
export default AddStudent;

import React from "react";
import * as api from "../utils";
//CSS
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
                className="button"
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
    this.setState({
      name: value
    });
  };
  handleCohort = event => {
    const { value } = event.target;
    if (value.match(/^[0-9]+$/g)) {
      this.setState({ startingCohort: value });
    }
  };
}
export default AddStudent;

//allows you to delete the numbers exceot the first. Will wirk if highlighted and replaced. needs a number?

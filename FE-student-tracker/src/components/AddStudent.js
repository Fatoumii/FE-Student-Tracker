import React from "react";

class AddStudent extends React.Component {
  state = {
    name: "",
    startingCohort: ""
  };
  render() {
    const { name, startingCohort } = this.state;
    return (
      <div>
        <h2>
          Enter the student's details below and they'll be added to our database
        </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Name..." value={name} />
          </label>
          <label>
            <input
              type="text"
              placeholder="Starting Cohort..."
              value={startingCohort}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
  };
}
export default AddStudent;

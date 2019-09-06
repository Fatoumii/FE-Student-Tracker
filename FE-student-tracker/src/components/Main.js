import React from "react";
import Students from "./Students";
import * as api from "../utils";
import Nav from "./Nav";
import { Router } from "@reach/router";
import SingleStudent from "./SingleStudent";

class Main extends React.Component {
  state = {
    blocks: [],
    loading: true
  };
  render() {
    const { blocks, loading } = this.state;
    const { block } = this.props;

    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            <Nav blocks={blocks} />
            <Router>
              <Students path="/" blocks={blocks} block={block} />
              <SingleStudent path="/:student_id" />
            </Router>
          </div>
        )}
      </div>
    );
  }
  componentDidMount = () => {
    api.getBlocks().then(blocks => this.setState({ blocks, loading: false }));
  };
}
export default Main;

//keep one loading

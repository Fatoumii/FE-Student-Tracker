import React from "react";
import Students from "./Students";
import * as api from "../utils";
import Nav from "./Nav";
import { Router } from "@reach/router";
import SingleStudent from "./SingleStudent";
import AddStudent from "./AddStudent";

class Main extends React.Component {
  state = {
    blocks: [],
    slugs: [],
    loading: true
  };
  render() {
    const { blocks, loading } = this.state;
    return (
      <div>
        {loading === true ? (
          "Loading..."
        ) : (
          <div>
            <Nav blocks={blocks} />
            <Router>
              <Students path="/" blocks={blocks} />
              <SingleStudent path="/:student_id" />
              <AddStudent path="/add-student" />
            </Router>
          </div>
        )}
      </div>
    );
  }

  componentDidMount = async () => {
    const block = await api.getBlocks();
    const blockName = block.blocks.map(block => block.name);
    const slugs = block.blocks.map(block => block.slug);
    this.setState({ blocks: blockName, slugs, loading: false });
  };
}

export default Main;

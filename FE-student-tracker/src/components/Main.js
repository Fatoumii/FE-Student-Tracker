import React from "react";
import Students from "./Students";
import * as api from "../utils";
import Nav from "./Nav";
import { Router } from "@reach/router";
import SingleStudent from "./SingleStudent";

class Main extends React.Component {
  state = {
    blocks: [],
    slugs: []
  };
  render() {
    const { blocks, slugs } = this.state;
    return (
      <div>
        <Nav blocks={blocks} slugs={slugs} />
        <Router>
          <Students path="/" blocks={blocks} slugs={slugs} />
          <SingleStudent path="/:student_id" />
        </Router>
      </div>
    );
  }

  componentDidMount = async () => {
    const block = await api.getBlocks();
    const blockName = block.blocks.map(block => block.name);
    const slugs = block.blocks.map(block => block.slug);
    this.setState({ blocks: blockName, slugs });
  };
}

export default Main;

import React from "react";
import Students from "./Students";
import * as api from "../utils";
import Nav from "./Nav";
import { Router } from "@reach/router";

class Main extends React.Component {
  state = {
    blocks: []
  };
  render() {
    const { blocks } = this.state;
    return (
      <div>
        <Nav blocks={blocks} />
        {/* <Router> */}
        <Students path="/" blocks={blocks} />
        {/* </Router> */}
      </div>
    );
  }
  componentDidMount = () => {
    api.getBlocks().then(blocks => this.setState({ blocks }));
  };
}
export default Main;

import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import * as api from "./utils";

class App extends React.Component {
  state = {
    blocks: []
  };
  render() {
    const { blocks } = this.state;
    return (
      <div className="App">
        <Header />
        <Router className="router">
          <Home path="/" />
          <Main path="/students/*" blocks={blocks} />
          <Main path="/blocks/:slug" />
        </Router>
        <Footer />
      </div>
    );
  }
  componentDidMount = () => {
    api.getBlocks().then(blocks => this.setState({ blocks }));
  };
}

export default App;

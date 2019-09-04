import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Content path="/content" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

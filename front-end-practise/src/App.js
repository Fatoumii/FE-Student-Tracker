import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ID from "./components/ID";

function App() {
  return (
    <div className="App">
      <Header />
      <Router className="router">
        <Home path="/" />
        <Main path="/main" />
        <ID path="/main/:id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello first app</h1>
        <p>This is really working</p>
        <Person name="Adam" age="36" />
      </div>
    );
  }
}

export default App;

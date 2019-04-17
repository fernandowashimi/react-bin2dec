import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    inputValue: "",
    displayResult: false
  };

  handleInputChange = e => {
    const char = e.target.value.slice(-1);
    if (char === "") {
      this.setState({ inputValue: "" });
    } else if (char !== "0" && char !== "1") {
      return;
    } else {
      this.setState({ inputValue: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ displayResult: true });
    if (this.state.inputValue === "") {
      this.setState({ result: "Valor digitado inválido" });
    } else {
      const array = this.state.inputValue.split("");
      this.convertBinToDec(array);
    }
  };

  convertBinToDec(value) {
    const result = value.reverse().reduce((previous, current, index) => {
      return previous + current * Math.pow(2, index);
    }, 0);
    this.setState({ result });
    this.setState({ displayResult: true });
  }

  render() {
    return (
      <div className="main-container">
        <h1>Bin2Dec</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Converter</button>
        </form>
        {this.state.displayResult && (
          <div className="result-container">
            <h2>{this.state.result}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "Type in the text box.",
      phText: "Type here",
      userInput: "",
      hasLoaded: false,
    };
  }

  componentDidMount(){
      this.setState({ hasLoaded: !this.state.hasLoaded });

  }

  onInputChange = (e) => {
    this.setState({userInput: e.target.value});
  };

  changeLoaded = () => {
    this.setState({hasLoaded: !this.state.hasLoaded});
    this.setState({hasLoaded: true})
  };

  render() {
    if (this.state.hasLoaded) {
      return (
        <>
          <h1>{this.props.text}</h1>
          <h1>{this.state.text}</h1>
          <input
            value={this.state.userInput}
            type="text"
            placeholder={this.state.phText}
            onChange={(e) => this.onInputChange(e)}
          />
           <button onClick={this.changeLoaded}>Click</button>
        </>
      );
    } else {
      return (
        <>
          <h1>Loading...</h1>
          <button onClick={this.changeLoaded}>Click</button>
        </>
      );
    }
  }
}

export default App;
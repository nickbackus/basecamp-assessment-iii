import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="digitalClock">
        <Square value1={<Time/>} value2={<TickTock/>} />
      </div>

      {/*}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    */}
    </div>
    );
  }
}
class Time extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({date: new Date()});
  }

  getTime () {
    return this.state.date.toLocaleTimeString();
  }

  render() {
    return <div className="Time">{this.getTime()}</div>
  }

}


class TickTock extends Component{
  constructor(props){
    super(props);
    this.state = {tOrT: "Tick"};
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({tOrT: this.state.tOrT === "Tock" ? "Tick" : "Tock"});
  }

  render() {
      return (
      <div className="TickTock">
        {this.state.tOrT}
      </div>  
      ); 
  }
}

class Square extends Component {
  render() {
    return (
    <button className="square" onClick={() => alert('"The Blacks"')}>
      {this.props.value1}
      {this.props.value2}
    </button>
    );
  }
}

export default App;

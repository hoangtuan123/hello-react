import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello/>
        <RepeatData value={10}/>
        <Board/>
      </div>
    );
  }
}

class RepeatData extends Component {
  render(){
    return (
      <a>{this.props.value}</a>
    );
  }
}


class Board extends Component{
  renderSquare(i){
    return <Square value={i} test={i}  />
  }

  render(){
    return (
      <div>
        <div>
          {this.renderSquare(10)}
          {this.renderSquare(20)}
          {this.renderSquare(30)}
        </div>
        <div>
          {this.renderSquare(10)}
          {this.renderSquare(20)}
          {this.renderSquare(30)}
        </div>
        <div>
          {this.renderSquare(10)}
          {this.renderSquare(20)}
          {this.renderSquare(30)}
        </div>
      </div>
    );
  }
}

class Square extends Component{
  render(){
    return (
      <button className="square" onClick ={ () => alert(JSON.stringify(this.props))}>
        {this.props.value}
        </button>
    );
  }
}

export default App;

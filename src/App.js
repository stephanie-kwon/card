import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { compileFunction } from 'vm';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Shiba Inu",
      description: "Good boy",
      imagePath: "./images/img1.jpg"
    }

  }
  render() {
    return (
      <div className="container">
        <div className="card">
        <img className="card-img-top" src={this.state.imagePath} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

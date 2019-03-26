import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { compileFunction } from 'vm';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Shiba Inu",
      question: "What are they known as?",
      hint: "Dogge",
      imagePath: "./images/img1.jpg",
      visibility: true
    }
  this.toggleVsibility = this.toggleVsibility.bind(this)
  
}
toggleVsibility(){
  if(this.state.visibility == true){
    this.setState({
      visibility: false
    })} else {
        this.setState({
          visibility: true
        })
    }
  }
  
  render() {
      if(this.state.visibility){
        return (
          <div className="container">
            <div className="card">
            <img className="card-img-top" src={this.state.imagePath} alt="Card image cap" onClick={this.toggleVsibility}/>
              <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.question}</p>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="container">
            <div className="card">
            <img className="card-img-top" src={this.state.imagePath} alt="Card image cap" onClick={this.toggleVsibility}/>
              <div className="card-body">
                <p className="card-text">{this.state.hint}</p>
              </div>
            </div>
          </div>

        )
      }
    }
  
}


export default App;

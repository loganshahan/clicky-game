import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.cards.map(cards => (
            <Card
              imageClick={this.imageClick}
              id={cards.id}
              key={cards.id}
              image={cards.image}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;

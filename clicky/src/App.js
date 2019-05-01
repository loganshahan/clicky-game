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
    highscore: 0,
    clicked: [],


  };

  imageClick = (id) => {
    if(!this.state.clicked.includes(id)) {
        this.scoreIncrease();
        this.state.clicked.push(id);
    } else {
        this.resetGame();
    }
};
scoreIncrease = () => {
  var currentScore = this.state.score + 1;
  if(currentScore === this.state.cards.length) {
      this.setState({
          
          score: 0,
          clicked: [],
      })
  } else if(currentScore > this.state.highscore) {
      this.setState({
          highscore: currentScore,
          score: currentScore,
          
      })
  } else {
      this.setState({
          score: currentScore,
          
      })
  }
  this.resetArray();
};
resetArray = () => {
  this.setState({
      cards: this.shuffle(this.props.Images)
  })
};
resetGame = () => {
  this.setState({
      score: 0,
      highscore: this.state.highscore,
      clicked: [],
      
  })
  this.resetArray();
};
shuffle = () => {
  var counter = cards.length;
  while (counter > 0) {
      
      var index = Math.floor(Math.random() * counter);
      
      counter--;
      
      var temp = cards[counter];
      cards[counter] = cards[index];
      cards[index] = temp;
  }
  return cards;
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
              clicked={this.imageClick}
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

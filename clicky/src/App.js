import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cards from "./cards.json";
import "./App.css";
// import {shuffle} from '../shuffle';

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
        // this.setState({
        //     gameOver: false
        // })
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
          // Images: this.props.Images,
          // gameOver: false
      })
  } else if(currentScore > this.state.highScore) {
      this.setState({
          highScore: currentScore,
          score: currentScore,
          // result: 'Correct, New High Score'
      })
  } else {
      this.setState({
          score: currentScore,
          // result: 'Correct!'
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
      highScore: this.state.highScore,
      // result: 'You Loss!',
      clicked: [],
      // Images: this.props.Images,
      // gameOver: true
  })
  this.resetArray();
};
shuffle = () => {
  var counter = cards.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      var index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
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

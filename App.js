// import React from 'react';
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import ButtonBoard from "./components/ButtonBoard";
import letters from "./letters.json"
import "./App.css";

let guessesLeft = 10;
let message = "";

class App extends Component {
  state = {
    letters,
    guessesLeft,
    message
  };

  set;

  render() {
    return (
      <Wrapper className="wrapper">
        <div className="jumbotron">
          <Header>Hang-Man React</Header>
          <ScoreBoard>Guesses Left: {this.state.guessesLeft} </ScoreBoard>
        </div>
        <div className="gameBoard">
          <GameBoard>GameBoard</GameBoard>
        </div>
        <div className="container">
          <div className="row">
            {this.state.letters.map(match => (
              <ButtonBoard
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;

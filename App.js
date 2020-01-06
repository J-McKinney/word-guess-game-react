import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import GuessedBoard from "./components/GuessedBoard";
import ButtonBoard1 from "./components/ButtonBoard1";
import ButtonBoard2 from "./components/ButtonBoard2";
import ButtonBoard3 from "./components/ButtonBoard3";
import ButtonBoard4 from "./components/ButtonBoard4";
import letters1 from "./letters1.json";
import letters2 from "./letters2.json";
import letters3 from "./letters3.json";
import letters4 from "./letters4.json";
import "./App.css";

let guessesLeft = 10;
let message = "";
let indexWord;
let lettersGuessed = [];
let secretWord = ["SECRETWORD"];
let buildingWord = [];
let startGame = false;
let endGame = false;
// let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  state = {
    letters1,
    letters2,
    letters3,
    letters4,
    guessesLeft,
    message,
    buildingWord
  };

  componentDidMount() {
    this.playGame();
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  playGame = () => {
    indexWord = Math.floor(Math.random() * secretWord.length);
    console.log(secretWord);
    buildingWord = [];
    for (var i = 0; i < secretWord[indexWord].length; i++) {
      buildingWord.push("_ ");
    }
    this.setState({ buildingWord });
    console.log(buildingWord);
  };

  userGuess = letter => {
    if (guessesLeft > 0) {
      if (!startGame) {
        startGame = true;
      }
      if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        this.check(letter);
      }
    }
  };

  check = letter => {
    var letterPos = [];
    for (var i = 0; i < secretWord[indexWord].length; i++) {
      if (secretWord[indexWord][i] === letter) {
        letterPos.push(i);
      }
    }
    if (letterPos.length <= 0) {
      guessesLeft--;
    } else {
      for (var j = 0; i < letterPos.length; j++) {
        buildingWord[letterPos[j]] = letter;
      }
    }
  };

  onKeyDown = event => {
    console.log(event.key.toUpperCase());
    if (endGame) {
      this.playGame();
      endGame = false;
    } else {
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        this.userGuess(event.key.toUpperCase());
      }
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <Wrapper className="wrapper">
        <div className="jumbotron">
          <Header className="header">Hang-Man React</Header>
          <ScoreBoard>Guesses Left: {this.state.guessesLeft} </ScoreBoard>
          <GuessedBoard>
            Letters guessed: {this.state.lettersGuessed}{" "}
          </GuessedBoard>
        </div>

        <div className="gameBoard">
          <GameBoard>{this.state.buildingWord}</GameBoard>
        </div>

        <div className="container">
          <div className="row">
            {this.state.letters1.map(match => (
              <ButtonBoard1
                setClicked={this.setClicked}
                id={match.id}
                letterKey={match.id}
                image={match.image}
              />
            ))}
          </div>

          <div className="row">
            {this.state.letters2.map(match => (
              <ButtonBoard2
                setClicked={this.setClicked}
                id={match.id}
                letterKey={match.id}
                image={match.image}
              />
            ))}
          </div>

          <div className="row">
            {this.state.letters3.map(match => (
              <ButtonBoard3
                setClicked={this.setClicked}
                id={match.id}
                letterKey={match.id}
                image={match.image}
              />
            ))}
          </div>

          <div className="row">
            {this.state.letters4.map(match => (
              <ButtonBoard4
                setClicked={this.setClicked}
                id={match.id}
                letterKey={match.id}
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

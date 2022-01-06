import React, { Component } from 'react';
import img from './Images/1200px-Rock-paper-scissors.svg.png';
import './App.css';
import TryAgain from './Components/TryAgain';
import GameResult from './Components/GameResult';
import PlayerVariant from './Components/PlayerVariant';

export default class App extends Component {
  state = {
    gameVariant: ['rock', 'paper', 'scissors'],
    currentVariant: '',
    computerVariant: '',
    gameEnded: false,
    gameResult: '',
    score: 0,
  };

  currentVariantHandler = (variant) => {
    this.setState({
      currentVariant: variant,
    });
    let item = this.state.gameVariant[Math.round(Math.random() * 2)];
    this.setState({
      computerVariant: item,
    });
    this.setState({
      gameEnded: true,
    });
    if (variant === item) {
      console.log('DRAW', variant, '+', item);

      this.setState({
        gameResult: 'Draw',
      });
    } else if (
      (variant === 'rock' && item === 'scissors') ||
      (variant === 'paper' && item === 'rock') ||
      (variant === 'scissors' && item === 'paper')
    ) {
      console.log('WIN', variant, '+', item);
      this.setState({
        gameResult: 'Win',
      });
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      console.log('LOSE', variant, '+', item);

      this.setState({
        gameResult: 'Lose',
      });
      this.setState({
        score: this.state.score - 1,
      });
    }
  };
  gameEndedHandler = () => {
    this.setState({
      gameEnded: false,
    });
    this.setState({
      gameResult: '',
    });
    this.setState({
      currentVariant: '',
    });
    this.setState({
      computerVariant: '',
    });
  };
  render() {
    console.log(this.state.currentVariant, 'current Variant');
    console.log(this.state.computerVariant, 'computer Variant');
    console.log(this.state.gameResult, 'Game Result');
    return (
      <div className="App">
        <div className="app-container">
          <div className="score-panel">
            <img src={img} alt="" />
            <div className="score">Score: {this.state.score}</div>
          </div>
          <h2 className="game-title">rock paper scissors</h2>
          <div className="game-container">
            {!this.state.gameEnded ? (
              <div>
                <PlayerVariant
                  gameVariant={this.state.gameVariant}
                  currentVariantHandler={this.currentVariantHandler}
                />
              </div>
            ) : null}
          </div>

          {this.state.gameEnded ? (
            <div>
              <div></div>
              <GameResult
                gameResult={this.state.gameResult}
                currentVariant={this.state.currentVariant}
                computerVariant={this.state.computerVariant}
              />
              <TryAgain gameEnded={this.gameEndedHandler} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

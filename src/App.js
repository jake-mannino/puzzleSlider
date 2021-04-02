import React, { Component } from 'react';
import './App.css';
import Tile from './Tile.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        { number: 0 },
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },
        { number: 11 },
        { number: 12 },
        { number: 13 },
        { number: 14 },
        { number: 15 }
      ]
    }
  }
  render() {
    return (
      <>
        <div className='container'>
          <h1>Puzzle</h1>
          <div className='row'>
            {this.state.board.map((item, index) => <Tile key={index} tile={item} index={index}></Tile>)}
          </div>
        </div>
      </>
    );
  }
}
export default App;

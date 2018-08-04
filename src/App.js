import React, {Component} from 'react';
import cards from './cards';

/**
 * class App
 * Main Component of the Flashcards Application
 */
class App extends Component {
  /**
   * constructor function for the main App Component
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      side: 'front',
      card: cards[Math.floor(Math.random()*cards.length)],
    };
    this.flipCard = this.flipCard.bind(this);
    this.getNewCard = this.getNewCard.bind(this);
  }

  /**
   * method to flip card
   */
  flipCard() {
    const side = (this.state.side === 'front') ? 'back' : 'front';
    this.setState({side: side});
  }

  /**
   * method to get a new card
   */
  getNewCard() {
    this.setState({
      side: 'front',
      card: cards[Math.floor(Math.random()*cards.length)],
    });
  }

  /**
   * @method render
   * @return {JSX}
   */
  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand"><h1>Coding Flashcards</h1></div>
          </div>
        </header>
        <div className="container my-5">
          <div className="row">
            <div className="">
              <div className="card txt-secondary p-3">
                <h2 className="card-title">Client Or Server - Identify the Code: Langauge, Library, Result</h2>
                <div className="card-body">
                  <pre>
                    {this.state.card[this.state.side]()}
                  </pre>
                  <button className="btn btn-large btn-danger" onClick={this.flipCard}>Flip the card</button>
                </div>
              </div>
              <button className="btn btn-large btn-primary mt-5" onClick={this.getNewCard}>
                Get a New Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

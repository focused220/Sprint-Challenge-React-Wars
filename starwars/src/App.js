import React, { Component } from 'react';
import './App.css';
import Character from './components/Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, });
        console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <a href="../public/next.html"><button>Next Page</button></a>
        <section className="content">
          <div className="characters">
            {this.state.starwarsChars.map(character =>(<Character character={character}/>))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;

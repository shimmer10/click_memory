import React from 'react';
import CharacterCard from "./components/Character";
import Wrapper from "./components/Wrapper";
import characters from "./character.json"
import './App.css';

class App extends React.Component {
  state = {
    characters,
    message: "",
    chosenCharacters: [],
    score: 0,
    highScore: 0,
    winningScore: 12
  }

  shuffle = id => {
    console.log("in here")
    // set initial, changable state
    let chosenCharacters = this.state.chosenCharacters;

    // set the score to number of chosen characters
    this.setState({ score: chosenCharacters.length, highScore: chosenCharacters.length, characters, message: "" })

    // shuffle image cards
    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

  }

  render() {
    return (
      <Wrapper>
        <h1>What We Do In the Shadows Memory Game</h1>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            image={character.image}
            key={character.id}
            shuffle={this.shuffle}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

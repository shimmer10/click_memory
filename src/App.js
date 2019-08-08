import React from 'react';
import CharacterCard from "./components/Character";
import Wrapper from "./components/Wrapper";
import characters from "./character.json"
import './App.css';

class App extends React.Component {
  state = {
    characters
  }


  render() {
    return (
      <Wrapper>
        <h1>What We Do In the Shadows Memory Game</h1>
        {this.state.characters.map(character => (
          <CharacterCard
          image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

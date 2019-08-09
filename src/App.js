import React from 'react';
import CharacterCard from './components/Character';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import characters from './character.json';
import './App.css';
import Score from './components/Score';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';


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
    // set initial, changable state
    let chosenCharacters = this.state.chosenCharacters;

    // end game as lost if character has already been chosen
    if (chosenCharacters.includes(id)) {
      this.setState({ chosenCharacters: [], score: 0, message: "You chose a character twice! Click to start a new game!" })
      return;
    }
    else {
      // add character to array of chosen characters
      chosenCharacters.push(id);

      // end game as won if they got all 12
      if (chosenCharacters.length === 12) {
        this.setState({ highScore: chosenCharacters.length, chosenCharacters: [], message: "Congratulation, you won! Please play again!" })
        return;
      }


      // set the score to number of chosen characters
      this.setState({ score: chosenCharacters.length, highScore: chosenCharacters.length, characters, message: "" })

      // shuffle image cards
      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }

  render() {
    return (
      <div >
        <Container>
          <Jumbotron fluid>
            <Container>
              <h1>What We Do In the Shadows Memory Game</h1>
              <p>
                Can you pick all twelve without any repeats?
                </p>
            </Container>
          </Jumbotron>
          <Score
            currentScore={this.state.score}
            highScore={this.state.highScore}
            goal={12}
            message={this.state.message}
          />
          <Wrapper>
            <Row>

              {this.state.characters.map(character => (
                <Col xs={6} md={4}>
                  <CharacterCard
                    id={character.id}
                    image={character.image}
                    key={character.id}
                    shuffle={this.shuffle}
                  />
                </Col>
              ))}
            </Row>
          </Wrapper>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Provider } from './Context'
import Header  from "./Header";
import PlayerList  from "./PlayerList";
import AddPlayerForm  from "./AddPlayerForm";


class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };
  prevId = 4;
  getHighscore = () => {
    return Math.max.apply(Math, this.state.players.map(player => player.score)) || null;
  //  console.log(highScore);
  }
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  handleScoreChange = (delta, id) => {
    //prevState will apply the function to the existing state object

    this.setState( prevState => ({
      score: prevState.players.filter(player => player.id === id)[0].score += delta
    }));
    console.log(this.state.players.filter(player => player.id === id), id)
    // console.log(delta, " ", index);
  }
  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
          name,
          score: 0,
          id: this.prevId += 1
          }
        ]
      }
    })
  }


  render() {
    const highscore = this.getHighscore();
    return (
      <Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        <div className="scoreboard">
          <Header
            title="Scoreboard"
          />

          {/* Players list */}
          <PlayerList
            highscore={highscore}
          />
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;

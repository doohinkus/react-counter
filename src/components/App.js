import React from 'react';
import { Consumer } from "./Context";
import Header  from "./Header";
import PlayerList  from "./PlayerList";
import AddPlayerForm  from "./AddPlayerForm";


const App = () => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
      />
      {/* Players list */}
      <Consumer>
        { context => {
          // console.log("highscore: ", context.highscore);
          // const hscore = context.getHighscore;
          return (
            <PlayerList />
          )
        }}
      </Consumer>
      <AddPlayerForm />
    </div>
  );
}

export default App;

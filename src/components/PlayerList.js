import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = props => {
  return (
    <Consumer>
      {
        // destructure context
        // context => {
        ({ players, actions })=> {
          const highscore = actions.getHighscore();
          // console.log(highscore)
          return (
            <React.Fragment>
              {
                players.map((player, index) => {
                  return (
                    <Player
                      id={player.id}
                      key={player.id}
                      removePlayer={props.removePlayer}
                      score={player.score}
                      isHighscore={highscore === player.score}
                    />
                  )
                })
              }
            </React.Fragment>
          )

        }}
    </Consumer>
  )
}

export default PlayerList;

import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = props => {
  return (
    <Consumer>
      {
        context => {
          const highscore = context.actions.getHighscore();
          console.log(highscore)
          return (
            <React.Fragment>
              {
                context.players.map((player, index) => {
                  return (
                    <Player
                      name={player.name}
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

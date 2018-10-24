import React from "react";
import { Consumer } from "./Context";

const Counter = ({id}) => {
  return (
    <Consumer>
      { ({ actions, players }) => {
        return (
          <div className="counter">
            <button className="counter-action decrement" onClick={() => actions.changeScore(-1, id)}> - </button>
            <span className="counter-score">{ players.filter(p => p.id === id)[0].score }</span>
            <button className="counter-action increment" onClick={() => actions.changeScore(1, id)}> + </button>
          </div>
        )
      }}
    </Consumer>
  );
}

// https://reactjs.org/docs/typechecking-with-proptypes.html

export default Counter;

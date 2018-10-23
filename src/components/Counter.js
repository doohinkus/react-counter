import React from "react";
import { Consumer } from "./Context";

const Counter = ({score, id}) => {
  return (
    <Consumer>
      { context => {
        return (
          <div className="counter">
            <button className="counter-action decrement" onClick={() => context.actions.changeScore(-1, id)}> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={() => context.actions.changeScore(1, id)}> + </button>
          </div>
        )
      }}
    </Consumer>
  );
}

// https://reactjs.org/docs/typechecking-with-proptypes.html

export default Counter;

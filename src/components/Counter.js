import React from "react";
import PropTypes from "prop-types";

const Counter = ({score, changeScore, id}) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(-1, id)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(1, id)}> + </button>
    </div>
  );
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
Counter.propTypes = {
  score: PropTypes.number,
  changeScore:PropTypes.func,
  id:PropTypes.number
}

export default Counter;

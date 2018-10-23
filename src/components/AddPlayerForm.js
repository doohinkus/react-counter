import React, { Component } from "react";
import { Consumer } from './Context';

const AddPlayerForm = ({ addPlayer}) => {
  //creates a ref. input is stored in playerInput.current object
  // use refs, they are much cleaner for forms

  let playerInput = React.createRef();
  return (
    <Consumer>
      { context => {
        const handleSubmit = e => {
          e.preventDefault();
          context.actions.addPlayer(playerInput.current.value);
          e.currentTarget.reset();

        }
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={playerInput}
              placeholder="Enter player name"
            />
            <input
              type="submit"
              value="Add Player"
            />
          </form>
        )
      }}
    </Consumer>
  )
}

export default AddPlayerForm

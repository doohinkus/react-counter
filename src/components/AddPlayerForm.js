import React, { Component } from "react";

const AddPlayerForm = ({ addPlayer}) => {
  //creates a ref. input is stored in playerInput.current object
  // use refs, they are much cleaner for forms
  let playerInput = React.createRef();
  let handleSubmit = e => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
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
}

export default AddPlayerForm

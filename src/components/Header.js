import React from 'react';
import PropTypes from "prop-types";
import Stats from './Stats';
import StopWatch  from "./StopWatch";
// const Header = (props) => {
//{} destructures props -> props.player, props.title
const Header = ({players, title}) => {
  return (
    <header>
      <Stats
        players={ players }
      />
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}
Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}
export default Header;

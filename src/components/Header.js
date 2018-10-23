import React from 'react';
import Stats from './Stats';
import StopWatch  from "./StopWatch";

//{} destructures props -> props.player, props.title
const Header = ({title}) => {
  return (
    <header>
      <Stats />
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}

export default Header;

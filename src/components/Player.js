import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import { Consumer } from './Context';
//PureComponent only renders component when its props change!!!!!
class Player extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    isHighscore: PropTypes.bool,
  }

  render (){
    //destructure
    const { id, isHighscore} = this.props;
    return (
      <div className="player">
        <Consumer>
          { ({ actions, players }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(players.filter(p => p.id === id)[0].id)}>✖</button>
              <Icon isHighscore = {isHighscore}/>
              <span className={isHighscore ? 'show' : 'hide'}>*</span>
              { players.filter(p => p.id === id)[0].name }
            </span>
          )}
        </Consumer>

        <Counter
          id={id}
        />
        </div>
      );
  }
}

export default Player;

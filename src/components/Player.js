import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import { Consumer } from './Context';
//PureComponent only renders component when its props change!!!!!
class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    score:  PropTypes.number,
    id: PropTypes.number,
    isHighscore: PropTypes.bool,
  }

  render (){
    //destructure
    const { name, score, id, isHighscore} = this.props;
    return (
      <div className="player">
        <Consumer>
          { context => (
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              <Icon isHighscore = {isHighscore}/>
              <span className={isHighscore ? 'show' : 'hide'}>*</span>
              { name }
            </span>
          )}
        </Consumer>

        <Counter
          id={id}
          score={score} />
        </div>
      );
  }
}

export default Player;

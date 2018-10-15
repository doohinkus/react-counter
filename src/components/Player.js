import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
//PureComponent only renders component when its props change!!!!!
class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    name: PropTypes.string,
    score:  PropTypes.number,
    removePlayer:  PropTypes.func,
    changeScore:  PropTypes.func,
    id: PropTypes.number,
    isHighscore: PropTypes.bool,
  }

  render (){
    //destructure
    const { name, score, removePlayer, changeScore, id, isHighscore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighscore = {isHighscore}/>
          <span className={isHighscore ? 'show' : 'hide'}>*</span>
          { name }
        </span>

        <Counter
          changeScore={changeScore}
          id={id}
          score={score} />
        </div>
      );
  }
}

export default Player;

import React from 'react';

const Icon = (props) => {
  return (
    <svg className={ props.isHighScore ? 'is-high-score' : null }>
       high score
    </svg>
  )
};

export default Icon;

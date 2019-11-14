import React, { Component } from 'react';
import styles from './Die.module.css';

class Die extends Component {
  render() {
    const rollingClass = `${this.props.rolling && styles.shaking}`;
    const diceClass = `${styles.die} ${rollingClass} fas fa-dice-${this.props.face}`;

    return (
      <i
        className={diceClass}>
      </i>
    );
  }
}

export default Die;
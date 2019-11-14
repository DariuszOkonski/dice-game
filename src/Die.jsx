import React, { Component } from 'react';
import styles from './Die.module.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <i
        className={`${styles.die} fas fa-dice-${this.props.face}`}>
      </i>
    );
  }
}

export default Die;
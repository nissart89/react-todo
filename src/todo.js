import React, { Component } from 'react';
import Delete from './img/close.svg'

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      index: this.props.index,
    }
  }

  render() {
    return (
      <li>{this.props.value} - <img onClick={() => this.props.handleClick(this.state.index)} src={Delete} width="20" height="20"className="delete" alt="Delete" /></li>
    )
  }
}

export default ToDo

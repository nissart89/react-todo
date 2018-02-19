import React, { Component } from 'react';
import Delete from './img/delete.svg'
import Checked from './img/checked.svg'
import Undo from './img/undo2.svg'

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      index: this.props.index,
      done: this.props.done ? true : false,
    }
  }

  render() {
    return (
      <li><span>{this.props.value}</span> {this.state.done ? <img onClick={() => this.props.handleClick(this.state.index, this.state.done)} src={Undo} width="20" height="20" className="delete" alt="Delete" />
        : <img onClick={() => this.props.handleClick(this.state.index, this.state.done)} src={Checked} width="20" height="20" className="delete" alt="Delete" />}
      </li>
    )
  }
}

export default ToDo

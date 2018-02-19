import React, { Component } from 'react';
import ToDo from './todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toDos: ['todo 1', 'todo 2'],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState((prevState) => ({toDos: [...prevState.toDos, this.state.value]}));
      this.setState((prevState) => ({value: ''}));
    }
  }

  handleClick(value) {
    this.setState(prevState => ({ toDos: prevState.toDos.filter((todo,index) => index !== value) }));
  }


  render() {
    const toDos = this.state.toDos.map((todo, index) => <ToDo value={todo} key={index} index={index} handleClick={this.handleClick}/>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React To-Do</h1>
        </header>
        <input type="text" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
        <br/>
        <ul>
          {toDos}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ToDo from './todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      value: '',
      toDos: [],
      done: [],
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
      if (this.state.init) {
        this.setState((prevState) => ({init: false}));
      }
    }
  }

  handleClick(value, done) {
    if (done) {
      this.setState(prevState => ({ done: prevState.done.filter((todo,index) => index !== value) }));
      this.setState(prevState => ({ toDos: [...prevState.toDos, this.state.done[value]]}));
    } else {
      this.setState(prevState => ({ toDos: prevState.toDos.filter((todo,index) => index !== value) }));
      this.setState(prevState => ({ done: [...prevState.done, this.state.toDos[value]]}));
    }
  }


  render() {
    const toDos = this.state.toDos.map((todo, index) => <ToDo value={todo} key={index} index={index} handleClick={this.handleClick}/>);
    const doneList = this.state.done.map((doneList, index) => <ToDo done value={doneList} key={index} index={index} handleClick={this.handleClick}/>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React To-Do</h1>
        </header>
        <input type="text" placeholder="What do you have to do?" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
        <div className="to-do-container">
          <ul className="to-do-list">
            {this.state.toDos.length === 0 && this.state.init && <div className="init">Wanna get some stuff done?</div>}
            {this.state.toDos.length === 0 && !this.state.init ? <div className="all-done">All done! Good job you!</div> : toDos}
          </ul>
          {/* <div className="counter">{this.state.toDos.length > 0 && this.state.toDos.length}</div> */}
        </div>

        <div className="to-do-container">
          <ul className="to-do-list done">
            {doneList}
          </ul>
          {/* <div className="counter">{this.state.done.length > 0 && this.state.done.length}</div> */}
        </div>
      </div>
    );
  }
}

export default App;

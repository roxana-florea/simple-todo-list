import React, { Component } from "react";
import "./App.css";
import Item from "./components/Item";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      list: []
    };
  }

  displayList = () => {
    let list = this.state.list;
    return (
      <ul>
        {list.map((item, i) => (
          <Item todo={item} key={i} />
        ))}
      </ul>
    );
  };

  addText = (event) => {
    this.setState({ text: event.target.value });
  };

  addToList = () => {
    let todoList = this.state.list;
    let todo = this.state.text;
    todoList.push(todo);
    this.setState({ list: todoList });
    this.setState({ text: "" });
  };

  done = () => {
    this.setState({ isDone: !this.state.isDone });
  };

  clearList = () => {
    this.setState({ list: [] });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div className="container">
          <div className="input">
            <label htmlFor="todo">Add TODO : </label>
            <input
              name="todo"
              value={this.state.text}
              onChange={this.addText}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  this.addToList();
                  ev.preventDefault();
                }
              }}
            />
          </div>

          <div className="btn">
            <button onClick={this.addToList}>Add Todo</button>
            <button onClick={this.clearList}>Clear</button>
          </div>
        </div>

        <div className="todoList">{this.displayList()}</div>
      </div>
    );
  }
}

export default App;

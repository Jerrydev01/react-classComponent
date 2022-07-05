import React, { Component } from 'react';
import './style.css';

class App extends Component {
  state = {
    count: 0,
    list: ['ONE', 'TWO', 'THREE'],
  };
  handleClick = () => {
    console.log('click me', this.state.count);
  };
  render() {
    return (
      <div>
        <h1 className="text-3xl">Hello StackBlitz! {this.state.count}</h1>
        <p>Start editing to see some magic happen :)</p>
        {this.state.list.length === 0 && 'list items are empty'}
        {this.state.list.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button onClick={this.handleClick}>Click me</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

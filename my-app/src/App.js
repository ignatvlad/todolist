import React, { Component } from 'react';
import './myApp.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
    	
          <div className="header">
      		<div className="myApp">
        		<form className="App" onSubmit={this.onSubmit}>
          		<input value={this.state.term} onChange={this.onChange} />
          		<button type="submit">Submit</button>
        		</form>
        		<ul className="theList">
        		<List items={this.state.items} />
				</ul>
      		</div>
      	  </div>
		



    );
  }
}

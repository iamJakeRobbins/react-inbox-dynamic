import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar';
// import Message from './Components/Message'
import MessageList from './Components/MessageList';


class App extends Component {
	constructor(props){
		super(props)
		this.setState= {
			data: []
		}
	}
	async componentDidMount() {
    const response = await fetch('https://floating-refuge-12080.herokuapp.com/api/messages')
    const json = await response.json()
    this.setState({data: json._embedded.messages})
  }
  render() {

    return (
      <div>
			<Toolbar />
			<MessageList />
      </div>
    );
  }
}

export default App;

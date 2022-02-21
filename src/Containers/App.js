import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

/* Need to change app as class, when we
use state. State is used for connecting
both cardList and SearchBox which are in same
Component */

class App extends Component
{
	constructor()
	{
		super();
		this.state = {
			robots : [],
			searchfield : '',
		}
	}

	componentDidMount() 
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>{this.setState({robots : users})});
	}

	onSearchChange = (event) =>
	// When we creating our own func, need to use arrow function
	{
		this.setState({ searchfield : event.target.value });
		//setState is inbuit meth to set value and 
		//event.target.value is to get the value entered in that target (Searchbox) 
	}

	/* onSearchChange is used as EventListener */

	render()
	{
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			//To filter the cards for search option
		})
		// We also use if (robots.length === 0) 
		if (!robots.length) 
		{
			return <h1 className='tc'>Loading</h1>
		}
		else
		{
			return(
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			);
		}
	}
}

export default App;
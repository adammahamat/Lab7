import React from 'react';

import Info from './Info';
import Male from './Male';
import Reg from './Reg';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			lastName: "",
			male: "",
		}
	}
	
	onNameChange(name) {
		this.setState({
			name: name
		});
	}
	
	onLastNameChange(lastName) {
		this.setState({
			lastName: lastName
		});
	}
	
	onMaleChange(male) {
		this.setState({
			male: male
		});
	}
	
	getState() {
		return this.state;
	}
	
	render() {
		return (
			<div>
				<Info onNameChange={this.onNameChange.bind(this)} onLastNameChange={this.onLastNameChange.bind(this)}/>
				<Male onMaleChange={this.onMaleChange.bind(this)}/>
				<Reg getState={this.getState.bind(this)}/>
			</div>
		);
	}
}

export default App;
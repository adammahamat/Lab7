import React from 'react';

import Button from './Button';

class Reg extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: null
		};
	}
	
	click() {
		var state = this.props.getState();
		
		if (state.name.length === 0)
			alert("Enter your name!");
		else if(state.lastName.length === 0)
			alert("Enter your last name!");
		else if(state.male.length === 0)
			alert("Enter your male!");
		else
			alert("Hello, " + state.name + " " + state.lastName + " (" + state.male + ")");
	}

	render() {
		return (
			<div>
				<Button text="Reg" click={this.click.bind(this)}/>
			</div>
		);
	}
}

export default Reg;
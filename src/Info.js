import React from 'react';

import Input from './Input';

class Info extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: null
		};
	}

	render() {
		return (
			<div>
				<Input text="Name:" onChange={this.props.onNameChange}/>
				<Input text="Last name:" onChange={this.props.onLastNameChange}/>
			</div>
		);
	}
}

export default Info;
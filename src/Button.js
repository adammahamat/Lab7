import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: null
		};
	}
	
	render() {
		return (
			<div>
				<button onClick={() => this.props.click()}>{this.props.text}</button>
			</div>
		);
	}
}

export default Button;
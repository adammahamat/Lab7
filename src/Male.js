import React from 'react';

import Radio from './Radio';

class Male extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: null
		};
	}

	render() {
		return (
			<div>
				<Radio name="male" text="Man" onChange={this.props.onMaleChange}/>
				<Radio name="male" text="Woman" onChange={this.props.onMaleChange}/>
			</div>
		);
	}
}

export default Male;
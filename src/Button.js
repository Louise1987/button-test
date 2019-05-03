import React from 'react';

class Button extends React.Component {

	constructor() {
		super();
		this.state= {title: 'Click text'}		
	}

	render() {
		return (
			<div>
				<button onClick= {() => this.setState({title:'New text'})}>{this.state.title}</button>
			</div>
		)
	}
};

export default Button;




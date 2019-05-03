import React, { Component } from 'react';

class Button extends Component {

	state = {
		text: ''
	}

	handleClick() {
		this.setState({
			text: 'Ny text'
		})
	}

	render() {
		return (
			<div>
				<button
					onClick={this.handleClick}
					style={{backgroundColor:this.state.text}}
				>Button</button>
			</div>
		)
	}
};


export default Button;




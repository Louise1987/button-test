import React from 'react';
import './App.css';

class Button extends React.Component {
constructor() {
		super();
		this.state= {title: 'Click button',
		red: true
		}		
	}

handleClick(){
	console.log('du klickade');
	this.setState({red: !this.state.red})
}
	

	render() {
		let color_class = this.state.red ? "redButton" : "whiteButton";
		return (
			<>
				<button className={color_class}  onClick= {() => this.setState({title:'New text'})}>{this.state.title}{this.handleClick.bind(this)}</button>
			</>
		)
	}
};



export default Button;




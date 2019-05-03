import React from 'react';
import './App.css';

class Button extends React.Component {
constructor() {
		super();
		this.state= {title: 'Click button',
		button: true
		}		
		this.handleText = this.handleText.bind(this);
		this.handleColor = this.handleColor.bind(this);
	}

handleText(){
this.setState({title: this.state.title})
}

handleColor(){
	this.setState({button: !this.state.button})
}
	

	render() {
		return (
			<>
				<button
				 handleText= {this.handleText} onClick= {() => this.setState({title:'New text'})} 
				 handleColor={this.handleColor ? "buttonTrue": "buttonFalse"} onClick={this.handleColor}>{this.state.title}
				 </button>
			
			</>
		)
	}
};



export default Button;




import React, { Component } from 'react';
import PostField from './postAction';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			post: []
		}	
	}	
	
	handleSubmit(e) {
		this.state.post.push(e);
		this.setState({
			post: this.state.post
		});
	}	
	
	handleListOutput(outputs) {
		return (<ul>
		{outputs.map(function(output) {
			return (
				<li>{output}</li>
			);
		})}
		</ul>);	
	}	
	
	render() {
		return (
			<div>
				<PostField 
					submit={this.handleSubmit}
				/>
				<p>Output here: {this.handleListOutput(this.state.post)}</p>
			</div>
		);
	}
};
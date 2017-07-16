import React from 'react';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to Layout</h1>
				{this.props.children}
			</div>
		);
	}
}








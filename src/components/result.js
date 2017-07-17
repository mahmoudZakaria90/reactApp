import React from 'react';

export default class Result extends React.Component {
	render() {
		return (
			<ul>
				{this.props.result.map((item, index) => {
					<li key={index}>
					<span className={item.name}>{item.name}</span>
					<span className={item.rank}>{item.rank}</span>
					<span className={item.available}>{item.available}</span>	
					</li>
				})}
			</ul>
		);
	}
}








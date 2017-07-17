import React from 'react';
import Result from './result';

export default class Form extends React.Component {
	constructor(){
		super();
		this.fetching = this.fetching.bind(this);
		this.state = {
			result: [],
			error: '',
			name: 'All'
		}
	}

	handleChangeName(e){
		const name = e.target.value === '' ? 'All' : e.target.value.toUpperCase();
		this.setState({name})
	}

	handleChangeRank(e){
		const int = parseInt(e.target.value);
		const rank = Number.isNaN(int) ? 'Rank Must be number' : e.target.value;
		this.setState({rank})
	}

	fetching(e){
		e.preventDefault();
		const { name, rank } = this.refs;
		const ajax = new XMLHttpRequest();
		ajax.onload = () => {
			const result = JSON.parse(ajax.response);
			this.setState(prevState => prevState.result.concat(result))
		};
		ajax.open('GET', 'http://localhost:4000/api/ninja', true);
		ajax.send()
	}
	render() {
		return (
			<div>
				<form onSubmit={this.fetching}>
					<p style={{color: "blue"}}>Search by: {this.state.name}</p>
					<input placeholder="Name" ref="name" onChange={this.handleChangeName.bind(this)} />
					<p style={{color: "red"}}>{this.state.rank}</p>
					<input placeholder="Rank" ref="rank" onChange={this.handleChangeRank.bind(this)} />
					<div class="center">
						<button type="submit">Fetch</button>
					</div>
				</form>
				<Result  result={this.state.result} error={this.state.error} />
			</div>
		);
	}
}









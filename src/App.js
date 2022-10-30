import React from 'react';

// React.Component 클래스를 상속받는다.
class App extends React.Component {

	state = {
		count: 0,
	};

	add = () => { 
		this.setState( current => ({
			count: current.count +1,
			}));
	};
	sub = () => {
		this.setState( current => ({
			count: current.count -1,
		}));
	};


	render() {
		return (
			<div>
				<h1> The number is: {this.state.count} </h1>
				<button onClick={this.add}> + </button>
				<button onClick={this.sub}> - </button>
			</div>
		);
	}
}

export default App;

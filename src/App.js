import React from 'react';

// React.Component 클래스를 상속받는다.
class App extends React.Component {

	// constructor() 클래스가 생성될 때 호출된다.
	constructor(props) {
		super(props);
		console.log('constructor');
	}

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


	/// Mount 생명주기 함수 3종
	// render(), componentDidMount(), constructor()
	// 실행순서
	//  constructor() -> renter() -> conponentDidMount()


	// componentDidMount() render()가 실행된 후 실행된다.
	componentDidMount() {
		console.log('component Did Mount');
	}

	// componentDidUpdate() component가 update되었을 때 실행된다.
	// Update 생명주기 함수
	// componentDidUpdate()
	// 실행순서
	// render() -> componentDidUpdate() 
	componentDidUpdate() {
		console.log('component Did Update');
	}

	componentWillUnmount() {
		console.log('component Will Unmount');
	}

	// render() 화면을 그릴 때 실행된다.
	render() {
	console.log('render');
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

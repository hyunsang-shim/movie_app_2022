import React from 'react';

// React.Component Ŭ������ ��ӹ޴´�.
class App extends React.Component {

	// constructor() Ŭ������ ������ �� ȣ��ȴ�.
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


	/// Mount �����ֱ� �Լ� 3��
	// render(), componentDidMount(), constructor()
	// �������
	//  constructor() -> renter() -> conponentDidMount()


	// componentDidMount() render()�� ����� �� ����ȴ�.
	componentDidMount() {
		console.log('component Did Mount');
	}

	// componentDidUpdate() component�� update�Ǿ��� �� ����ȴ�.
	// Update �����ֱ� �Լ�
	// componentDidUpdate()
	// �������
	// render() -> componentDidUpdate() 
	componentDidUpdate() {
		console.log('component Did Update');
	}

	componentWillUnmount() {
		console.log('component Will Unmount');
	}

	// render() ȭ���� �׸� �� ����ȴ�.
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

import React from 'react';

// React.Component Ŭ������ ��ӹ޴´�.
class App extends React.Component {
	
	state = {
		isLoading: true,
		movies: [],
	};


	componentDidMount() {
		// ���⿡�� ��ȭ ������ �ε� 
		setTimeout( () => {
			this.setState({isLoading: false});
		}, 6000);
	}


	render() {
		const { isLoading } = this.state;
		return (
			<div>{isLoading ? 'Loading...' : 'We are ready'}</div>
		);
	}
}

export default App;

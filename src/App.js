import React from 'react';

// React.Component 클래스를 상속받는다.
class App extends React.Component {
	
	state = {
		isLoading: true,
		movies: [],
	};


	componentDidMount() {
		// 여기에서 영화 데이터 로딩 
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

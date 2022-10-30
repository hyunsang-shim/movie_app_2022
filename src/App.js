import React from 'react';
import axios from 'axios';

// React.Component Ŭ������ ��ӹ޴´�.
class App extends React.Component {
	
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = async () => {
		const {
			data: {
				data: {movies},
			},
		} = await  axios.get('https://yts-proxy.now.sh/list_movies.json');
		// this.setState({movies});		// ES6 ������ ��ü Ű�� ������ ������ �̸��� ���ٸ� �ڵ带 ����� �� �ִ�.
										// setState({movies: movies});�� setState({movies}); �� �Ǵ� ��.
		this.setState({movies, isLoading: false});
	}

	componentDidMount() {
		// ���⿡�� ��ȭ ������ �ε� 
		this.getMovies();
		
	}


	render() {
		const { isLoading } = this.state;
		return (
			<div>{isLoading ? 'Loading...' : 'We are ready'}</div>
		);
	}
}

export default App;

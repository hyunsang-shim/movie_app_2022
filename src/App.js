import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// React.Component 클래스를 상속받는다.
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
		} = await  axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
		// this.setState({movies});		// ES6 에서는 객체 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다.
										// setState({movies: movies});가 setState({movies}); 가 되는 것.
		this.setState({movies, isLoading: false});
	}

	componentDidMount() {
		// 여기에서 영화 데이터 로딩 
		this.getMovies();
		
	}


	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className="container">
				{ isLoading ? (
						<div className="loader">
							<span className="loader__text">Loading...</span>
						</div>
					) : (
					<div className="movies">
						{movies.map( (movie) => 
								( 								
									<Movie 
									key={movie.id}
									id= {movie.id}
									year= {movie.year}
									title= {movie.title}
									summary={movie.summary}
									poster={movie.medium_cover_image}
									genres={movie.genres} />
								)
							)
						};
					</ div>
					)
				}
			</section>
			);
	}
}

export default App;

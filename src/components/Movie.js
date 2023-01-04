import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';


function Movie({title, year, summary, poster, genres }) {

// react-route-dom 버전이 v.6으로 올라가면서
// props을 전달할 수 없게 변했다.
// 따라서 location에 state를 추가해서 전달하는 쪽으로 변경.
// 받을 때는 useLocation을 통해서 state에 접근해서 사용하는 방법을 사용해야 한다.
	return (
		<div className="movie">
		<Link to='/movie-detail'
			state={ {fromNavigation:'true',  title, year } }>
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="movie__genres"> {genres.map( (genre, index) => (
					<li key={index} className="movie__genre">{genre} </li>
				))}
				</ul>
				<p className="movie__summary">{summary.slice(0,180)}...</p>
			</div>
			</Link>
		</div>
	);

}



Movie.propTypes = {
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	};

export default Movie;
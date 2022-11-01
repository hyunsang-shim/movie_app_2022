import React from 'react';
import { useLocation } from "react-router-dom";




function Detail( ) {

	const location = useLocation();
	console.log("state", location.state);
	console.log("title", location.state.title);
	console.log("year", location.state.year);

	return <span>Hello</span>;
}

export default Detail;
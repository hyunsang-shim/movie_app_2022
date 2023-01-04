import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function Detail(){
	const location = useLocation();
	const navigation = useNavigate();

	console.log("location: ", location);
	console.log("location.state: ", location.state);
	

	useEffect(() => {
		if (location.state === null)
	})
		if( location.state === null || location.state === undefined ) {
			console.log("Redirecting to home");	
			navigation('/');

			}
	
	

	return <span>Hello</span>;
}

export default Detail;
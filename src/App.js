import React from 'react';
import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';


function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/home" exact={true} element={<Home />} />
				<Route path="/about" exact={true} element={<About />} />
			</Routes>
		</HashRouter>
		);
}

export default App;
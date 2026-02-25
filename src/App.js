import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import HomePage from './pages/HomePage.js'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>

			</BrowserRouter>
		</>
	);
}

export default App;

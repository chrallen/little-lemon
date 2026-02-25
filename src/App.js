import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'
import MenuPage from './pages/MenuPage.js'
import ReservationPage from './pages/ReservationPage.js';
import OrderPage from './pages/OrderPage.js'
import LoginPage from './pages/LoginPage.js'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='AboutPage' element={<AboutPage />} />
					<Route path='MenuPage' element={<MenuPage />} />
					<Route path='ReservationPage' element={<ReservationPage />} />
					<Route path='OrderPage' element={<OrderPage />} />
					<Route path='LoginPage' element={<LoginPage />} />
				</Routes>

			</BrowserRouter>
		</>
	);
}

export default App;

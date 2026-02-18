import './Nav.css';
import Logo from '../../assets/images/little-lemon.svg';

function App() {
	return (
		<nav>
			<div className="container navigation">

				<img
					src={Logo}
					alt="Logo"
					className='nav-logo'
				/>

				<ul className="nav-links">
					<li><a className="text-link" href="/">About</a></li>
					<li><a className="text-link" href="/">Menu</a></li>
					<li><a className="text-link" href="/">Reservations</a></li>
					<li><a className="text-link" href="/">Order</a></li>
					<li><a className="primary-button" href="/">Login</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default App;
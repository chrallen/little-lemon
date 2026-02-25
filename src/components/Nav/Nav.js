import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';
import Logo from '../../assets/images/little-lemon.svg';
import MenuIcon from '../../assets/icons/menu.svg'

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect (() => {
		document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
	}, [menuOpen]);

	return (
		<nav>
			<div className="container navigation">

				<Link to="/">
					<img
						src={Logo}
						alt="Little Lemon Logo"
						className='nav-logo'
					/>
				</Link>

				<button
					className='menu-toggle'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'
				>
					<img src={MenuIcon} alt='Menu'/>
				</button>

				<ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
					<li><Link to="AboutPage" className="text-link">About</Link></li>
					<li><Link to="MenuPage" className="text-link">Menu</Link></li>
					<li><Link to="ReservationPage" className="text-link">Reservations</Link></li>
					<li><Link to="OrderPage" className="text-link">Order</Link></li>
					<li><Link to="LoginPage" className="primary-btn">Login</Link></li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
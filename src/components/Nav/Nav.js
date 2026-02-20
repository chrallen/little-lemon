import { useState, useEffect } from 'react';
import './Nav.css';
import Logo from '../../assets/images/little-lemon.svg';
import MenuIcon from '../../assets/icons/menu.svg'

function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect (() => {
		document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
	}, [menuOpen]);

	return (
		<nav>
			<div className="container navigation">

				<img
					src={Logo}
					alt="Logo"
					className='nav-logo'
				/>

				<button
					className='menu-toggle'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'
				>
					<img src={MenuIcon} alt='Menu'/>
				</button>

				<ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
					<li><a className="text-link" href="/">About</a></li>
					<li><a className="text-link" href="/">Menu</a></li>
					<li><a className="text-link" href="/">Reservations</a></li>
					<li><a className="text-link" href="/">Order</a></li>
					<li><a className="primary-btn" href="/">Login</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
import './Footer.css';
import Logo from '../../assets/images/little-lemon-secondary.svg';

function Footer() {
	return (
		<footer>
			<div className="container footer-nav">

				<img
					src={Logo}
					alt="Little Lemon logo"
					className='footer-logo'
				/>

				<div className='footer-content'>
					<div>
						<h3>Little Lemon Restaurant</h3>
						<address>
							<p>123 Main St</p>
							<p>Chicago, IL 60657</p>
							<div className="contact-info">
								<p><strong>P:</strong> (312) 555-1234</p>
								<p><strong>E:</strong> contact@littlelemon.com</p>
							</div>
						</address>
					</div>
					<div>
						<h3>Navigation</h3>
						<ul>
						<li><a href="/">About</a></li>
						<li><a href="/">Menu</a></li>
						<li><a href="/">Reservations</a></li>
						<li><a href="/">Order</a></li>
						<li><a href="/">Login</a></li>
						</ul>
					</div>
					<div>
						<h3>Social</h3>
						<ul>
						<li><a href="/">Facebook</a></li>
						<li><a href="/">Instagram</a></li>
						<li><a href="/">X</a></li>
						</ul>
					</div>
				</div>

			</div>
		</footer>
	);
}

export default Footer;

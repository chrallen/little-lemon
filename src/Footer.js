function App() {
  return (
    <footer>
        <div className="container footer-nav">
            <img src="/little-lemon-secondary.png" alt="Logo"/>
            <div className="footer-links">
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
                    <h3>Contact</h3>
                    <address className="contact-info">
                        <p>Little Lemon Restaurant</p>
                        <p>123 Main St</p>
                        <p>Chicago, IL 60657</p>
                        <p>Phone: (312) 555-1234</p>
                    </address>
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

export default App;
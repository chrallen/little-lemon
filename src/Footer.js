function App() {
  return (
    <footer className="Footer">
        <img src="/little-lemon-secondary.png" alt="Logo" width={100}/>
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
            <ul>
                <li>Little Lemon Restaurant</li>
                <li>123 Main St</li>
                <li>Chicago, IL 60657</li>
                <li>Phone: (312) 555-1234</li>
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
    </footer>
  );
}

export default App;
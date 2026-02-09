function App() {
  return (
    <nav>
        <div className="container navigation">            
            <img src="/little-lemon.svg" alt="Logo" />
            <ul className="nav-links">
                <li><a className="text-link" href="/">About</a></li>
                <li><a className="text-link" href="/">Menu</a></li>
                <li><a className="text-link" href="/">Reservations</a></li>
                <li><a className="text-link" href="/">Order</a></li>
                <li><a className="text-link" href="/">Login</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default App;
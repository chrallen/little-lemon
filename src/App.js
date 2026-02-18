import './App.css';
import Header from './Header.js'
import Footer from './components/Footer/Footer.js'
import Nav from './components/Nav/Nav.js'
import Main from './Main.js'

function App() {
	return (
		<>
			<Header className="App" />
			<Nav />
			<Main />
			<Footer />
		</>
	);
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Home/HomePage.js'
import AboutPage from './pages/About/AboutPage.js'
import MenuPage from './pages/Menu/MenuPage.js'
import ReservationPage from './pages/Reservations/ReservationPage.js';
import OrderPage from './pages/Order/OrderPage.js'
import LoginPage from './pages/Login/LoginPage.js'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />

        <main className="main-content">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/AboutPage' element={<AboutPage />} />
            <Route path='/MenuPage' element={<MenuPage />} />
            <Route path='/ReservationPage' element={<ReservationPage />} />
            <Route path='/OrderPage' element={<OrderPage />} />
            <Route path='/LoginPage' element={<LoginPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

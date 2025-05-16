import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/override.scss';
import './assets/app.scss';

import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar.js';

import Books from './pages/books/books';
import BooksDetails from './pages/bookdetails/bookdetails.js';
import Main from './pages/home/home';
import CheckoutPage from './pages/checkout/checkout.js';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books-details" element={<BooksDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

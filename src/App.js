import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/app.scss';
import Main from './pages/home/home';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
  );
}

export default App;

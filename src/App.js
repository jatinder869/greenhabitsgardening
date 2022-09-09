import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    <Contact/>
  </Router>
  );
}

export default App;

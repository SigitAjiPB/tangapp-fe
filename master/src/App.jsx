import './App.css'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
import Login from './pages/login'
import LandingPage from './pages/landingPage';
import { Component } from 'react';

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
  )
}

export default App

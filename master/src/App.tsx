import './App.css'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
import Login from './pages/login'
import LandingPage from './pages/landingPage';
import ScrollToTop from './components/scrollToTop';
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Gabuts from './pages/gabuts';

const App : React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();  // Pastikan AOS bekerja dengan benar setelah render
  }, []);
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='*' Component={LandingPage}/>
          <Route path='/login' Component={Login}/>
          {/* <Route path='/gabuts' Component={Gabuts}/> */}
        </Routes>
    </Router>
  )
  
}

export default App

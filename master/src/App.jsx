import './App.css'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
import Login from './pages/login'
import LandingPage from './pages/landingPage';
import ScrollToTop from './components/scrollToTop';
import Gabuts from './pages/gabuts';
// import Layout from './components/layout';

function App() {

  return (
    <Router>
        <ScrollToTop/>
          <Routes>
            <Route path='*' Component={LandingPage}/>
            <Route path='/login' Component={Login}/>
            <Route path='/gabuts' Component={Gabuts}/>
          </Routes>
    </Router>
  )
}

export default App

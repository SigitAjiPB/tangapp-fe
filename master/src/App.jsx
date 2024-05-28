import './App.css'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
import Login from './pages/login'
import LandingPage from './pages/landingPage';
import ScrollToTop from './components/scrollToTop';

function App() {

  return (
    <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='*' Component={LandingPage}/>
          <Route path='/login' Component={Login}/>
        </Routes>
    </Router>
  )
}

export default App

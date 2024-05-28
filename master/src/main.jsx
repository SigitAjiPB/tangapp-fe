import React , { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


let Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []); 
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Root />
    <App />
  </React.StrictMode>,
)

import React , { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Root from './components/root'

const container = document.getElementById('root')


document.addEventListener("DOMContentLoaded", function someFunction() {
  return ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Root />
      <App />
    </React.StrictMode>
  );
});
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </HelmetProvider>
)
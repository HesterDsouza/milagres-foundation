import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, HashRouter } from 'react-router-dom'

const isDev = import.meta.env.DEV;

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    {isDev ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    )}
  </HelmetProvider>
)
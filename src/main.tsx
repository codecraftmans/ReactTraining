import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HomePageComponent from './Pages/Home/Home.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <HomePageComponent/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GlobalStyle} from "./styles/GlobalStyle";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <GlobalStyle/>
  </StrictMode>,
)

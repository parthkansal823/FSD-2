import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import CounterProvider from "./components/CounterContextApi";

createRoot(document.getElementById('root')).render(
    <CounterProvider>
      <App />
    </CounterProvider>
)
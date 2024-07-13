import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from '../src/components/ui/sonner'
import { App } from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster position="bottom-center" />
  </React.StrictMode>,
)

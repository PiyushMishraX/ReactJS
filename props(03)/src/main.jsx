import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     <App />
//   // {/* </StrictMode>, two ups bcz of this */}
// )

createRoot(document.getElementById('root')).render(<App />)

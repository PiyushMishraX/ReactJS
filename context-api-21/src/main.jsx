import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(

    <App />
    
  // <ThemeContext>
  //   <App />
  // </ThemeContext>
)

// it is context wrapping 
// // but now the theme context will show instead of all
// it happens because of using <></> , self closign tags do not have more tags inside so they are not problem but tags inside <></> will not show 
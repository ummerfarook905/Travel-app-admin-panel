

import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
function App() {
  

  return (
    <>
     
      <Router>
      <AuthProvider>
      <AppRoutes/>
      </AuthProvider>
      </Router>

      
     
    </>
  )
}

export default App

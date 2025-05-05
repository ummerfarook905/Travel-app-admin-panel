

import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

function App() {
  

  return (
    <>
     
      <Router>
      <AuthProvider>
      <UserProvider>
      <AppRoutes/>
      </UserProvider>
      </AuthProvider>
      </Router>

      
     
    </>
  )
}

export default App

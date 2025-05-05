import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

import { UserProvider } from './context/UserContext';

import { AdventuresProvider } from './context/AdventuresContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <AdventuresProvider>
            <AppRoutes/>
          </AdventuresProvider>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
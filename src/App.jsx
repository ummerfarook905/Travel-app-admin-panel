// app.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';
// import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAuth } from './redux/authSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth()); 
  }, [dispatch]);

  return (
    <Router>
        <UserProvider>
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        </UserProvider>
    </Router>
  );
}

export default App;

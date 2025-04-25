import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const localUser = localStorage.getItem("user");
        const sessionUser = sessionStorage.getItem("user");
        
        const authenticatedUser = localUser ? JSON.parse(localUser) : 
                                sessionUser ? JSON.parse(sessionUser) : null;
        setUser(authenticatedUser);
      } catch (error) {
        console.error("Auth check error:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email, password, rememberMe) => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (password === 'error') {
        throw new Error("Invalid credentials");
      }

      const dummyUser = { email, role: "admin" };
      
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(dummyUser));
        sessionStorage.removeItem("user");
      } else {
        sessionStorage.setItem("user", JSON.stringify(dummyUser));
        localStorage.removeItem("user");
      }
      
      setUser(dummyUser);
      navigate("/dashboard");
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        getUserRole: () => user?.role || null,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
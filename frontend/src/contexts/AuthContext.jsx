import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { autorizationToken } from "../api/adminApi";

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();

  async function authenticateUser() {
    const tokenInStorage =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!tokenInStorage) {
      setCurrentUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
      return;
    }
    try {
      const user = await autorizationToken(tokenInStorage);

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setCurrentUser(null);
      setIsLoggedIn(false);
      nav("/");
    } finally {
      setIsLoading(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    nav("/login");
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        isLoggedIn,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthWrapper };

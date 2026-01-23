import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { autorizationToken } from "../api/adminApi";

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [currentTherapist, setCurrentTherapist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();

  async function authenticateTherapist() {
    const tokenInStorage =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!tokenInStorage) {
      setCurrentTherapist(null);
      setIsLoading(false);
      setIsLoggedIn(false);
      return;
    }
    try {
      const therapist = await autorizationToken(tokenInStorage);

      setCurrentTherapist(therapist);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setCurrentTherapist(null);
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
    authenticateTherapist();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentTherapist,
        setCurrentTherapist,
        isLoading,
        isLoggedIn,
        authenticateTherapist,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthWrapper };

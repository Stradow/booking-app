import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorizationToken } from "../api/adminApi";

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

    const cachedTherapist = JSON.parse(
      localStorage.getItem("currentTherapist"),
    );
    if (cachedTherapist) {
      setCurrentTherapist(cachedTherapist);
      setIsLoggedIn(true);
      setIsLoading(false);
      return;
    }

    try {
      const therapist = await authorizationToken(tokenInStorage);

      setCurrentTherapist(therapist);
      setIsLoggedIn(true);

      localStorage.setItem("currentTherapist", JSON.stringify(therapist));
    } catch (error) {
      console.log(error);
      setCurrentTherapist(null);
      setIsLoggedIn(false);
      localStorage.removeItem("authToken");
      localStorage.removeItem("currentTherapist");
      sessionStorage.removeItem("authToken");
    } finally {
      setIsLoading(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentTherapist");
    sessionStorage.removeItem("authToken");
    setCurrentTherapist(null);
    setIsLoggedIn(false);
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

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../api/adminApi";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const nav = useNavigate();
  const { authenticateTherapist } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (rememberMe) {
        localStorage.setItem("authToken", response.authToken);
      } else {
        sessionStorage.setItem("authToken", response.authToken);
      }

      await authenticateTherapist();
      nav("/admin");
    } catch (error) {
      setError(error.response?.data?.errorMessage || "Login failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/google`,
        { idToken: credential },
      );

      const { authToken } = response.data;

      if (rememberMe) {
        localStorage.setItem("authToken", authToken);
      } else {
        sessionStorage.setItem("authToken", authToken);
      }

      await authenticateTherapist();
      nav("/admin");
    } catch (error) {
      setError("Google login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[80vh] items-center justify-center px-6 bg-[#F4F1EC]">
        <div className="bg-[#FAFAF8] rounded-xl py-8 px-10 shadow-sm border border-[#E6E8E3] max-w-md w-full">
          <h2 className="mt-3 text-center text-3xl font-medium tracking-tight text-[#2F3A36]">
            Sign in to your account
          </h2>

          <div className="mt-8 w-full">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail address"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 accent-[#778873]"
                  />
                  <label className="text-[#2F3A36]">Remember me</label>
                </div>

                <Link
                  to="/forgot-password"
                  className="font-medium text-[#2F3A36] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button className="flex w-full justify-center bg-[#778873] text-white py-3 rounded-xl">
                SIGN IN
              </button>
            </form>

            {/* <div className="mt-3 flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setError("Google login failed")}
                theme="outline"
                size="large"
                width="360"
                text="continue_with"
                shape="pill"
              />
            </div> */}

            <p className="mt-8 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-[#2F3A36]">
                SIGN UP
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;

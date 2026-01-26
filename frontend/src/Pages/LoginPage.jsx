import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../api/adminApi";
import googlelogo from "../assets/images/google.svg";
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
      console.log(error);
      setError(error.response.data.errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-6 bg-[#F4F1EC] py-12">
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="E-mail address"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 accent-[#778873] border border-[#D8DCD6] bg-[#FAFAF8] text-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                  />
                  <label className="text-[#2F3A36]">Remember me</label>
                </div>

                <Link
                  to="/forgot-password"
                  className="font-medium text-[#2F3A36] hover:text-[#6B6F6C] hover:underline underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>
              {error && <p>{error}</p>}
              <div>
                <button className="flex w-full justify-center mt-6 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition">
                  SIGN IN
                </button>

                <button className="flex w-full items-center justify-center mt-3 bg-white border border-[#778873] hover:bg-[#f0f0f0] text-[#778873] font-medium py-3 px-6 rounded-xl transition gap-2">
                  <img src={googlelogo} alt="google logo" className="h-4 w-4" />
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm/6 text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#2F3A36] hover:text-[#6B6F6C] hover:underline underline-offset-4"
              >
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

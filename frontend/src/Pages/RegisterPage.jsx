import logo from "../assets/logo-green.png";
import googlelogo from "../assets/google.svg";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-6 bg-[#F4F1EC]">
        <div className="bg-[#FAFAF8] rounded-xl py-6 px-10 shadow-sm border border-[#E6E8E3] max-w-md w-full">
          {/* <img alt="Kalmio logo" src={logo} className="mx-auto h-12 w-auto" /> */}
          <h2 className="mt-3 text-center text-3xl font-medium tracking-tight text-[#2F3A36]">
            Sign Up
          </h2>

          <div className="mt-8 w-full">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                  Email address
                </label>
                <input
                  type="email"
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
                  placeholder="Password"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                />
              </div>

              <div>
                <button className="flex w-full justify-center mt-6 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition">
                  CREATE ACCOUNT
                </button>

                <button className="flex w-full items-center justify-center mt-3 bg-white border border-[#778873] hover:bg-[#f0f0f0] text-[#778873] font-medium py-3 px-6 rounded-xl transition gap-2">
                  <img src={googlelogo} alt="google logo" className="h-4 w-4" />
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm/6 text-gray-400">
              Alredy have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#2F3A36] hover:text-[#6B6F6C] hover:underline underline-offset-4"
              >
                SIGN IN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;

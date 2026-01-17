import logo from "../assets/logo-green.png";
import googlelogo from "../assets/google.svg";

function LoginPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-6 bg-[#F4F1EC]">
        <div className="bg-[#FAFAF8] rounded-xl py-10 px-8 shadow-sm border border-[#E6E8E3] max-w-sm w-full">
          {/* <img alt="Kalmio logo" src={logo} className="mx-auto h-12 w-auto" /> */}
          <h2 className="mt-3 text-center text-3xl font-medium tracking-tight text-[#2F3A36]">
            Sign in to your account
          </h2>

          <div className="mt-8 w-full">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    placeholder="E-mail address"
                    required
                    className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#2F3A36] mb-2">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                    focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 accent-[#778873] border border-[#D8DCD6] bg-[#FAFAF8] text-[#778873] focus:ring-2 focus:ring-[#778873]/30"
                  />
                  <label className="text-[#2F3A36]">Remember me</label>
                </div>

                <a
                  href="#"
                  className="font-medium text-[#2F3A36] hover:text-[#6B6F6C] hover:underline underline-offset-4"
                >
                  Forgot password?
                </a>
              </div>

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
              <a
                href="#"
                className="font-semibold text-[#2F3A36] hover:text-[#6B6F6C] hover:underline underline-offset-4"
              >
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;

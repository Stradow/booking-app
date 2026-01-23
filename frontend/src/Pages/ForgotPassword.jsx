import { useState } from "react";
import { requestPasswordReset } from "../api/adminApi";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await requestPasswordReset({ email });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 bg-[#F4F1EC]">
      <div className="bg-[#FAFAF8] rounded-xl py-8 px-10 shadow-sm border border-[#E6E8E3] max-w-md w-full">
        <h2 className="mt-3 text-center text-3xl font-medium tracking-tight text-[#2F3A36]">
          Forgot Password
        </h2>

        <div className="mt-8 w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="flex w-full justify-center mt-6 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send reset link"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;

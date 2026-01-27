import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import appLogo from "../../assets/images/Kalmio.png";

function Navbar() {
  const { isLoggedIn, currentTherapist, handleLogout } =
    useContext(AuthContext);
  return (
    <nav className=" bg-[#778873] min-h-[5vh] items-center px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={appLogo} alt="app-logo" />
        </Link>

        {/* <button>Language button for later</button> */}
        <div>
          <Link to="/booking">
            <button className="bg-white text-[#778873] px-6 py-2 rounded uppercase hover:bg-[#627360] hover:text-white font-semibold cursor-pointer mr-5">
              Book Service
            </button>
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/admin">
                <button className="bg-white text-[#778873] px-6 py-2 rounded uppercase hover:bg-[#627360] hover:text-white font-semibold cursor-pointer mr-5">
                  Dashboard
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-[#778873] px-6 py-2 rounded uppercase hover:bg-[#627360] hover:text-white font-semibold cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-white text-[#778873] px-6 py-2 rounded uppercase hover:bg-[#627360] hover:text-white font-semibold cursor-pointer">
                Therapist Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

import { Link } from "react-router-dom";
import appLogo from "../../assets/react.svg";

function Navbar() {
  return (
    <nav className="flex justify-between bg-[#778873] min-h-[5vh] items-center px-6">
      {
        <Link>
          <img src={appLogo} alt="app-logo" />
        </Link>
      }

      <Link to="/booking">
        {/* <button>Choose Language button for later</button> */}
        <button className="text-white font-medium uppercase">
          Book Service
        </button>
      </Link>
    </nav>
  );
}
export default Navbar;

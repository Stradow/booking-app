import { Link } from "react-router-dom";
import appLogo from "../../assets/kalmio.png";

function Navbar() {
  return (
    <nav className=" bg-[#778873] min-h-[5vh] items-center px-6 py-4">
      <div className="flex justify-between items-center">
        <Link>
          <img src={appLogo} alt="app-logo" className="" />
        </Link>

        {/* <button>Language button for later</button> */}
        <Link to="/booking">
          <button className="bg-white text-[#778873] px-6 py-2 rounded uppercase hover:bg-[#627360] hover:text-white font-semibold cursor-pointer mr-15">
            Book Service
          </button>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

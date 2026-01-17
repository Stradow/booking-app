import { Link } from "react-router";
import notFound from "../assets/not-found.png";

function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen items-center pt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-[#778873] text-4xl font-medium leading-none">
          Oops!
        </h1>
        <h1 className="font-['Cormorant'] font-bold text-[#778873] text-9xl leading-none -mt-6">
          404
        </h1>
        <h3 className="mt-2 text-[#2F3A36] text-center max-w-md">
          The page you are looking for <br />
          doesn’t seem to exist
        </h3>
      </div>

      <Link to="/">
        <button className="mt-8 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition cursor-pointer">
          GO BACK HOME
        </button>
      </Link>
      <img src={notFound} className="w-200" />
    </div>
  );
}
export default NotFoundPage;

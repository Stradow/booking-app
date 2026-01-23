import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.png";

function HeroSection() {
  return (
    <section
      className="bg-[#FAFAF8] py-20 "
      // style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="flex justify-around items-center container mx-auto px-6">
        <div className="">
          <h2 className="font-semibold text-4xl m-3">
            Book your moment of <br />
            relief.
          </h2>
          <p className="text-[#778873] text-xl m-3">
            Massage & body therapy, booked online in just a few clicks.
          </p>
          <Link to="/booking">
            <button className="m-3 bg-[#778873] p-8 py-4 text-white text-lg rounded-xl hover:bg-[#627360] cursor-pointer ">
              View & Book Service
            </button>
          </Link>
          {/* <Link to="/services">
            <button className="m-3 bg-[#] px-8 py-4 text-[#778873] text-lg rounded-xl border hover:bg-[#627360] cursor-pointer hover:text-white">
              View Services
            </button>
          </Link> */}
        </div>
        <div>
          <img src={heroImg} className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;

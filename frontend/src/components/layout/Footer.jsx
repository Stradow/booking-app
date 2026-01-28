import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#778873] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Kalmio Booking</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Professional massage and therapy services focused on your
              relaxation, recovery, and overall wellness.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <Link to="/booking" className="hover:underline">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Physiotherapy</li>
              <li>Deep Tissue Massage</li>
              <li>Rehabilitation</li>
              <li>Wellness Therapy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>📍 City, Country</li>
              <li>📞 +1 234 567 890</li>
              <li>✉️ info@therapybooking.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Therapy Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

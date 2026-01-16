import { Link } from "react-router-dom";
import hotStone from "../../assets/hotStoneMassage.png";
import Physiotherap from "../../assets/ManualTherapy.png";
import rehab from "../../assets/PostureCorrection.png";

function ServicesSection() {
  const services = [
    {
      image: hotStone,
      title: "Physiotherapy",
      duration: "60 min",
      price: "$80",
      description:
        "Professional physiotherapy treatment for pain relief and mobility improvement",
      features: [
        "Pain Relief",
        "Improved Mobility",
        "Expert Care",
        "Personalized Plan",
      ],
    },
    {
      image: Physiotherap,
      title: "Deep Tissue Massage",
      duration: "90 min",
      price: "$120",
      description:
        "Intensive massage targeting deep muscle layers for chronic tension relief",
      features: [
        "Tension Relief",
        "Muscle Recovery",
        "Stress Reduction",
        "Better Circulation",
      ],
    },
    {
      image: rehab,
      title: "Rehabilitation",
      duration: "45 min",
      price: "$95",
      description:
        "Comprehensive rehabilitation program for injury recovery and prevention",
      features: [
        "Injury Recovery",
        "Strength Building",
        "Flexibility",
        "Prevention Focus",
      ],
    },
  ];

  return (
    <section id="services" className="bg-[#F4F1EC] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose from our range of professional therapeutic services designed
            for your wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FAFAF8] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-[#778873]">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="bg-[#D8DCD6] text-[#778873] px-3 py-1 rounded-full text-sm font-semibold">
                    {service.duration}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#778873]">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="block w-full bg-[#778873] hover:bg-[#627360] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

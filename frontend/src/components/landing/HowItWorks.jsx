function HowItWorks() {
  return (
    <section className="bg-[#F6F2EB] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          How it Works
        </h2>

        <p className="text-gray-600 mb-12">
          Booking your appointment is simple and straightforward.
          <br />
          Follow these easy steps to get started
        </p>

        <div className="flex flex-wrap justify-center">
          {[
            {
              step: 1,
              title: "Browse Services",
              text: "Explore our range of therapeutic services and find the perfect treatment for your needs.",
            },
            {
              step: 2,
              title: "Choose Date & Time",
              text: "Select your preferred appointment date and time that fits your schedule.",
            },
            {
              step: 3,
              title: "Provide Details",
              text: "Fill in your information and any specific requirements or health notes.",
            },
            {
              step: 4,
              title: "Confirm & Pay",
              text: "Review your booking details and complete secure payment.",
            },
            {
              step: 5,
              title: "Receive Confirmation",
              text: "Get instant confirmation via e-mail with all appointment details.",
            },
            {
              step: 6,
              title: "Enjoy Your Session",
              text: "Visit us on your scheduled date and experience professional therapeutic care.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="w-full md:w-1/2 lg:w-1/3 px-6 mb-14 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#7C8B73] text-white flex items-center justify-center font-semibold mb-4">
                {item.step}
              </div>

              <h3 className="font-semibold mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 max-w-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

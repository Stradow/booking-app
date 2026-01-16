import BookNow from "../../assets/BookNow.png";

function WhyUsSection() {
  return (
    <>
      <section className="bg-[#F4F1EC] flex justify-around items-center h-96">
        <div className="flex-col">
          <h2 className="text-5xl">Why Book Online?</h2>
          <br />
          <p className="text-2xl">No Phone calls.</p>
          <p className="text-2xl">Real-time availability</p>
          <p className="text-2xl">Instant Confirmation</p>
          <p className="text-2xl">Book anytime, anywhere</p>
        </div>
        <div>
          <img src={BookNow} alt="book now image" />
        </div>
      </section>
    </>
  );
}
export default WhyUsSection;

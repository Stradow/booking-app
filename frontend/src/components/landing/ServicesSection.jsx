import hotStone from "../../assets/hotStoneMassage.png";
import Physiotherap from "../../assets/ManualTherapy.png";
import rehab from "../../assets/PostureCorrection.png";

function ServicesSection() {
  return (
    <>
      <section className="bg-[#F4F1EC] flex justify-around h-96 items-center">
        <div className="bg-[#FAFAF8] p-10">
          <img src={hotStone} alt="service picture" />
          <h2 className="text-2xl font-semibold">Physiotherapy: {}</h2>
          <p>✓No phone calls</p>
          <p>✓Real-time availability</p>
          <p>✓nstant confirmation</p>
          <p>✓Book anytime, anywhere</p>
          <button className="">Book Service</button>
        </div>
        <div className="bg-[#FAFAF8] p-10 ">
          <img src={Physiotherap} alt="service picture" />
          <h2 className="text-2xl font-semibold">Deep Tissue Massage: {}</h2>
          <p>✓No phone calls</p>
          <p>✓Real-time availability</p>
          <p>✓Instant confirmation</p>
          <p>✓Book anytime, anywhere</p>
          <button>Book Service</button>
        </div>
        <div className="bg-[#FAFAF8] p-10">
          <img src={rehab} alt="service picture" />
          <h2 className="text-2xl font-semibold">Rehabilitation: {}</h2>
          <p>✓No phone calls</p>
          <p>✓Real-time availability</p>
          <p>✓Instant confirmation</p>
          <p>✓Book anytime, anywhere</p>
          <button>Book Service</button>
        </div>
      </section>
    </>
  );
}
export default ServicesSection;

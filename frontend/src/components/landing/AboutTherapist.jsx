import Therapist from "../../assets/therapist.png";

function AboutTherapist() {
  return (
    <>
      <section className="bg-[#D8DCD6] flex justify-around h-96">
        <div className="flex items-center ml-20">
          <img src={Therapist} alt="therapist picture" />
          <div className="mb-35 ml-10">
            <h2 className="text-3xl">About The Therapist</h2>
            <br />
            <h3 className="text-2xl">Therapist Name: {}</h3>
            <p className="text-2xl">Physiotherapist</p>
            <p className="text-2xl">
              Helping people move and feel better with personalized care.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutTherapist;

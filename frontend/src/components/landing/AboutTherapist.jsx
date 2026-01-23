import Therapist from "../../assets/images/therapist.png";

function AboutTherapist() {
  return (
    <>
      <section className="bg-[#D8DCD6] flex justify-around h-96">
        <div className="flex items-center">
          <div className="mr-10">
            <img src={Therapist} alt="therapist image" />
          </div>
          <div>
            <div className="mb-9">
              <h2 className="font-semibold text-4xl">Meet Your Therapist</h2>
              <p className="text-2xl">
                Experience healing hands and proffesional care.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#778873] text-3xl mb-5">
                Dr. Sarah Johnson
              </h2>
              <p className="text-2xl mb-5">Certified Physiotherapist.</p>
              <p className="text-xl">
                Help people move and feel better with personalized care. <br />
                With over 10 years of experience in therapeutic massage and
                rehabilitation, <br />
                I'm commited to your wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutTherapist;

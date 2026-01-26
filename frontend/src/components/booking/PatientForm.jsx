function PatientForm({ onBack, onNext }) {
  return (
    <div className="bg-[#FAF8F3] rounded-xl p-10 w-full">
      <h2 className="text-3xl font-semibold mb-6">Booking an Appointment</h2>
      <p className="text-base text-gray-600 mb-6">Your Details</p>

      <div className="">
        <form action="" method="post" className="flex flex-col gap-8">
          <label htmlFor="" className="text-xl">
            First Name
          </label>
          <input type="text" className="bg-[gray]" />

          <label htmlFor="" className="text-xl">
            Last Name
          </label>
          <input type="text" className="bg-[gray]" />

          <label htmlFor="" className="text-xl">
            Phone Number
          </label>
          <input type="text" className="bg-[gray]" />
          <span>
            <input type="text" className="bg-[gray]" />
          </span>

          <label htmlFor="" className="text-xl">
            E-mail (Optional)
          </label>
          <input type="text" className="bg-[gray]" />
        </form>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="text-gray-600 text-base">
          ← Back
        </button>

        <button
          onClick={onNext}
          className="bg-[#778873] text-white px-8 py-2 text-base font-semibold rounded-lg disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
export default PatientForm;

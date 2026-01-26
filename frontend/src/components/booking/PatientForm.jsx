function PatientForm({ client, setClient, onBack, onNext }) {
  const isValid =
    client.firstName.trim() !== "" &&
    client.lastName.trim() !== "" &&
    client.phone.trim() !== "";

  return (
    <div className="bg-[#FAF8F3] rounded-xl p-10 w-full">
      <h2 className="text-3xl font-semibold mb-2">Booking an Appointment</h2>
      <p className="text-base text-gray-600 mb-8">Your Details</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              value={client.firstName}
              onChange={(e) =>
                setClient({ ...client, firstName: e.target.value })
              }
              className="flex-1 border rounded-md px-4 py-2"
            />

            <input
              type="text"
              placeholder="Last name"
              value={client.lastName}
              onChange={(e) =>
                setClient({ ...client, lastName: e.target.value })
              }
              className="flex-1 border rounded-md px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone *</label>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="+30"
              className="w-24 border rounded-md px-3 py-2"
            />

            <input
              type="text"
              placeholder="Enter a phone number"
              value={client.phone}
              onChange={(e) => setClient({ ...client, phone: e.target.value })}
              className="flex-1 border rounded-md px-4 py-2"
            />
          </div>

          {/* <p className="text-xs text-gray-500 mt-2">
            We'll send confirmation by SMS
          </p> */}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            E-mail (Optional)
          </label>

          <input
            type="email"
            placeholder="Enter your e-mail address"
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
            className="w-full border rounded-md px-4 py-2"
          />
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="text-gray-600 text-base">
          ← Back
        </button>

        <button
          disabled={!isValid}
          onClick={onNext}
          className="bg-[#778873] text-white px-8 py-3 text-base font-semibold rounded-lg disabled:opacity-50"
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}

export default PatientForm;

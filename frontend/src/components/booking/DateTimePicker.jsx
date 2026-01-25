function DateTimePicker({
  selectedService,
  date,
  time,
  setDate,
  setTime,
  onNext,
  onBack,
}) {
  const mockTimes = ["10:00", "10:30", "11:00", "11:30", "14:00", "14:30"];

  return (
    <div className="bg-[#FAF8F3] rounded-xl p-10 w-full">
      <h2 className="text-3xl font-semibold mb-2">Booking an Appointment</h2>

      <p className="text-base text-gray-600 mb-2">Choose Date & Time</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white rounded-lg p-6 flex-1">
          <p className="font-medium mb-4">Select a date</p>

          <input
            type="date"
            value={date || ""}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>

        <div className="bg-white rounded-lg p-6 flex-1">
          <p className="font-medium mb-4">
            {date ? "Available times" : "Select a date first"}
          </p>

          <div className="flex flex-wrap gap-3">
            {mockTimes.map((t) => (
              <button
                key={t}
                disabled={!date}
                onClick={() => setTime(t)}
                className={`border rounded-md px-4 py-2 text-base
                  ${
                    time === t
                      ? "bg-[#778873] text-white border-[#778873]"
                      : "hover:bg-gray-100"
                  }
                  ${!date ? "opacity-40 cursor-not-allowed" : ""}
                `}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="text-gray-600 text-base">
          ← Back
        </button>

        <button
          disabled={!date || !time}
          onClick={onNext}
          className="bg-[#778873] text-white px-8 py-3 text-base font-semibold rounded-lg disabled:opacity-50"
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}

export default DateTimePicker;

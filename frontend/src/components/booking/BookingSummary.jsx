function formatDate(date) {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}

function BookingSummary({
  selectedService,
  date,
  time,
  client,
  onBack,
  onConfirm,
}) {
  return (
    <div className="bg-[#faf8f3] p-10 w-full rounded-xl">
      <h2 className="text-3xl font-semibold mb-4">Summary</h2>
      <p className="text-xl text-gray-600 mb-8">
        Check your information before confirm
      </p>

      <div className="text-xl space-y-5">
        <p>
          <span className="">Name: </span>
          <span className="text-[#778873]">
            {client.firstName} {client.lastName}
          </span>
        </p>

        <p>
          <span className="">Phone: </span>
          <span className="text-[#778873]">{client.phone}</span>
        </p>

        {client.email && (
          <p>
            <span className="">E-mail: </span>
            <span className="text-[#778873]">{client.email}</span>
          </p>
        )}

        <p>
          <span className="">Service: </span>
          <span className="text-[#778873]">{selectedService?.name}</span>
        </p>

        <p>
          <span className="">Date: </span>
          <span className="text-[#778873]">{formatDate(date)}</span>
        </p>

        <p>
          <span className="">Time </span>
          <span className="text-[#778873]">{time}</span>
        </p>

        <p>
          <span className="">Price: </span>
          <span className="text-[#778873]">€{selectedService?.price}</span>
        </p>
      </div>

      <div className="flex justify-end mt-12 gap-4">
        <button
          className="text-gray-600 px-8 py-3  border rounded-lg hover:bg-[#627360] cursor-pointer hover:text-white "
          onClick={onBack}
        >
          Edit information
        </button>

        <button
          className="bg-[#778873] text-white px-8 py-3 text-base font-semibold rounded-lg cursor-pointer hover:bg-[#627360] hover:text-white"
          onClick={onConfirm}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
export default BookingSummary;

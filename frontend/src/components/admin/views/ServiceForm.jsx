import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createService,
  getServiceById,
  updateService,
} from "../../../api/adminApi";

function ServiceForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const isEdit = Boolean(id);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isEdit) {
      async function fetchService() {
        try {
          const service = await getServiceById(id);
          setName(service.name || "");
          setDuration(service.duration || "");
          setPrice(service.price || "");
          setDescription(service.description || "");
          setIsActive(service.active ?? true);
        } catch (error) {
          console.error("Failed to fetch service", error);
        } finally {
          setLoading(false);
        }
      }
      fetchService();
    } else {
      setLoading(false);
    }
  }, [id, isEdit]);

  if (loading) return <p>Loading...</p>;

  async function handleSubmit(e) {
    e.preventDefault();
    const serviceData = {
      name,
      duration: Number(duration),
      price: Number(price),
      description,
      active: isActive,
    };

    if (isEdit) {
      await updateService(id, serviceData);
    } else {
      await createService(serviceData);
    }

    nav("/admin/services");
  }

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-[#2F3A36] text-3xl font-medium mb-8">
        {isEdit ? "Edit Service" : "Add Service"}
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-[#2F3A36] mb-2">
            Service Name
          </label>
          <input
            className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
              focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
            type="text"
            placeholder="Add Service Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              Duration (min)
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="number"
              placeholder="60"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              Price (€)
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="number"
              placeholder="70"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2F3A36] mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
              focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
            rows="4"
            placeholder="Add the service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-sm font-medium text-[#2F3A36]">Service Status</p>
            <p className="text-xs text-[#6B6F6C]">
              {isActive ? "Active" : "Inactive"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition
                ${isActive ? "bg-[#778873]" : "bg-[#D8DCD6]"}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition
        ${isActive ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>

        <div className="flex justify-end pt-4 gap-4">
          <button className="mt-8 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition">
            {isEdit ? "SAVE CHANGES" : "ADD SERVICE"}
          </button>
          <button
            onClick={() => nav(-1)}
            className="mt-8 bg-white border border-[#778873] hover:bg-[#f0f0f0] text-[#778873] font-medium py-3 px-6 rounded-xl transition"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}
export default ServiceForm;

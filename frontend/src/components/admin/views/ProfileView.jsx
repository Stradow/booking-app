import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  getTherapistById,
  updateTherapist,
  updateTherapistProfilePicture,
} from "../../../api/adminApi";

function ProfileView() {
  const { currentTherapist } = useContext(AuthContext);
  const therapistId = currentTherapist?._id;

  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [language, setLanguage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!therapistId) return;

    async function fetchTherapistProfile() {
      try {
        const therapist = await getTherapistById(therapistId);

        setPreviewUrl(therapist.profilePicture || "");
        setFirstName(therapist.firstName || "");
        setLastName(therapist.lastName || "");
        setSpeciality(therapist.speciality || "");
        setExperience(therapist.experience || "");
        setBio(therapist.bio || "");
        setLanguage(therapist.language || "");
        setCity(therapist.city || "");
        setCountry(therapist.country || "");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTherapistProfile();
  }, [therapistId]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setProfilePicture(file);

    const imagePreview = URL.createObjectURL(file);
    setPreviewUrl(imagePreview);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);

    try {
      await updateTherapist(therapistId, {
        firstName,
        lastName,
        speciality,
        experience,
        bio,
        language,
        city,
        country,
      });

      if (profilePicture instanceof File) {
        const formData = new FormData();
        formData.append("imageUrl", profilePicture);

        await updateTherapistProfilePicture(therapistId, formData);
      }

      setSuccessMessage("Profile saved successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Profile update failed", error);
      console.error("Error details:", error.response?.data);
    } finally {
      setIsSaving(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-[#2F3A36] text-3xl font-medium mb-8">Profile</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {previewUrl && (
          <div className="flex justify-center mb-4">
            <img
              src={previewUrl}
              alt="Profile preview"
              className="w-32 h-32 rounded-full object-cover border border-[#D8DCD6]"
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-[#2F3A36] mb-2">
            Profile Picture
          </label>
          <input
            className="w-full rounded-lg bg-[#FAFAF8] border-2 border-dotted border-[#D8DCD6] px-4 py-3 text-center text-[#6B6F6C]
              focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              First Name
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              Last Name
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              Speciality
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="text"
              placeholder="e.g Massage Therapist, Physiotherapist"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              Experience
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="number"
              placeholder="Years of experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2F3A36] mb-2">
            About me / bio
          </label>
          <textarea
            className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
              focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
            rows="4"
            placeholder="Short, Trust-building text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2F3A36] mb-2">
            Languages Spoken
          </label>
          <input
            className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
              focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
            type="text"
            placeholder="Languages Spoken"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              City (Optional)
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F3A36] mb-2">
              Country (Optional)
            </label>
            <input
              className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
                focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        {successMessage && (
          <p className="mb-4 text-green-600 font-medium">{successMessage}</p>
        )}

        <div className="flex justify-end pt-4 gap-4">
          <button
            disabled={isSaving}
            className="mt-8 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition"
          >
            {isSaving ? "Saving..." : "SAVE PROFILE"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default ProfileView;

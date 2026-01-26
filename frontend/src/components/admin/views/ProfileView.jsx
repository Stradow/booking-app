import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  getTherapistById,
  updateTherapist,
  uploadTherapistProfilePicture,
} from "../../../api/adminApi";

function ProfileView() {
  const { currentTherapist, isLoading } = useContext(AuthContext);
  const therapistId = currentTherapist?._id;
  const nav = useNavigate();

  const [profilePicture, setProfilePicture] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [language, setLanguage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!therapistId) return;

    async function fetchTherapistProfile() {
      try {
        const therapist = await getTherapistById(therapistId);

        setProfilePicture(therapist.profilePicture || "");
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

  async function handleSubmit(e) {
    e.preventDefault();

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

        await uploadTherapistProfilePicture(therapistId, formData);
      }

      nav("/admin/profile");
    } catch (error) {
      console.error("Profile update failed", error);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-[#2F3A36] text-3xl font-medium mb-8">Profile</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-[#2F3A36] mb-2">
            Profile Picture
          </label>
          <input
            className="w-full rounded-lg bg-[#FAFAF8] border border-[#D8DCD6] px-4 py-3 text-[#6B6F6C]
              focus:outline-none focus:border-[#778873] focus:ring-2 focus:ring-[#778873]/30"
            type="file"
            placeholder="Choose a Picture"
            onChange={(e) => setProfilePicture(e.target.files[0])}
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

        <div className="flex justify-end pt-4 gap-4">
          <button className="mt-8 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition">
            SAVE PROFILE
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
export default ProfileView;

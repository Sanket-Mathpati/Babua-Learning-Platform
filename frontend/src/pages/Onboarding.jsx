import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-bold mb-4">
      Sach sach batao, Babua
    </h2>

    <p className="text-gray-600 mb-4">
      Tum kis stage pe ho?
    </p>

    <div className="space-y-3 mb-6">
      <label className="flex items-center gap-2">
        <input type="radio" name="level" />
        Beginner
      </label>

      <label className="flex items-center gap-2">
        <input type="radio" name="level" />
        Basics aata hai
      </label>

      <label className="flex items-center gap-2">
        <input type="radio" name="level" />
        Interview prep
      </label>
    </div>

    <button
      className="px-4 py-2 bg-black text-white rounded"
      onClick={() => navigate("/dashboard")}
    >
      Continue
    </button>
  </div>
</div>

  );
}

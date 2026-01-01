import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
  <div className="max-w-xl bg-white p-8 rounded-xl shadow text-center">
    <h1 className="text-3xl font-bold mb-4">
      Padhna free hai. Support optional hai.
    </h1>

    <p className="text-gray-600 mb-6">
      No certificates. No paywalls. Sirf real engineering growth.
    </p>

    <button
      className="px-6 py-3 bg-black text-white rounded-lg"
      onClick={() => navigate("/onboarding")}
    >
      Start Learning
    </button>
  </div>
</div>
  </div>
 </div>

  );
}

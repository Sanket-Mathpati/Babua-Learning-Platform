import { useParams, useNavigate } from "react-router-dom";
import { learningItems } from "../data/dummyData";

export default function LearningItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = learningItems.find((i) => i.id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (

    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
    <div className="mt-6 flex gap-4">
  <button className="px-4 py-2 bg-yellow-600 text-black rounded">
    Ask doubt
  </button>

  <button className="px-4 py-2 bg-gray-800 border border-gray-700 rounded">
    View discussions
  </button>
  </div>

    <p className="text-sm text-gray-500 mb-4">
      Subject: {item.subject}
    </p>

    <p className="text-gray-700 mb-6">
      Yahan hum concept ka core idea, pattern aur common mistakes explain karenge.
    </p>

    <div className="flex gap-4">
      <button
        className="px-4 py-2 border rounded"
        onClick={() => navigate(`/stuck/${item.id}`)}
      >
        Phans gaye ho?
      </button>

      <button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => navigate("/dashboard")}
      >
        Samajh aa gaya
      </button>
    </div>
  </div>
</div>

  );
}

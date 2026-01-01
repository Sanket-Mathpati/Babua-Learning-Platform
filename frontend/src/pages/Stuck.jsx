import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Stuck() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [whatTried, setWhatTried] = useState("");
  const [whereStuck, setWhereStuck] = useState("");
  const [helpType, setHelpType] = useState("");

  function handleSubmit() {
    if (!whatTried || !whereStuck || !helpType) {
      alert("Babua, sab sach sach bharo");
      return;
    }

    console.log({
      itemId: id,
      whatTried,
      whereStuck,
      helpType
    });

    alert("Samajhne ki koshish achchi hai 👍");
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
    <h2 className="text-2xl font-bold">Phans gaye ho?</h2>

    <textarea
      className="w-full border p-2 rounded"
      rows="4"
      placeholder="Ab tak kya try kiya?"
    />

    <input
      className="w-full border p-2 rounded"
      placeholder="Exact confusion kahan hai?"
    />

    <div className="space-y-2">
      {/* radio buttons */}
    </div>

    <button className="px-4 py-2 bg-black text-white rounded">
      Help maango
    </button>
  </div>
</div>

  );
}

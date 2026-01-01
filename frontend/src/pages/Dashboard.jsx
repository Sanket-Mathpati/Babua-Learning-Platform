// import { learningItems } from "../data/dummyData";

import { learningItems } from "../data/dummyData";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <button
  className="mb-4 px-4 py-2 border rounded"
  onClick={() => navigate("/explore")}
>
  Explore subjects
</button>

    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {/* Motivation */}
      <p>Babua, aaj thoda sa hi kaafi hai.</p>

      {/* Today's Plan */}
      <h3>Aaj ka plan</h3>
      <ul>
        {learningItems.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> ({item.subject})
            <br />
            <button onClick={() => navigate(`/learn/${item.id}`)}>
              Start
            </button>
          </li>
        ))}
      </ul>

      {/* Weak Areas */}
      <h3>Weak areas</h3>
      <ul>
        {learningItems
          .filter((item) => item.confidence <= 2)
          .map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>

      {/* Streak */}
      <h3>Consistency</h3>
      <p>3 din lagatar padhai ki hai 👏</p>
      <button onClick={() => navigate("/revision")}>
            Dobara dekh lo
       </button>
       <button onClick={() => navigate("/reflection")}>
        Weekly reflection
      </button>
    </div>
    </div>
    </div>
    
  );
}





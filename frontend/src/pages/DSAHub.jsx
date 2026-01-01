import AppLayout from "../components/AppLayout";
import { useNavigate } from "react-router-dom";

export default function DSAHub() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <h2 className="text-3xl font-bold mb-8">
        Data Structures & Algorithms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Topic-wise"
          desc="Learn DSA by individual topics"
          onClick={() => navigate("/dsa/topics")}
        />

        <Card
          title="Pattern-wise"
          desc="Learn patterns for problem solving"
          onClick={() => navigate("/dsa/patterns")}
        />

        <Card
          title="DSA Sheet"
          desc="Solve structured DSA problems"
        />
      </div>
    </AppLayout>
  );
}

function Card({ title, desc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-xl cursor-pointer hover:border-blue-500 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--muted)]">{desc}</p>
    </div>
  );
}

import AppLayout from "../components/AppLayout";
import { useNavigate } from "react-router-dom";

const topics = [
  "Arrays",
  "Strings",
  "Linked List",
  "Stack",
  "Queue",
  "Trees",
  "Graphs",
  "Recursion",
  "Dynamic Programming",
  "Greedy",
  "Bit Manipulation",
];

export default function Topics() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <h2 className="text-2xl font-bold mb-6">DSA Topics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map((t) => (
          <div
            key={t}
            onClick={() => navigate(`/dsa/topics/${t.toLowerCase()}`)}
            className="bg-[var(--surface)] border border-[var(--border)] p-5 rounded-lg cursor-pointer hover:border-blue-500"
          >
            <h3 className="font-semibold">{t}</h3>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

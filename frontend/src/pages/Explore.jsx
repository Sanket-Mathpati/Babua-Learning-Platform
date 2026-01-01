import AppLayout from "../components/AppLayout";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <h2 className="text-3xl font-bold mb-2">
        Choose your learning path
      </h2>

      <p className="text-gray-400 mb-8">
        Learn for understanding, not certificates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* DSA */}
        <div
          onClick={() => navigate("/dsa")}
          className="bg-[#111827] border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            Data Structures & Algorithms
          </h3>
          <p className="text-gray-400 text-sm">
            Patterns, problem solving, interview depth
          </p>
        </div>

        {/* System Design */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 opacity-60">
          <h3 className="text-xl font-semibold mb-2">
            System Design
          </h3>
          <p className="text-gray-400 text-sm">
            Architecture & scalability thinking
          </p>
          <span className="text-xs text-gray-500">Coming soon</span>
        </div>

        {/* CS Fundamentals */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 opacity-60">
          <h3 className="text-xl font-semibold mb-2">
            CS Fundamentals
          </h3>
          <p className="text-gray-400 text-sm">
            OS, DBMS, CN, LLD
          </p>
          <span className="text-xs text-gray-500">Coming soon</span>
        </div>
      </div>
    </AppLayout>
  );
}

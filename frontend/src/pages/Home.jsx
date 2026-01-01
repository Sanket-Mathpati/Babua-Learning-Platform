import { useNavigate } from "react-router-dom";
import FocusLayout from "../components/FocusLayout";

export default function Home() {
  const navigate = useNavigate();

  const subjects = [
    { id: "dsa", name: "DSA" },
    { id: "system", name: "System Design" },
    { id: "cs", name: "CS Fundamentals" },
    { id: "ai", name: "AI / ML" },
  ];

  return (
    <FocusLayout>
      <h1 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "8px" }}>
        Babua, aaj kahan phans rahe ho?
      </h1>

      <p style={{ color: "#9ca3af", marginBottom: "24px" }}>
        Content nahi. Pehle samajhte hain problem kya hai.
      </p>

      <div style={{ display: "grid", gap: "12px" }}>
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() =>
              navigate("/context", { state: { subject: s.name } })
            }
            style={{
              padding: "14px",
              borderRadius: "8px",
              background: "#0b0f14",
              border: "1px solid #1f2937",
              color: "#e5e7eb",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {s.name}
          </button>
        ))}
      </div>
    </FocusLayout>
  );
}
 
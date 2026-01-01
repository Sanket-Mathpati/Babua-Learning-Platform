import { useNavigate, useLocation } from "react-router-dom";
import FocusLayout from "../components/FocusLayout";

export default function Context() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <FocusLayout>
      <h2 style={{ fontSize: "22px", marginBottom: "16px" }}>
        {state?.subject} — kis jagah dikkat aa rahi hai?
      </h2>

      <div style={{ display: "grid", gap: "12px" }}>
        {[
          "Understanding concepts",
          "Choosing approach / pattern",
          "Implementing solution",
          "Revision / forgetting",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              navigate("/diagnosis", {
                state: { subject: state.subject, context: item },
              })
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
            {item}
          </button>
        ))}
      </div>
    </FocusLayout>
  );
}

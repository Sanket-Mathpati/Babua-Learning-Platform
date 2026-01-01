import { useLocation, useNavigate } from "react-router-dom";
import FocusLayout from "../components/FocusLayout";

export default function Decision() {
  const { state } = useLocation();
  const navigate = useNavigate();

  let decision = "";
  let showMentor = false;

  if (state.confidence <= 2 && state.tried === "nothing") {
    decision =
      "You seem completely blocked. Self-study may not be efficient right now.";
    showMentor = true;
  } 
  else if (state.confusion === "concept") {
    decision = "Rebuild the core concept using a short explanation + example.";
  } 
  else if (state.confusion === "approach" && state.tried === "guess") {
    decision = "Compare similar approaches before attempting again.";
  } 
  else {
    decision = "Proceed with focused practice using one guided example.";
  }

  return (
    <FocusLayout>
      <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
        Next best step
      </h2>

      <div
        style={{
          padding: "16px",
          background: "#0b0f14",
          borderRadius: "8px",
          border: "1px solid #1f2937",
          marginBottom: "20px",
        }}
      >
        {decision}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => navigate("/reflection")}>
          Continue
        </button>

        {showMentor && (
          <button
            style={{
              background: "#f59e0b",
              color: "#000",
              padding: "8px 12px",
              borderRadius: "6px",
            }}
            onClick={() =>
              navigate("/mentor", { state })
            }
          >
            Talk to a Mentor
          </button>
        )}
      </div>
    </FocusLayout>
  );
}

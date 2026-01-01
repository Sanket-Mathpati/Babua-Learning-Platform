import { useLocation } from "react-router-dom";
import FocusLayout from "../components/FocusLayout";

export default function Mentor() {
  const { state } = useLocation();

  return (
    <FocusLayout>
      <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
        Mentor Support
      </h2>

      <p style={{ color: "#9ca3af", marginBottom: "16px" }}>
        Based on your situation, guided help may save time.
      </p>

      <div
        style={{
          padding: "16px",
          background: "#0b0f14",
          border: "1px solid #1f2937",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <strong>Context:</strong> {state?.subject} <br />
        <strong>Issue:</strong> {state?.confusion} <br />
        <strong>Confidence:</strong> {state?.confidence}/5
      </div>

      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
        This would normally connect you to an experienced mentor
        for a short, focused session.
      </p>

      <button
        style={{
          marginTop: "16px",
          padding: "10px",
          borderRadius: "6px",
          background: "#22c55e",
          color: "#000",
        }}
      >
        Request Mentor Session
      </button>
    </FocusLayout>
  );
}

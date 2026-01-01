import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FocusLayout from "../components/FocusLayout";

export default function Diagnosis() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [confusion, setConfusion] = useState("");
  const [tried, setTried] = useState("");
  const [confidence, setConfidence] = useState(3);

  return (
    <FocusLayout>
      <h2 style={{ fontSize: "22px", marginBottom: "16px" }}>
        Pehle situation samajhte hain
      </h2>

      <label>Dikkat kis type ki hai?</label>
      <select onChange={(e) => setConfusion(e.target.value)}>
        <option value="">Select</option>
        <option value="concept">Concept clarity</option>
        <option value="approach">Approach / pattern</option>
        <option value="implementation">Implementation</option>
      </select>

      <br /><br />

      <label>Ab tak kya try kiya?</label>
      <select onChange={(e) => setTried(e.target.value)}>
        <option value="">Select</option>
        <option value="brute">Basic attempt</option>
        <option value="guess">Guess / intuition</option>
        <option value="nothing">Nothing properly</option>
      </select>

      <br /><br />

      <label>Confidence (1–5)</label>
      <input
        type="number"
        min="1"
        max="5"
        value={confidence}
        onChange={(e) => setConfidence(Number(e.target.value))}
      />

      <br /><br />

      <button
        onClick={() =>
          navigate("/decision", {
            state: { ...state, confusion, tried, confidence },
          })
        }
      >
        Ab system decide karega
      </button>
    </FocusLayout>
  );
}

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Mentor from "./pages/Mentor";

import Home from "./pages/Home";
import Context from "./pages/Context";
import Diagnosis from "./pages/Diagnosis";
import Decision from "./pages/Decision";
import Reflection from "./pages/Reflection";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <Routes>
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/" element={<Home />} />
        <Route path="/context" element={<Context />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </div>
  );
}

export default App;

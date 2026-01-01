export default function Navbar({ dark, setDark }) {
  return (
    <div
      className="flex justify-between items-center px-6 py-4 border-b"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      <h1 className="font-semibold text-lg">LearnCore</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="text-sm px-3 py-1 rounded border"
          style={{ borderColor: "var(--border)" }}
        >
          {dark ? "Light" : "Dark"}
        </button>

        <button
          className="text-sm px-4 py-1 rounded"
          style={{
            background: "var(--accent)",
            color: "white",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

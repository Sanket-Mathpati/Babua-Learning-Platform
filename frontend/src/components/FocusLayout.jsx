export default function FocusLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f14",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "#111827",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

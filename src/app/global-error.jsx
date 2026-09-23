"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
          <h2>Something went wrong</h2>
          <p style={{ color: "#666", marginTop: "8px" }}>An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            style={{ marginTop: "16px", padding: "8px 16px", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

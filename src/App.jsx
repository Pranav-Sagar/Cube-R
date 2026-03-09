import { WebGLShader } from "./Components/ComingSoon";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
        color: "white",
      }}
    >
      <WebGLShader />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "80px 120px",
            border: "1px solid rgba(255,255,255,0.15)",
            position: "relative",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "12px",
              bottom: "12px",
              border: "1px solid rgba(255,255,255,0.15)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              fontWeight: "800",
              letterSpacing: "3px",
              marginBottom: "10px",
              opacity: 0.8,
            }}
          >
            CUBE-R
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Coming Soon
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Something amazing is being built. Stay tuned for the launch.
          </p>

          <div
            style={{
              marginTop: "25px",
              color: "#4ade80",
              fontSize: "14px",
            }}
          >
            ● Launching Soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
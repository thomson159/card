import git from "./github-mark.svg";
import dis from "./discord-icon.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <spline-viewer url="https://prod.spline.design/h3oYLKM6Jayl7WnD/scene.splinecode"></spline-viewer>
      <a href="https://github.com/thomson159" target="_blank" rel="noreferrer">
        <img
          className="hover-element"
          style={{
            position: "absolute",
            top: 0,
            left: 20,
            maxWidth: 40,
            padding: 20,
            cursor: "pointer",
          }}
          src={git}
          alt="github"
        />
      </a>
      <a
        href="https://discord.com/users/716946817669005322"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="hover-element"
          style={{
            position: "absolute",
            top: 0,
            left: 100,
            maxWidth: 40,
            padding: 20,
            cursor: "pointer",
          }}
          src={dis}
          alt="discord"
        />
      </a>
    </div>
  );
}

export default App;

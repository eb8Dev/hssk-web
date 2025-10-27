
import logo from "./assets/logo-circle.png";
import "./App.css";
import Menu from "./Menu";
import MouseGlow from "./components/MouseGlow";
import InteractiveTitle from "./components/InteractiveTitle";
import InteractiveLogo from "./components/InteractiveLogo";
import InteractiveParticles from "./components/InteractiveParticles";

export default function App() {
  return (
    <>
      <MouseGlow />

      {/* Hero Section */}
      <section className="hero" style={{ position: "relative", zIndex: 1 }}>
        <InteractiveParticles />
        <div className="hero-content">
          <div className="logo-layer">
            <InteractiveLogo src={logo} alt="Logo" />
          </div>
          <div className="title-layer">
            <InteractiveTitle text="HotelSriSaiKrishna" />
          </div>
        </div>
      </section>

      <Menu />

      <footer className="footer">
        <div className="footer-info">
          <h3>HotelSriSaiKrishna</h3>
          <address>Opp Kondayya Cheruvu, Tadepalligudem, West Godavari.</address>
        </div>
        <div className="dev-links">
          <p>
            Made with ❤️ by{" "}
            <a href="https://eb8dev.web.app" target="_blank" rel="noreferrer">
              Eenadula Bhanuprakash
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

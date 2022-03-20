import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <div id="brand">Logo</div>
      <ul className="Navlinks">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Intro() {
  return (
    <div className="Intro">
      <div className="intro-1">
        <div className="intro-heading">
          HELLO WORLD <br />
          I'M MASOOD
        </div>
      </div>

      <div className="intro-2">
        <div className="intro-2-text">Software Developer</div>
      </div>
    </div>
  );
}

function Footer() {
  return <div className="Footer"></div>;
}

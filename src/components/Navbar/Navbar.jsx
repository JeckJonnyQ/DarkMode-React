import "./Navbar.scss";
import NavbarLogo from "../../assets/NavbarLogo.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav__logo_icon" src={NavbarLogo} />
      <h3 className="nav__logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler__light">Light</p>
        <div className="toggler__slider" onClick={props.toggleDarkMode}>
          <div className="toggler__slider_circle"></div>
        </div>
        <p className="toggler__dark">Dark</p>
      </div>
    </nav>
  );
}

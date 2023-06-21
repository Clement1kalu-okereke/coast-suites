import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
function Navbar() {
  let handleBarOpen = (e) => {
    const linkAndBtn = document.querySelector(".linkAndBtn");
    linkAndBtn.classList.toggle("open");
  };
  return (
    <>
      <section className="navBar">
        <section className="navImage">
          <Link to="/">
            <img src="/src/assets/Asset 1Logop.png" alt="Logo" />
            <h1>Coast Suites</h1>
          </Link>
        </section>
        <span className="barIcon" onClick={handleBarOpen}>
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </span>
        <div className="linkAndBtn">
          <div>
            <section className="navLinks">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact Us</Link>
                </li>
              </ul>
            </section>
            <section className="navBtnGrp">
              <button className="LogIN">Log In</button>
              <button className="SignUp">Sign Up</button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;

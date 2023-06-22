import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
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
      </section>
    </>
  );
}

export default Navbar;

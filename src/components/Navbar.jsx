import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <section className="navBar">
        <section className="navImage">
          <Link to="/">
            <img src="/src/assets/Asset 1Logop.png" alt="Logo" />
            <h1>Coast Suites</h1>
          </Link>
        </section>
        <section className="navLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Available Rooms</Link>
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
      </section>
    </>
  );
}

export default Navbar;

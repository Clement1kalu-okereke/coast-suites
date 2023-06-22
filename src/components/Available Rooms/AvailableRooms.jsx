import { useState } from "react";
import roomDetails from "./roomDetails.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AvailableRooms.css";
function AvailableRooms(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartDetails, setCartDetails] = useState([]);
  let navigate = useNavigate();
  let handleCartClose = () => {
    setCartOpen(!cartOpen);
  };

  props.userDatas
    ? console.log(props.userDatas[0].formattedStartDate)
    : console.log(props);

  const random = Math.floor(Math.random() * 100000) + 1;

  let roomDeets = roomDetails.map((detail) => {
    const handleAddToCart = () => {
      setCartDetails(detail);
      console.log(cartOpen);
      setCartOpen(!cartOpen);
    };
    return (
      <>
        <section className="roomDeet" key={random}>
          <img src={detail.image} alt={detail.image} />
          <section className="side">
            <h2>{detail.name}</h2>
            <p>{detail.details}</p>
            <ul>
              {detail.properties.map((prop) => {
                return (
                  <li key={Math.floor(Math.random() * 100000) + 1}>{prop}</li>
                );
              })}
            </ul>
            <section className="availableFoot">
              <span>{detail.pricing}</span>
              <button className="addToCart" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </section>
          </section>
        </section>
        <br />
      </>
    );
  });
  return (
    <>
      {props.userDatas ? (
        <section className="availableRooms">
          <section className="reservation">
            <h2>Reservation Details</h2>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{props.userDatas[0].name}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{props.userDatas[0].phoneNumber}</td>
                </tr>
                <tr>
                  <td>Check In</td>
                  <td>{props.userDatas[0].formattedStartDate}</td>
                </tr>
                <tr>
                  <td>Check Out</td>
                  <td>{props.userDatas[0].formattedEndDate}</td>
                </tr>
                <tr>
                  <td>Total Nights</td>
                  <td>{props.userDatas[0].differenceDates}</td>
                </tr>
                <tr>
                  <td>Total Rooms</td>
                  <td>{props.userDatas[0].rooms}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="available">
            <header>
              <h2>Available Rooms</h2>
            </header>
            {roomDeets}
          </section>
        </section>
      ) : (
        <span className="linkError">
          <Link to="/">Go Home</Link> and Input Details
        </span>
      )}
      {cartOpen ? (
        <section className="cart">
          <motion.section
            initial={{ transform: "scale(0.2, 0.2)" }}
            animate={{ transform: "scale(1, 1)" }}
            transition={{ duration: 0.2 }}
            className="cartContainer"
          >
            <section className="cartHeader">
              <h2>Product Details</h2>
            </section>
            <section className="cartBody">
              {cartDetails ? (
                <section className="roomDeet" key={random}>
                  <img src={cartDetails.image} alt={cartDetails.image} />
                  <section className="side">
                    <h2>{cartDetails.name}</h2>
                    <p>{cartDetails.details}</p>
                    <ul>
                      {cartDetails.properties.map((prop) => {
                        return (
                          <li key={Math.floor(Math.random() * 100000) + 1}>
                            {prop}
                          </li>
                        );
                      })}
                    </ul>
                    <section className="availableFoot">
                      <span>{cartDetails.pricing}</span>
                      <button className="addToCart">Add To Cart</button>
                    </section>
                  </section>
                </section>
              ) : (
                "Body"
              )}
            </section>
            <section className="cartFooter">
              <button
                onClick={() => {
                  setCartOpen(!cartOpen);
                  alert("Successfully Purchased");
                  navigate("/");
                }}
              >
                Buy
              </button>
              <button onClick={handleCartClose}>Close</button>
            </section>
          </motion.section>
        </section>
      ) : (
        <></>
      )}
      )
    </>
  );
}

export default AvailableRooms;

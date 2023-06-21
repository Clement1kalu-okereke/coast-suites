import { useEffect } from "react";
import roomDetails from "./roomDetails.js";
import { Link } from "react-router-dom";
import './AvailableRooms.css'
function AvailableRooms(props) {
  const random = Math.floor(Math.random() * 100000) + 1;

  let roomDeets = roomDetails.map((detail) => {
    return (
      <>

        <section className="roomDeet" key={random}>
          <img src={detail.image} alt={detail.image} />
          <section className="side">
            <h2>{detail.name}</h2>
            <p>{detail.details}</p>
            <ul>
              {detail.properties.map((prop) => {
                return <li key={random}>{prop}</li>;
              })}
            </ul>
            <section className="availableFoot">
              <span>{detail.pricing}</span>
              <button>Book Room</button>
            </section>
          </section>
        </section>
        <br />
      </>
    );
  });
  return (
    <>
      {props.userDatas ?
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
                  <td>THU 27/6/2023</td>
                </tr>
                <tr>
                  <td>Check Out</td>
                  <td>THU 02/7/2023</td>
                </tr>
                <tr>
                  <td>Total Nights</td>
                  <td>6</td>
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
        </section> :
        <span className="linkError"><Link to='/'>Go Home</Link> and Input Details</span>
      }
    </>
  );
}

export default AvailableRooms;

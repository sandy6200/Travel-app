import "./Mainpage.css";
import { Link } from "react-router-dom";
function Mainpage() {
  return (
    <div className="main">
      <div className="heading">
        <h1 className="sandytravels">SANDY TRAVELS</h1>
        <h3 className="location">INDORE</h3>
        <h3 className="service">24/7 SERVICE EVERYDAY</h3>
      </div>
      <div className="available">
        <button>24/7 Available</button>
        <button>All Tourist Cabs</button>
      </div>

      <div className="call mt-5">
        <a href="tel:6200125629">Call Now: 6200125629</a>
      </div>

      
    </div>
  );
}

export default Mainpage;

import "./css/navbar.css";
import { FaHome, FaUser, FaEnvelope, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/about"><FaUser /></Link></li>
        <li><Link to="/coffee"><FaEnvelope /></Link></li>
        <li><Link to="/order"><FaCog /></Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
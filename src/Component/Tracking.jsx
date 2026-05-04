import "./tracking.css";
import img from "./map.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
function Tracking() {
  return (
    <div className="ff">

    
      <div className="ff1">
        <img src={img} alt="map" />

       
      </div>

    
      <div className="ff5">

        <h3 className="ff6">10 minutes left</h3>
        <p className="ff7">Delivery to Jk_Kop Satay</p>

       
        <div className="ff8">
          <div className="ff9"></div>
        </div>

       
        <div className="ff10">
          <div className="ff11">🚴</div>
          <div>
            <h4>Delivered your order</h4>
            <p>
              We will deliver your goods to you in the shortest possible time.
            </p>
          </div>
        </div>

      
        <div className="ff12">
          <img src="https://i.pravatar.cc/100?img=12" alt="person" />

          <div>
            <h4>Brooklyn Simmons</h4>
            <p>Personal Courier</p>
          </div>

          <Link to="/">
            <button className="ff13"><FaPhoneAlt /></button>
          </Link>
        </div>


      </div>
    </div>
  );
}

export default Tracking;
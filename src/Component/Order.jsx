import { Link } from "react-router-dom";

import "../css/order.css";
import img from "./Screenshot 13.png";

function Order() {
  return (
    <>
     

      <div className="kk">
        <h2 className="kk1">Order</h2>

       
        <div className="kk2">
          <button className="kk3">Deliver</button>
          <button className="kk16">Pick Up</button>
        </div>

       
        <div className="kk4">
          <h4>Delivery Address</h4>
          <p className="kk5">Jk_Kop Studio</p>
          <p className="kk6">Kpg Suryo No. 620, Selorejo</p>

          <div className="kk7">
            <button>✏ Edit Address</button>
            <button>＋ Add Note</button>
          </div>
        </div>

       
        <div className="kk8">
          <div className="kk17"> <img
                  src={img}
                  alt="coffee"
                /></div>

          <div className="kk9">
            <h4>Caffe Mocha</h4>
            <p>Deep Foam</p>
          </div>

          <div className="kk10">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

      
        <div className="kk11">
          <span>🏷 1 Discount is Applies</span>
          <span>›</span>
        </div>

      
        <div className="kk12">
          <h4>Payment Summary</h4>

          <div className="kk13">
            <span>Price</span>
            <span>$4.53</span>
          </div>

          <div className="kk13">
            <span>Delivery Fee</span>
            <span>
              <del>$2.0</del> <b>$1.0</b>
            </span>
          </div>
        </div>

       <div className="kk20">
      
        <div className="kk18">
          <div>
            <p className="kk19">Cash/Wallet</p>
            <h3>$5.53</h3>
          </div>
        </div>
        <Link to="/tracking" >
         <button className="kk15">Order</button>
        </Link>
        
       </div>
      </div>
    </>
  );
}

export default Order;
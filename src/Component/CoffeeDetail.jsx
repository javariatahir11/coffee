import React from "react";
import "./CoffeeDetail.css";
import { FaHeart, FaStar, FaCoffee, FaFire } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { Link} from "react-router-dom";

import img from "./Screenshot 13.png";

 function CoffeeDetail() {
 

  return (
   <>
    
    <div className="jj">

      
      <div className="jj1">
        <h3>Detail</h3>
        <FaHeart className="jj2" />
      </div>
<div className="jj3">
     
      <img
        src={img}
        alt="coffee"
      />
      </div>

      <h2 className="jj4">Caffe Mocha</h2>
      

      <div className="jj6">
        <p className="jj5">Ice/Hot</p>
       

        <div className="jj10">
          <div><FaCoffee /></div>
          <div><GiMilkCarton /></div>
          <div><FaFire /></div>
        </div>
      </div>
       <div className="jj7">
          <FaStar className="jj8" />
          <span>4.8</span>
          <span className="jj9">(230)</span>
        </div>

      
      <h4 className="desc">Description</h4>
      <p className="jj11">
        A cappuccino is an approximately 150 ml beverage with espresso and milk.
      </p>

      
      <h4 className="size">Size</h4>
      <div className="jj12">
        <button>S</button>
        <button className="jj13">M</button>
        <button>L</button>
      </div>

     
      <div className="jj14">
        <div>
          <p className="jj15">Price</p>
          <h3 className="jj16">$ 4.53</h3>
        </div>

      <Link to="/order" >
          <button className="jj17">Buy Now</button>
        </Link>
      </div>

    </div>
   </>
  );
}
export default CoffeeDetail;
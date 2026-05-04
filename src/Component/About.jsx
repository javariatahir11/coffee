
import "./css/About.css";
import imeag1 from "./Screenshot 13.png"
import imeag2 from "./Screenshot 14.png"
import imeag3 from "./Screenshot 12.png"
import imeag4 from "./Screenshot11.png"
import { FaSearch } from "react-icons/fa";
import { BiSliderAlt } from "react-icons/bi";
import Navbar from "./navbar";

function About() {
  return(
    <>
    
    <Navbar/>
    <div className="as">
      <div className="as1">
       <h5>Location</h5>
       <h2>Bilzen, Tanjungbalai</h2>
       <div className="as2">
        <div className="as3">
        <FaSearch className="icon" />
       <input type="text"  placeholder=" Search coffee" />
</div>

<button><BiSliderAlt /></button>

       </div>
      </div>
    </div>
    
    
    <div className="s1">
      <div className="as5">
        <h4>Promo</h4>
        <div className="as7">
          <h1>Buy one get</h1>
        </div>
        <div className="as8">
          <h3>one FREE</h3>
        </div>
        
      </div>
    </div>

<div className="c1">
  <h2>All Coffee</h2>
  <h3>Machiato</h3>
  <h3>Latte</h3>
   <h3>Amerio</h3>
</div>

<div className="c2">
  <div className="c3">
<div className="c4">
  <img src={imeag2} />
  <h2>Caffe Mocha</h2>
  <h5>Deep Foam</h5>
  <div className="c5">
    <h3>$ 4.53</h3>
    <h4>+</h4>
  </div>
</div>


<div className="c4">
  <img src={imeag1} />
  <h2>Flat White</h2>
  <h5>Espresso</h5>
  <div className="c5">
    <h3>$ 3.53</h3>
    <h4>+</h4>
  </div>
</div> 
  </div>
</div>



<div className="c8">
  <div className="c9">
    <div className="c11">
<img src={imeag3} />
  <h2>Caffe Mocha</h2>
  <h5>Deep Foam</h5>
  <div className="c5">
    <h3>$ 3.53</h3>
    <h4>+</h4>
  </div>
    </div>

    <div className="c11">
<img src={imeag4} />
  <h2>Flat White</h2>
  <h5>Espresso</h5>
  <div className="c5">
    <h3>$ 3.53</h3>
    <h4>+</h4>
  </div>
    </div>



  </div>
</div>


    </>
  )
}

export default About;
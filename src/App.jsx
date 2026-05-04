import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import CoffeeDetail from "./Component/CoffeeDetail";
import Order from "./Component/Order";
import Tracking from "./Component/Tracking";


function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coffee" element={<CoffeeDetail />} />
        <Route path="/order" element={<Order />} />
         <Route path="/tracking" element={<Tracking />} />
      </Routes>
      
    </Router>
  );
}

export default App;
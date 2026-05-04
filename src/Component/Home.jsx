import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      
      <div className="hero">
        <div className="overlay"></div>
      </div>

      <div className="content">
        <h1>Fall in Love with</h1>
        <h2>Coffee in Blissful</h2>
        <h3>Delight!</h3>

        <p>
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </p>

        <Link to="/about">
          <button>Get Started</button>
        </Link>
      </div>

    </div>
  );
}

export default Home;
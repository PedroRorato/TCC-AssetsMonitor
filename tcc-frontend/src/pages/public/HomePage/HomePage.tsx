import { Link } from "react-router-dom";
// Styles
import "./HomePage.styles.scss";
import logo from "@/assets/logo.png";

const HomePage = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="home-container">
      <div className="home-logo">
        <img src={logo} className="img-fluid" alt="logo" />
      </div>

      <Link to="/dashboard" className="home-button">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default HomePage;

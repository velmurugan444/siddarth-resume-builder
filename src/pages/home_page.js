import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.jpg";

export const Homepage = () => {
  return (
    <div className="App">
      <div
        className="container1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={Logo} width="100px" style={{ borderRadius: "20px" }} />
        &nbsp; &nbsp;
        <h1>JOB HACKS</h1>
      </div>
    </div>
  );
};

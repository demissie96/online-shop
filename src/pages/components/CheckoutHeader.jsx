import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function CheckoutHeader(props) {
  let navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark fixed-top"
        aria-label="Dark offcanvas navbar"
      >
        <div className="container-fluid">
          <p className="navbar-brand">Online Shop</p>
          <div>
            <button
              className="btn btn-outline-warning"
              onClick={() => navigate("/")}
            >
              Go Back
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutHeader;

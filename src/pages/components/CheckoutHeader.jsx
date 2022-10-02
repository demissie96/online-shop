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
          <span className="navbar-brand">Online Shop</span>
          <div>
            <button
              className="btn btn-sm btn-outline-warning"
              onClick={() => navigate(-1)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutHeader;

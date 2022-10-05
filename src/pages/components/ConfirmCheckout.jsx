import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmCheckout.css";

function ConfirmCheckout(props) {
  let navigate = useNavigate();
  return (
    <>
      {props.success && (
        <div id="confirm-div">
          <h1>Success</h1>
          <p className="lead">
            Check out your email inbox for automated mail response.
          </p>
          <div id="button-continue">
            <button
              className="btn btn-outline-warning"
              onClick={() => navigate(-1)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
      {props.success === false && (
        <div id="confirm-div">
          <h1>Error</h1>
          <p className="lead">The email was not sent.</p>
          <div>
            <button
              id="button-continue"
              className="btn btn-sm btn-outline-warning"
              onClick={() => navigate(-1)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmCheckout;

import React from "react";
import "./ConfirmCheckout.css";

function ConfirmCheckout(props) {
  return (
    <>
      {props.success && (
        <div id="confirm-div">
          <h1>Success</h1>
          <p className="lead">
            Check out your email inbox for automated mail response.
          </p>
        </div>
      )}
      {props.success === false && (
        <div id="confirm-div">
          <h1>Error</h1>
          <p className="lead">The email was not sent.</p>
        </div>
      )}
    </>
  );
}

export default ConfirmCheckout;

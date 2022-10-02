import React, { useEffect } from "react";
import CheckoutHeader from "./components/CheckoutHeader";

function CheckoutPage() {
  useEffect(() => {
    const result = localStorage.getItem("cart");
    const objectResult = JSON.parse(result);
    console.log(objectResult);
  }, []);

  return (
    <>
      <CheckoutHeader />
      <h1>Create a Checkout Header component!</h1>
    </>
  );
}

export default CheckoutPage;

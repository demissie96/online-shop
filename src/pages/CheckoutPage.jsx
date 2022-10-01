import React, { useEffect } from "react";

function CheckoutPage() {
  useEffect(() => {
    const result = localStorage.getItem("cart");
    const objectResult = JSON.parse(result);
    console.log(objectResult);
  }, []);

  return (
    <>
      <h1>Create a Checkout Header component!</h1>
    </>
  );
}

export default CheckoutPage;

import React, { useEffect, useState } from "react";
import CheckoutHeader from "./components/CheckoutHeader";
import "./CheckoutPage.css";

let sum = 0;
let objectResult;

function sendEmail(e) {
  e.preventDefault();

  let firstName = e.target.firstName.value;
  let lastName = e.target.lastName.value;
  let email = e.target.email.value;
  let orderList = [];
  let emailMessage = `Dear ${firstName} ${lastName},
  
Thank you for checking my portfolio project. 

Your sham purchase list: 
    
    `;

  objectResult.forEach((element) => {
    if (element.amount !== 0) {
      orderList.push(element);
      emailMessage =
        emailMessage +
        `- ${element.name} (${element.amount}${element.quantityName})
    `;
    }
  });
  emailMessage =
    emailMessage +
    `
Total: ${sum}${sum > 1 ? "pcs" : "pc"}
    `;

  console.log(emailMessage);
}

function CheckoutPage() {
  const [cartSum, setCartSum] = useState(sum);
  const [cartList, setCartList] = useState([]);

  const [validated, setValidated] = useState("");

  useEffect(() => {
    const result = localStorage.getItem("cart");
    objectResult = JSON.parse(result);
    setCartList(objectResult);

    sum = 0;
    objectResult.forEach((element) => {
      sum += element.amount;
    });
    setCartSum(sum);

    if (sum < 1) {
      document.getElementById("send-email-btn").disabled = true;
    } else {
      document.getElementById("send-email-btn").disabled = false;
    }
  }, []);

  return (
    <>
      <CheckoutHeader />
      <div id="checkout-body">
        <div
          className="bg-light"
          data-new-gr-c-s-check-loaded="14.1080.0"
          data-gr-ext-installed=""
        >
          <div className="container">
            <main>
              <div className="py-5 text-center">
                <h2>Checkout</h2>
                <p className="lead">
                  You'll receive an automated e-mail back. It's not an actual
                  order! Only for demonstration purposes.
                </p>
              </div>

              <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">
                      {cartSum}
                    </span>
                  </h4>
                  <ul className="list-group mb-3">
                    {cartList.map((element) => {
                      if (element.amount !== 0) {
                        return (
                          <div key={element.name}>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                              <div>
                                <h6 className="my-0">{element.name}</h6>
                              </div>
                              <span className="text-muted">
                                {element.amount}
                                {element.quantityName}
                              </span>
                            </li>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}

                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total:</span>
                      <strong>
                        {cartSum} {cartSum > 1 ? "pcs" : "pc"}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7 col-lg-8">
                  <h4 className="mb-3">Billing address</h4>
                  <form
                    className={validated}
                    onSubmit={(e) => {
                      sendEmail(e);
                    }}
                  >
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="example@email.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />
                    {sum < 1 ? (
                      <p
                        style={{
                          color: "red",
                          margin: "-12px 0 12px",
                          textAlign: "center",
                        }}
                      >
                        Your cart is empty...
                      </p>
                    ) : null}
                    <button
                      id="send-email-btn"
                      className="w-100 btn btn-primary btn-lg"
                      type="submit"
                      disabled
                      onClick={() => setValidated("was-validated")}
                    >
                      Checkout
                    </button>
                  </form>
                </div>
              </div>
            </main>
          </div>

          <script
            src="/docs/5.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
            crossOrigin="anonymous"
          ></script>

          <script src="form-validation.js"></script>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;

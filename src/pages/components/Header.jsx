import React from "react";
import "./Header.css";

function Header(props) {

  // function deleteFromCart() {
  //   props.deleteFromCart();
  // }
  
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark fixed-top"
        aria-label="Dark offcanvas navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/shop">
            Online Shop
          </a>
          <div>
            <i id="items-in-cart">{props.sum}</i>
            <span id="cart-text">Shopping Cart</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarDark"
              aria-controls="offcanvasNavbarDark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                Your Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {props.shoppingCart.map((element) => {
                  if (element.amount !== 0) {
                    return (
                      <div key={element.name}>
                        <hr></hr>
                        <li className="nav-item">
                          <div className="d-flex justify-content-between">
                            <i className="active" aria-current="page">
                              {element.name} - {element.amount}
                              {element.quantityName}
                            </i>
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => {
                                props.deleteFromCart(element.name);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </li>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}

                <hr></hr>

                <br></br>
              </ul>

              <div>
                {props.sum > 0 ? (
                  <button className="btn btn-outline-success">Checkout</button>
                ) : (
                  <button disabled className="btn btn-outline-danger">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

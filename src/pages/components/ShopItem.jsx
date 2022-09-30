import React, { useState } from "react";
import "./ShopItem.css";

let itemNum = 0;

function ShopItem(props) {
  const [itemNumber, setItemNumber] = useState(itemNum);
  const [quantityName, setQuantityName] = useState("pc");

  function changeAmount(e) {
    if (e === "plus" && itemNum < 10) {
      itemNum++;
    } else if (e === "minus" && itemNum > 0) {
      itemNum--;
    }

    setItemNumber(itemNum);
    if (itemNum > 0) {
      setQuantityName("pcs");
    } else {
      setQuantityName("pc");
    }
  }

  return (
    <>
      <div className="card shadow-sm item-card">
        <img
          id="card-image"
          src={props.image}
          width="298px"
          height="225px"
        ></img>

        <div className="card-body">
          <h4>{props.name}</h4>
          <p className="card-text">
            You won't purchase anything. It's only for demonstration purpose.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div id="btn-group-div" className="btn-group">
              <button
                id="button-plus"
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => changeAmount("plus")}
              >
                +
              </button>
              <button
                id="button-minus"
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => changeAmount("minus")}
              >
                -
              </button>
              <p id="item-number" className="text-muted">
                {itemNumber} {quantityName}
              </p>
            </div>

            <button
              id="button-add-cart"
              type="button"
              className="btn btn-sm btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;

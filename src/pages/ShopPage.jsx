import React from "react";
import Header from "./components/Header";
import ShopItem from "./components/ShopItem";
import "./ShopPage.css";

function ShopPage() {
  return (
    <>
      <Header />
      <div id="item-cards-div">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </>
  );
}

export default ShopPage;

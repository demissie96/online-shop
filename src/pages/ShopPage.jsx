import React from "react";
import Header from "./components/Header";
import ShopItem from "./components/ShopItem";
import "./ShopPage.css";

function ShopPage() {
  return (
    <>
      <Header />
      <div id="item-cards-div">
        <ShopItem name="Smartphone" image="/images/items/smart-phone.jpg" />
        <ShopItem name="Headphones" image="/images/items/headphones.jpeg" />
        <ShopItem name="Laptop" image="/images/items/laptop.jpg" />
        <ShopItem name="Keyboard" image="/images/items/keyboard.jpg" />
        <ShopItem name="Mouse" image="/images/items/mouse.jpg" />
        <ShopItem
          name="Thermal Paste"
          image="/images/items/thermal-paste.jpg"
        />
        <ShopItem name="RAM" image="/images/items/ram.jpg" />
        <ShopItem name="SSD" image="/images/items/ssd.webp" />
        <ShopItem name="Monitor" image="/images/items/monitor.jpg" />
      </div>
    </>
  );
}

export default ShopPage;

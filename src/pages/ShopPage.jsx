import React, { useState } from "react";
import Header from "./components/Header";
import ShopItem from "./components/ShopItem";
import "./ShopPage.css";

let smartphoneSum = 0;
let quantityNamePhone = "pc";
let headphonesSum = 0;
let quantityNameHeadphones = "pc";
let laptopSum = 0;
let quantityNameLaptop = "pc";
let keyboardSum = 0;
let quantityNameKeyboard = "pc";
let mouseSum = 0;
let quantityNameMouse = "pc";
let thermalPasteSum = 0;
let quantityNamePaste = "pc";
let ramSum = 0;
let quantityNameRam = "pc";
let ssdSum = 0;
let quantityNameSsd = "pc";
let monitorSum = 0;
let quantityNameMonitor = "pc";

function ShopPage() {
  const [phone, setPhone] = useState(smartphoneSum);
  const [headphone, setHeadphone] = useState(headphonesSum);
  const [laptop, setLaptop] = useState(laptopSum);
  const [keyboard, setKeyboard] = useState(keyboardSum);
  const [mouse, setMouse] = useState(mouseSum);
  const [thermalPaste, setThermalPaste] = useState(thermalPasteSum);
  const [ram, setRam] = useState(ramSum);
  const [ssd, setSsd] = useState(ssdSum);
  const [monitor, setMonitor] = useState(monitorSum);

  function changeAmount(e) {
    console.log(e.name);
    console.log(e.operator);
    if (e.name === "Smartphone" && e.operator === "plus") {
      smartphoneSum++;
      setPhone(smartphoneSum);
      if (smartphoneSum > 0) {
        quantityNamePhone = "pcs";
      } else {
        quantityNamePhone = "pc";
      }
    } else if (e.name === "Smartphone" && e.operator === "minus") {
      smartphoneSum--;
      setPhone(smartphoneSum);
      if (smartphoneSum > 0) {
        quantityNamePhone = "pcs";
      } else {
        quantityNamePhone = "pc";
      }
    } else if (e.name === "Headphones" && e.operator === "plus") {
      headphonesSum++;
      setHeadphone(headphonesSum);
      if (headphonesSum > 0) {
        quantityNameHeadphones = "pcs";
      } else {
        quantityNameHeadphones = "pc";
      }
    } else if (e.name === "Headphones" && e.operator === "minus") {
      headphonesSum--;
      setHeadphone(headphonesSum);
      if (headphonesSum > 0) {
        quantityNameHeadphones = "pcs";
      } else {
        quantityNameHeadphones = "pc";
      }
    } else if (e.name === "Laptop" && e.operator === "plus") {
      laptopSum++;
      setLaptop(laptopSum);
      if (laptopSum > 0) {
        quantityNameLaptop = "pcs";
      } else {
        quantityNameLaptop = "pc";
      }
    } else if (e.name === "Laptop" && e.operator === "minus") {
      laptopSum--;
      setLaptop(laptopSum);
      if (laptopSum > 0) {
        quantityNameLaptop = "pcs";
      } else {
        quantityNameLaptop = "pc";
      }
    } else if (e.name === "Keyboard" && e.operator === "plus") {
      keyboardSum++;
      setKeyboard(keyboardSum);
      if (keyboardSum > 0) {
        quantityNameKeyboard = "pcs";
      } else {
        quantityNameKeyboard = "pc";
      }
    } else if (e.name === "Keyboard" && e.operator === "minus") {
      keyboardSum--;
      setKeyboard(keyboardSum);
      if (keyboardSum > 0) {
        quantityNameKeyboard = "pcs";
      } else {
        quantityNameKeyboard = "pc";
      }
    } else if (e.name === "Thermal Paste" && e.operator === "plus") {
      thermalPasteSum++;
      setThermalPaste(thermalPasteSum);
      if (thermalPasteSum > 0) {
        quantityNamePaste = "pcs";
      } else {
        quantityNamePaste = "pc";
      }
    } else if (e.name === "Thermal Paste" && e.operator === "minus") {
      thermalPasteSum--;
      setThermalPaste(thermalPasteSum);
      if (thermalPasteSum > 0) {
        quantityNamePaste = "pcs";
      } else {
        quantityNamePaste = "pc";
      }
    } else if (e.name === "RAM" && e.operator === "plus") {
      ramSum++;
      setRam(ramSum);
      if (ramSum > 0) {
        quantityNameRam = "pcs";
      } else {
        quantityNameRam = "pc";
      }
    } else if (e.name === "RAM" && e.operator === "minus") {
      ramSum--;
      setRam(ramSum);
      if (ramSum > 0) {
        quantityNameRam = "pcs";
      } else {
        quantityNameRam = "pc";
      }
    } else if (e.name === "SSD" && e.operator === "plus") {
      ssdSum++;
      setSsd(ssdSum);
      if (ssdSum > 0) {
        quantityNameSsd = "pcs";
      } else {
        quantityNameSsd = "pc";
      }
    } else if (e.name === "SSD" && e.operator === "minus") {
      ssdSum--;
      setSsd(ssdSum);
      if (ssdSum > 0) {
        quantityNameSsd = "pcs";
      } else {
        quantityNameSsd = "pc";
      }
    } else if (e.name === "Mouse" && e.operator === "plus") {
      mouseSum++;
      setMouse(mouseSum);
      if (mouseSum > 0) {
        quantityNameMouse = "pcs";
      } else {
        quantityNameMouse = "pc";
      }
    } else if (e.name === "Mouse" && e.operator === "minus") {
      mouseSum--;
      setMouse(mouseSum);
      if (mouseSum > 0) {
        quantityNameMouse = "pcs";
      } else {
        quantityNameMouse = "pc";
      }
    } else if (e.name === "Monitor" && e.operator === "plus") {
      monitorSum++;
      setMonitor(monitorSum);
      if (monitorSum > 0) {
        quantityNameMonitor = "pcs";
      } else {
        quantityNameMonitor = "pc";
      }
    } else if (e.name === "Monitor" && e.operator === "minus") {
      monitorSum--;
      setMonitor(monitorSum);
      if (monitorSum > 0) {
        quantityNameMonitor = "pcs";
      } else {
        quantityNameMonitor = "pc";
      }
    }
  }

  return (
    <>
      <Header />
      <div id="item-cards-div">
        <ShopItem
          changeAmount={changeAmount}
          amount={phone}
          quantityName={quantityNamePhone}
          name="Smartphone"
          image="/images/items/smart-phone.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={headphone}
          quantityName={quantityNameHeadphones}
          name="Headphones"
          image="/images/items/headphones.jpeg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={laptop}
          quantityName={quantityNameLaptop}
          name="Laptop"
          image="/images/items/laptop.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={keyboard}
          quantityName={quantityNameKeyboard}
          name="Keyboard"
          image="/images/items/keyboard.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={mouse}
          quantityName={quantityNameMouse}
          name="Mouse"
          image="/images/items/mouse.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={thermalPaste}
          quantityName={quantityNamePaste}
          name="Thermal Paste"
          image="/images/items/thermal-paste.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={ram}
          quantityName={quantityNameRam}
          name="RAM"
          image="/images/items/ram.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={ssd}
          quantityName={quantityNameSsd}
          name="SSD"
          image="/images/items/ssd.webp"
        />
        <ShopItem
          changeAmount={changeAmount}
          amount={monitor}
          quantityName={quantityNameMonitor}
          name="Monitor"
          image="/images/items/monitor.jpg"
        />
      </div>
    </>
  );
}

export default ShopPage;

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

// This has to be accurate. This data will be shown in the shopping cart and checkout.
const shoppingCartObject = [
  {
    amount: smartphoneSum,
    name: "Smartphone",
    quantityName: quantityNamePhone,
  },
  {
    amount: headphonesSum,
    name: "Headphones",
    quantityName: quantityNameHeadphones,
  },
  {
    amount: laptopSum,
    name: "Laptop",
    quantityName: quantityNameLaptop,
  },
  {
    amount: keyboardSum,
    name: "Keyboard",
    quantityName: quantityNameKeyboard,
  },
  { amount: mouseSum, name: "Mouse", quantityName: quantityNameMouse },
  {
    amount: thermalPasteSum,
    name: "Thermal Paste",
    quantityName: quantityNamePaste,
  },
  { amount: ramSum, name: "RAM", quantityName: quantityNameRam },
  { amount: ssdSum, name: "SSD", quantityName: quantityNameSsd },
  {
    amount: monitorSum,
    name: "Monitor",
    quantityName: quantityNameMonitor,
  },
];

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
  const [shoppingCart] = useState(shoppingCartObject);
  const [sumOfItemsInCart, setSumOfItemsInCart] = useState(0);

  function countItemsInCart() {
    let sum = 0;
    shoppingCartObject.forEach((element) => {
      sum += element.amount;
    });
    setSumOfItemsInCart(sum);
  }

  function addToCart(e) {
    console.log(e);

    if (e === "Smartphone") {
      shoppingCartObject[0].amount = smartphoneSum;
      shoppingCartObject[0].quantityName = "pc";
    } else if (e === "Headphones") {
      shoppingCartObject[1].amount = headphonesSum;
      shoppingCartObject[1].quantityName = "pc";
    } else if (e === "Laptop") {
      shoppingCartObject[2].amount = laptopSum;
      shoppingCartObject[2].quantityName = "pc";
    } else if (e === "Keyboard") {
      shoppingCartObject[3].amount = keyboardSum;
      shoppingCartObject[3].quantityName = "pc";
    } else if (e === "Thermal Paste") {
      shoppingCartObject[5].amount = thermalPasteSum;
      shoppingCartObject[5].quantityName = "pc";
    } else if (e === "RAM") {
      shoppingCartObject[6].amount = ramSum;
      shoppingCartObject[6].quantityName = "pc";
    } else if (e === "SSD") {
      shoppingCartObject[7].amount = ssdSum;
      shoppingCartObject[7].quantityName = "pc";
    } else if (e === "Mouse") {
      shoppingCartObject[4].amount = mouseSum;
      shoppingCartObject[4].quantityName = "pc";
    } else if (e === "Monitor") {
      shoppingCartObject[8].amount = monitorSum;
      shoppingCartObject[8].quantityName = "pc";
    }

    countItemsInCart();
  }

  function deleteFromCart(e) {
    console.log(e);

    if (e === "Smartphone") {
      shoppingCartObject[0].amount = 0;
      shoppingCartObject[0].quantityName = quantityNamePhone;
    } else if (e === "Headphones") {
      shoppingCartObject[1].amount = 0;
      shoppingCartObject[1].quantityName = quantityNameHeadphones;
    } else if (e === "Laptop") {
      shoppingCartObject[2].amount = 0;
      shoppingCartObject[2].quantityName = quantityNameLaptop;
    } else if (e === "Keyboard") {
      shoppingCartObject[3].amount = 0;
      shoppingCartObject[3].quantityName = quantityNameKeyboard;
    } else if (e === "Thermal Paste") {
      shoppingCartObject[5].amount = 0;
      shoppingCartObject[5].quantityName = quantityNamePaste;
    } else if (e === "RAM") {
      shoppingCartObject[6].amount = 0;
      shoppingCartObject[6].quantityName = quantityNameRam;
    } else if (e === "SSD") {
      shoppingCartObject[7].amount = 0;
      shoppingCartObject[7].quantityName = quantityNameSsd;
    } else if (e === "Mouse") {
      shoppingCartObject[4].amount = 0;
      shoppingCartObject[4].quantityName = quantityNameMouse;
    } else if (e === "Monitor") {
      shoppingCartObject[8].amount = 0;
      shoppingCartObject[8].quantityName = quantityNameMonitor;
    }

    countItemsInCart();
  }

  function changeAmount(e) {
    if (e.name === "Smartphone" && e.operator === "plus") {
      smartphoneSum++;
      setPhone(smartphoneSum);

      if (smartphoneSum > 1) {
        quantityNamePhone = "pcs";
      } else {
        quantityNamePhone = "pc";
      }
    } else if (e.name === "Smartphone" && e.operator === "minus") {
      smartphoneSum--;
      setPhone(smartphoneSum);

      if (smartphoneSum > 1) {
        quantityNamePhone = "pcs";
      } else {
        quantityNamePhone = "pc";
      }
    } else if (e.name === "Headphones" && e.operator === "plus") {
      headphonesSum++;
      setHeadphone(headphonesSum);

      if (headphonesSum > 1) {
        quantityNameHeadphones = "pcs";
      } else {
        quantityNameHeadphones = "pc";
      }
    } else if (e.name === "Headphones" && e.operator === "minus") {
      headphonesSum--;
      setHeadphone(headphonesSum);

      if (headphonesSum > 1) {
        quantityNameHeadphones = "pcs";
      } else {
        quantityNameHeadphones = "pc";
      }
    } else if (e.name === "Laptop" && e.operator === "plus") {
      laptopSum++;
      setLaptop(laptopSum);

      if (laptopSum > 1) {
        quantityNameLaptop = "pcs";
      } else {
        quantityNameLaptop = "pc";
      }
    } else if (e.name === "Laptop" && e.operator === "minus") {
      laptopSum--;
      setLaptop(laptopSum);

      if (laptopSum > 1) {
        quantityNameLaptop = "pcs";
      } else {
        quantityNameLaptop = "pc";
      }
    } else if (e.name === "Keyboard" && e.operator === "plus") {
      keyboardSum++;
      setKeyboard(keyboardSum);

      if (keyboardSum > 1) {
        quantityNameKeyboard = "pcs";
      } else {
        quantityNameKeyboard = "pc";
      }
    } else if (e.name === "Keyboard" && e.operator === "minus") {
      keyboardSum--;
      setKeyboard(keyboardSum);

      if (keyboardSum > 1) {
        quantityNameKeyboard = "pcs";
      } else {
        quantityNameKeyboard = "pc";
      }
    } else if (e.name === "Thermal Paste" && e.operator === "plus") {
      thermalPasteSum++;
      setThermalPaste(thermalPasteSum);

      if (thermalPasteSum > 1) {
        quantityNamePaste = "pcs";
      } else {
        quantityNamePaste = "pc";
      }
    } else if (e.name === "Thermal Paste" && e.operator === "minus") {
      thermalPasteSum--;
      setThermalPaste(thermalPasteSum);

      if (thermalPasteSum > 1) {
        quantityNamePaste = "pcs";
      } else {
        quantityNamePaste = "pc";
      }
    } else if (e.name === "RAM" && e.operator === "plus") {
      ramSum++;
      setRam(ramSum);

      if (ramSum > 1) {
        quantityNameRam = "pcs";
      } else {
        quantityNameRam = "pc";
      }
    } else if (e.name === "RAM" && e.operator === "minus") {
      ramSum--;
      setRam(ramSum);

      if (ramSum > 1) {
        quantityNameRam = "pcs";
      } else {
        quantityNameRam = "pc";
      }
    } else if (e.name === "SSD" && e.operator === "plus") {
      ssdSum++;
      setSsd(ssdSum);

      if (ssdSum > 1) {
        quantityNameSsd = "pcs";
      } else {
        quantityNameSsd = "pc";
      }
    } else if (e.name === "SSD" && e.operator === "minus") {
      ssdSum--;
      setSsd(ssdSum);

      if (ssdSum > 1) {
        quantityNameSsd = "pcs";
      } else {
        quantityNameSsd = "pc";
      }
    } else if (e.name === "Mouse" && e.operator === "plus") {
      mouseSum++;
      setMouse(mouseSum);

      if (mouseSum > 1) {
        quantityNameMouse = "pcs";
      } else {
        quantityNameMouse = "pc";
      }
    } else if (e.name === "Mouse" && e.operator === "minus") {
      mouseSum--;
      setMouse(mouseSum);

      if (mouseSum > 1) {
        quantityNameMouse = "pcs";
      } else {
        quantityNameMouse = "pc";
      }
    } else if (e.name === "Monitor" && e.operator === "plus") {
      monitorSum++;
      setMonitor(monitorSum);

      if (monitorSum > 1) {
        quantityNameMonitor = "pcs";
      } else {
        quantityNameMonitor = "pc";
      }
    } else if (e.name === "Monitor" && e.operator === "minus") {
      monitorSum--;
      setMonitor(monitorSum);

      if (monitorSum > 1) {
        quantityNameMonitor = "pcs";
      } else {
        quantityNameMonitor = "pc";
      }
    }
  }

  return (
    <>
      <Header shoppingCart={shoppingCart} sum={sumOfItemsInCart} deleteFromCart={deleteFromCart} />
      <div id="item-cards-div">
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={phone}
          quantityName={quantityNamePhone}
          name="Smartphone"
          image="/images/items/smart-phone.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={headphone}
          quantityName={quantityNameHeadphones}
          name="Headphones"
          image="/images/items/headphones.jpeg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={laptop}
          quantityName={quantityNameLaptop}
          name="Laptop"
          image="/images/items/laptop.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={keyboard}
          quantityName={quantityNameKeyboard}
          name="Keyboard"
          image="/images/items/keyboard.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={mouse}
          quantityName={quantityNameMouse}
          name="Mouse"
          image="/images/items/mouse.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={thermalPaste}
          quantityName={quantityNamePaste}
          name="Thermal Paste"
          image="/images/items/thermal-paste.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={ram}
          quantityName={quantityNameRam}
          name="RAM"
          image="/images/items/ram.jpg"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
          amount={ssd}
          quantityName={quantityNameSsd}
          name="SSD"
          image="/images/items/ssd.webp"
        />
        <ShopItem
          changeAmount={changeAmount}
          addToCart={addToCart}
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

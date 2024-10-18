import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/resturant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "식당",
  category: "western",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipCode: 123123,
  },
  menu: [
    { name: "tomato pasta", price: 2000, category: "pasta" },
    { name: "garlic steak", price: 2000, category: "steak" },
  ],
};

const App: React.FC = () => {
  const [myrestaurant, setMyrestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) =>{
    setMyrestaurant({...myrestaurant, address:address})
  }
  const showBestMenuName = (name:string) =>{
    return name
  }
  return (
    <div className="App">
      <Store info={myrestaurant} changeAddress ={changeAddress}/>
      <BestMenu name="불고기피자" category="피자" showBestMenuName ={showBestMenuName}/>
    </div>
  );
};

export default App;

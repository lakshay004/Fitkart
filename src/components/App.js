import '../css/App.css';
import Productlist from "./Productlist.js";
import NavBar from './NavBar.js';
import PromoAds from './PromoAds'
import React , { useState } from 'react';


export const MyContext = React.createContext();

function App() {
  const[ProductIDSelected,SetProductIDSelected]=useState()
  const [product_selected_details,Setproduct_selected_details]=useState();

  function ProductSelected(id){
    const product_details =TotalProduct.filter(product => {
      return (product.id===id)
    })
    return product_details[0];
  }

  function handleaddtocart(id){
    SetProductIDSelected(id);
    const product_value= ProductSelected(id);
    Setproduct_selected_details(product_value.name);
  }

  const usefulfunction = {
    handleaddtocart,
    product_selected_details
  }

  return (
    <MyContext.Provider value={usefulfunction}>
      <NavBar />
      <PromoAds />
      <Productlist TotalProduct={TotalProduct}/>
    </MyContext.Provider>
  );
}


const TotalProduct = [
  {
    id:1,
    name:'Ultimate Nutrition Whey Protein',
    quantity: '1kg',
    price : 2000
  },
  {
    id:2,
    name:'Joe Weider Whey Protein',
    quantity: '1kg',
    price : 2100
  },
  {
    id:3,
    name:'RC Whey Protein',
    quantity: '1kg',
    price : 2500
  },
  {
    id:4,
    name:'ON Whey Protein',
    quantity: '1kg',
    price : 2400
  },
  {
    id:5,
    name:'Dymatize Whey Protein',
    quantity: '1kg',
    price : 2300
  },
  {
    id:6,
    name:'MP Whey Protein',
    quantity: '1kg',
    price : 2200
  }
]

export default App;

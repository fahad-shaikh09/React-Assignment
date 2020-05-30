import React from "react";
import { useState, useEffect} from 'react';

import axios from "axios";

function Catalog() {
  
const [catalogData, SetCatalogData] = useState([])

// useEffect(() => {
    // axios.get('http://localhost:3000/products')
    // .then((res) => {
    //     SetCatalogData(res.data)
        // console.log(res.data, "res")
    // })
// },[] )

    const showData = () => {
        console.log(catalogData)
        axios.get('http://localhost:3000/products')
        .then((res) => {
        SetCatalogData(res.data)})

        
    
} 
  
    return(
      <div>
        <h1>Hello from Catalog component</h1>
            
        <button onClick={showData}>Click here to show Product Catalog</button> 
        
        <ul>
        {
            catalogData.map((val, key) => (
                <li key={key} > Inventory ID: {val.id} - Title: {val.productTitle} - Product ID: {val.productID} - Image URL: {val.productImage} - Details: {val.productDetails} - Prize: {val.productPrize} </li>
            ))
        }    
        </ul>

    </div>
    )

}
export default Catalog;
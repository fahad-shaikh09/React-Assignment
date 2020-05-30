import React from "react";
import { useState, useEffect} from 'react';

import axios from "axios";

function Dashboard() {
  
    const [form, SetForm] = useState({
      productTitle: "",
      productDetails: "",
      productPrize: "",
      productImage: "",
      productID: "",
  
    })
    
    useEffect(() => {
      
    },[form])
  
    
    const changeHandler = (event) => {
      let { name, value } = event.target
      SetForm(prev => (
        {
          ...prev,
          [name]: value
        } 
        )      
      )
    }
  
    const submit = (e) => {
      e.preventDefault();
      console.log("submit")
    }
  
    const postToApi = async () => {
    await axios.post('http://localhost:3000/products', form)
    console.log(form)
    }

    
  
    return(
      <div>
      
      <h1>Hello from Dashboard component</h1>

         <form onSubmit={submit}>
         Product Title: <input type="text" placeholder="enter Title" name="productTitle" value={form.productTitle}  onChange={changeHandler} /> 
          <br />
          <br /> 
         Product Details: <input type="text" placeholder="enter Details" name="productDetails" value={form.productDetails}  onChange={changeHandler} /> 
          <br /> 
          <br /> 
         Product Prize: <input type="text" placeholder="enter Prize" name="productPrize" value={form.productPrize}  onChange={changeHandler} /> 
          <br /> 
          <br /> 
         Product Image: <input type="text" placeholder="enter Image" name="productImage" value={form.productImage}  onChange={changeHandler} /> 
          <br /> 
          <br /> 
         Product ID: <input type="text" placeholder="enter ID" name="productID" value={form.productID}  onChange={changeHandler} /> 
          <br /> 
          <br /> 
               
          <button onClick={postToApi}>Post to API</button>
  
       </form> 

    </div>
    )
    }

export default Dashboard;
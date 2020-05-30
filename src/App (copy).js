import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {
  
  const [form, SetForm] = useState({
    productTitle: "",
    productDetails: "",
    productPrize: "",
    productImage: "",
    productID: "",

  })
  
  useEffect(() => {
    
  // postToApi();
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
  let post = await axios.post('http://localhost:3000/products', form)
  console.log(form)
  }

  const showData = () => {
    axios.get("http://localhost:3000/products")
    .then((res) => {
      
      console.log("Data fetched");
      console.log(res.data) ;
    }


    )
  }

  return(
    <div>
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
      <br /> <br />

    <h3> Details of Entered Product is:            </h3> 
    <h3> Product Title: {form.productTitle}        </h3> 
    <h3> Product Details: {form.productDetails}    </h3> 
    <h3> Product Prize: {form.productPrize}        </h3> 
    <h3> Product Image: {form.productImage}        </h3> 
    <h3> Product ID: {form.productID}              </h3> 
    <hr />

    <button onClick={showData}>Click here to show Product Catalog</button>


    </div>
  );
}

export default App;

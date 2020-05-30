import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [form, SetForm] = useState({
    firstName: "",
    lastName: ""
  })

  const [counter, setCounter] = useState(0)

  const submit = (e) => {
    e.preventDefault();
    console.log("submit")
  }

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

  useEffect( () => {
    document.title = counter;
    fetchApi();
  },[counter])


  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter -1);
  }

  const fetchApi = () => {
    // fetch("https://swapi.dev/api/people/1")
    // .then(res => {
    //   console.log(res.json())
    // }

    // ) 

    axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        console.log(res.data);
      }
    )

  }


  return(
    <div>
      <form onSubmit={submit}>
        First Name <input type="text" placeholder="First name" name="firstName" value={form.firstName}  onChange={changeHandler} /> 
        <br />
        <br /> 
        Last Name  <input type="text" placeholder="Last name"  name="lastName"  value={form.lastName} onChange={changeHandler} /> 
        <br /> 
        <br /> 
        <button>Submit</button>
     
     </form>

      <h1>{form.firstName} </h1>
      <h1>{form.lastName} </h1>

      Counter:  {counter}
      <br />
      <button onClick={increment} >Increment</button> <br /> <br />
      <button onClick={decrement} >Decrement</button>

    </div>
  );
}

export default App;

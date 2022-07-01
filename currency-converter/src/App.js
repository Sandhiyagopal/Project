import React from "react";
import {useState} from 'react'
import axios from 'axios'
function App() {

  let [amount,setAmount]=useState(0)
  let [from,setFrom]=useState()
  let [to,setTo]=useState()
  let [result,setResult]=useState()
  
  let changeHandler=(event)=>{
    setAmount(parseInt(event.target.value))
  }
  let fromHandler=(event)=>{
    setFrom(event.target.value)
  }
  let toHandler=(event)=>{
    setTo(event.target.value)
  }
  let convertHandler=(event)=>{
    if(from===to){
      setResult(amount)
    }
    axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
         .then((response)=>{
         console.log(response.data)
         console.log(response.data.rates[`${to}`])
         setResult(response.data.rates[`${to}`])
         })
  }
  let submitHandler=(e)=>{
    e.preventDefault(); 
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex bg-success">
              <h2 className="mx-auto">Currency Converter</h2>
            </div>
            <div className="card-body bg-dark text-white">
              <form onSubmit={submitHandler}>
              <div className="d-flex">
                <label className="mx-auto "><h3 >Enter The Amount</h3></label>
                </div>
                <div className="form-group">
                <input className="form-control" type="text" placeholder="Enter the amount"
                onChange={changeHandler}/>
              </div>
              <div>
              <label><h3>From:</h3></label>
              </div>
              <div className="form-group">
              <select className="form-control" onChange={fromHandler}>
              <option>Select the currency </option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CNY">CNY</option>
                    <option value="PHP">PHP</option>
                    <option value="JPY">JPY</option>
                    <option value="RON">RON</option>
                    <option value="NZD">NZD</option>
                    <option value="EUR">EUR</option>
                    <option value="SGD">SGD</option>
                    <option value="TRY">TRY</option>
                    <option value="ZAR">ZAR</option>
                </select>
              </div>
              <div>
              <label>
                <h3>To:</h3></label>
              </div>
              <div className="form-group">
              <select className="form-control" onChange={toHandler}>
              <option>Select the currency </option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CNY">CNY</option>
                    <option value="PHP">PHP</option>
                    <option value="JPY">JPY</option>
                    <option value="RON">RON</option>
                    <option value="NZD">NZD</option>
                    <option value="EUR">EUR</option>
                    <option value="SGD">SGD</option>
                    <option value="TRY">TRY</option>
                    <option value="ZAR">ZAR</option>
                </select>
              </div>
              <div>
               <button className="btn btn-success" onClick={convertHandler}>Convert</button>
              </div>
              <div>
              <h4>The converted amount is:  {result} ({to})</h4>
              </div>
              </form>
            </div>
            <div className="card-footer bg-success">
              <h6>...</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

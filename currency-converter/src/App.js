import React from "react";
import {useState} from 'react'
import axios from 'axios'
function App() {
  let [amount,setAmount]=useState(0)
  let [value,setValue]=useState()
  let [value1,setValue1]=useState()
  let [result,setResult]=useState()

  let getamountHandler=(e)=>{
    setAmount(e.target.value)
  }
  let fromHandler=(e)=>{
    setValue(e.target.value)
  }
  let toHandler=(e)=>{
    setValue1(e.target.value)
  }
  let submitHandler=(e)=>{
    e.preventDefault()
  }
  let convertHandler=()=>{
    if(value===value1){
      setResult(amount)
    }
    axios
    .get(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${value1}&to=${value}`
    )
    .then((response)=>{
      console.log(response.data)
      console.log(response.data.rates[value])
      setResult(response.data.rates[value]);
    })
    .catch((err)=>{
      console.log(err)
    })
  }  
  return(
    <div className="container">
      <pre>{amount}</pre>
      <pre>{value}</pre>
      <pre>{value1}</pre>
      <pre>{result}</pre>
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-7 mt-5">
            <div className="card">
              <div className="card-header bg-success d-flex">
                <h2 className="mx-auto">Currency Converter</h2>
              </div>
              <div className="card-body bg-dark text-white">
                <form onSubmit={submitHandler}>
                  <div className="d-flex">
                  <label className="mx-auto"><h3>Enter the amount</h3></label>
                  </div>
                  <div className="form-group">
                    <input className="form-control mx-auto" placeholder="Enter amount to convert"
                    type="number" onChange={getamountHandler}/>
                  </div>
                  <div >
                    <label ><h3>From:</h3></label>
                  </div>
                  <div className="form-group">
                    <select className="form-control" onChange={fromHandler}>
                    <option value="-1">Select the currency </option>
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
                    <label><h3>To:</h3></label>
                  </div>
                  <div className="form-group">
                    <select className="form-control" onChange={toHandler}>
                    <option value="-1">Select the currency </option>
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
                  <br></br>
                  <div className="d-flex form-group">
                    <input type="submit" className="btn btn-success mx-auto form-control" value="convert"
                   onClick={convertHandler}/>
                  </div>
                </form>
                <h5>
                  { result>=0
                  ? `The amount of entered in ${value} is  ${result}  (${value1})`
                :`Please enter amount... Select currency and convert`}
                </h5>
              </div>
              <div className="card-footer bg-success">
                <h6>...</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default App
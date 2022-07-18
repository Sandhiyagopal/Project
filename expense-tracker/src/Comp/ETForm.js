import React from 'react'
import { useState } from 'react'

const ETForm = (props) => {
    let {track, setTrack}=props
    let [totalAmount,setTotalAmount]=useState(0)
    let [value,setValue]=useState(0)
    value=parseInt(value)
    let todayDate=new Date().toLocaleString()

    let formHandler=(e)=>{
        setValue(e.target.value)
    }
    let addAmountHandler=()=>{
        setTotalAmount(totalAmount+value)
        setValue("")
        setTrack([...track,{
            tdate:todayDate,
            addAmount:value,
            removeAmount:"-",
            balanceAmount:totalAmount
        }])
        console.log(totalAmount)
    }
    let removeAmountHandler=()=>{
        setTotalAmount(totalAmount-value)
        setTrack([...track,{
            tdate:todayDate,
            addAmount:"-",
            removeAmount:value,
            balanceAmount:totalAmount
        }])
        console.log(totalAmount)
    }

  return (
    <div className="container">
        <pre>Amount:{value}</pre>
        <pre>Date:{todayDate}</pre>
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header bg-primary">
                    <h3>Expense Tracker</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input className="form-control" type="number" onChange={formHandler} />
                        </div>
                        <input type="submit" value="Add" className="btn btn-success mr-5" onClick={addAmountHandler}/>
                        <input type="submit" value="Remove" className="btn btn-warning" onClick={removeAmountHandler}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ETForm
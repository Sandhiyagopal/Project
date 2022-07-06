import React from 'react'
import {useState} from 'react'

const Form = () => {
    const [forms,setFroms]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        city:""})
      const [list,setList]=useState([])
   

let updateHandler=(event)=>{
    setFroms({...forms, [event.target.name] : event.target.value})
}
let formHandler=(f)=>{
    f.preventDefault()
    console.log(forms.name,forms.email)
    setList((e)=>[...e,forms])
}

  return (
    <>
    <pre>{JSON.stringify({forms})}</pre>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-7">
               <div className="card">
                <div className="card-header d-flex bg-primary">
                    <h3 className="mx-auto">Form-Val</h3>
                </div>
                <div className="card-body bg-warning text-white">
                    <form onSubmit={formHandler}>
                        <div className="form-group"> 
                        <label><h6>Name :</h6></label>
                        <input className="form-control" type="text" name="name"
                         placeholder="Please Enter your Name" onChange={updateHandler}/>
                        </div>
                        <div className="form-group">
                            <label><h6>Email Id:</h6></label>
                            <input className="form-control" type="text" name="email"
                             placeholder="Please enter the email id" onChange={updateHandler}/>
                        </div>
                        <div className="form-group">
                            <label><h6>Password :</h6></label>
                            <input className="form-control" type="text" name="password"
                            placeholder="Please enter your password" onChange={updateHandler} />
                            <p className="text-muted">Password contain must be min 8 characters</p>
                        </div>
                        <div className="form-group">
                            <label><h6>Mobile No :</h6></label>
                            <input className="form-control" type="text" name="mobile" 
                            placeholder="Enter Mobile No" onChange={updateHandler}/>
                        </div>
                        <div className="form-group">
                            <label><h6>City :</h6></label>
                            <select className="form-control" name="city" onChange={updateHandler}>
                               <option>Select the city</option>
                                <option>Ahmedabad</option>
                                <option>Bangalore</option>
                                <option>Chennai</option>
                                <option>Covai</option>
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                                <option>Goa</option>
                                <option>Kerala</option>
                                <option>Patna</option>
                                <option>Lucknow</option>
                                <option>Kolkata</option>
                                <option>Shimla</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </select>
                         </div>
                         <div className="d-flex form-group mt-5">
                            <button className=" bg-primary text-white mx-auto form-control">Submit</button>
                         </div>
                    </form>
                </div>
               </div>
               <hr />
               <hr />
               <hr />
               <div>
              <table className="table table-hover md-9">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>City</th>
                  </tr>
                </thead>
                <div>
               {(Object.keys(forms).length>0)?
                <tbody>
                  {
                    list.map((a,index)=><div><tr key={index}>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.mobile}</td>
                        <td>{a.city}</td>
                      </tr>
                      </div>
                    )
                  }
                </tbody>
                  :null}
                  </div>
              </table>
              </div>
        </div>
    </div>
    </div>
    </>
  )
}
export default Form
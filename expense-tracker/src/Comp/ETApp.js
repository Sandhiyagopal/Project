import React from 'react'
import ETForm from './ETForm'
import ETTable from './ETTable'
import { useState } from 'react'

const ETApp = () => {
    let [track,setTrack]=useState([])
  return (
        <div className="container">
            <div className="row">
            <div className="col"></div>
                <div className="col-9">
                <h2 className="mt-5 ">   ETApp</h2><br></br>
                <ETForm track={track} setTrack={setTrack} />
                <hr />
                <ETTable track={track}/>
                </div>
            </div>
        </div>
       
  )
}

export default ETApp
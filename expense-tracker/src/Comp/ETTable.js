import React from 'react'

const ETTable = ({track}) => {
  return (
    <div className="container">
        <pre>{JSON.stringify(track)}</pre>
        <div className="row">
            <div className="col-md-11">
                <table className="table  table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>SL No</th>
                            <th>Date</th>
                            <th>Adding Amount</th>
                            <th>Remove Amount</th>
                            <th>BalanceAmount</th>
                        </tr>
                    </thead>
                    <tbody className="table table-striped">
                        {
                            track.map((track,index)=>{
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{track.tdate}</td>
                                    <td>{track.addAmount}</td>
                                    <td>{track.removeAmount}</td>
                                    <td>{track.balanceAmount}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ETTable
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark text-primary">
            <Link to="/et" className="navbar-brand">ET-App</Link>
            <div className="mx-auto">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/et" className="nav-link">Expense-Tracker</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
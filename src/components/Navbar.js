import React from 'react'
import './components.css'

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="logo navbar-brand" href="/#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ml-5">
                            <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link" href="/#">About us</a>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link" href="/#">Services</a>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link" href="/#">Team</a>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link" href="/#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
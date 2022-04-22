import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 ">
                <div className="container">
                    <a className="navbar-brand" href="Dashboard.html">
                        Movie Ticket Booking App
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>&nbsp;&nbsp;&nbsp;

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link btn btn-info" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link btn btn-info" to="/dashboard">
                                    Book Tickets
                                </Link>
                            </li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info" href="#">
                                    Our Services
                                </a>
                            </li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info" href="#">
                                    About Us
                                </a>
                            </li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
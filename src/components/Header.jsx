import React, { useState } from "react";
import EventNoteIcon from '@material-ui/icons/EventNote';
import CloseIcon from '@material-ui/icons/Close';
import "./Header.css"

function Header(props) {
    const [sideOpen, setSideOpen] = useState(false)

    function openSide() {
        setSideOpen(true);
        
    };
    function closeSide() {
        setSideOpen(false);
        
    }

    return (
        <div>
            <section id="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <EventNoteIcon />ToDo</a>

                        <button onClick={openSide} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#note">Notes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#footer">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            {sideOpen ? <section id="sidebar">
                <div id="mySidenav" className="sidenav">
                    <a onClick={closeSide} className="closebtn"><CloseIcon /></a>
                    <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#note">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </section> : null}

        </div>
    )
}
export default Header;
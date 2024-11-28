import React from "react";
import './Footer.css'
import { FaListCheck } from "react-icons/fa6";
import { RxFileText } from "react-icons/rx";
import { GiThreeFriends } from "react-icons/gi";

function Footer () {
    return (
        <footer className="footer">
        <button className="footer-button">
        Tracker
        <FaListCheck size={30}/>
        </button>

        <button className="footer-button">
        Resources
        <RxFileText size={30}/>
        </button>

        <button className="footer-button">
        Community
        <GiThreeFriends size={30}/>
        </button>
        
        </footer>
        
    );
}

export default Footer;
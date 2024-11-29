import React from "react";
import './Footer.css'
import { FaListCheck } from "react-icons/fa6";
import { RxFileText } from "react-icons/rx";
import { GiThreeFriends } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


function Footer () {
    const navigate = useNavigate();
    return (
        <div className="footer">
			
        <button className="footer-button" onClick={() => navigate("/home")}>        
        {/* Tracker */}
        <FaListCheck size={30}/>
        </button>
		<span> &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; </span>

        <button className="footer-button" onClick={() => navigate("/blog")}>        
        {/* Resources */}
        <RxFileText size={30}/>
        </button>
		<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  </span>

        <button className="footer-button" onClick={() => navigate("/community")}>
        {/* Community */}
        <GiThreeFriends size={30}/>
        </button>
        
        </div>
        
    );
}

export default Footer;
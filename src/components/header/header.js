import React from 'react'; 
import styles from "./header.module.scss";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.header}>  
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/signin" >Sign In</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
        </div>
    );
}

export default Header;
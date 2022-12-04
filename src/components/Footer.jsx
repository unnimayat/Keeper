import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return(
        <header>
            <p>Copyright ⓒ {year}</p>
        </header>
    )
}
export default Footer;
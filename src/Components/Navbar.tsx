import React from "react";

const Navbar:React.FC=()=>{
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Conatct</a></li>
                <li><a href="/courses">Courses</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
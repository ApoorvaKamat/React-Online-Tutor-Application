import React from "react";  

export const NavBarDropdown = () =>{
    return(
        <div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown pe-4">
                    <a className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="p-2 bi bi-chat-square-text-fill" style={{fontSize :'20px'}}></i>  About Us
                    </a>
                    <ul className=" dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Test data</a></li>
                    <li><a className="dropdown-item" href="#">Test data</a></li>
                    <li><a className="dropdown-item" href="#">Test data</a></li>
                    </ul>
                </li>
                
               
                <li className="nav-item dropdown">
                <a className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="p-2 bi bi-book" style={{fontSize : '20px'}}></i> Subjects
                </a>
                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Mathematics</a></li>
                    <li><a className="dropdown-item" href="#">Physics</a></li>
                    <li><a className="dropdown-item" href="#">Computer Science</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    )
}
import React from 'react';
import Button from './buttonLogin';
import Navbar from './navbar';


export default function Home() {
  return (
    <div className="App">
   <nav className="navbar navbar-expand-sm bg-info navbar-dark bg-dark ps-5 pe-5 navblack">
      <div className="collapse navbar-collapse justify-content-end pe-3">    
              <Button name="Profile"/>
              <Button name="Log Out"/>   
      </div>                   
    </nav>
  </div>
  )
}
